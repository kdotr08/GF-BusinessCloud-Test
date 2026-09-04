"""Download and normalise the published Govforms documentation.

Run from the repository root. The generated JSON is intentionally checked in
so production builds do not depend on the old website remaining available.
"""

from __future__ import annotations

import hashlib
import html
import json
import mimetypes
import re
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = "https://govforms.co.uk/documentation/"
TUTORIAL_ROOT = "https://govforms.co.uk/tutorials/"
HELP_CENTRE_URL = "https://govforms.co.uk/help-centre"
MAP_URL = SOURCE_ROOT + "00-documentation-map"
OUTPUT_FILE = ROOT / "data" / "documentation.json"
ASSET_DIR = ROOT / "public" / "images" / "documentation"
USER_AGENT = "Govform documentation migration/1.0"


def fetch(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read()


def plain_text(fragment: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def slugify(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return value or "documentation"


def parse_navigation(markup: str) -> list[dict[str, object]]:
    match = re.search(r'<[^>]+id="docs-navigation"[^>]*>(.*?)</aside>', markup, re.S | re.I)
    if not match:
        raise RuntimeError("Could not find the documentation navigation")

    tokens = re.findall(r'<h2[^>]*>(.*?)</h2>|<a\s+[^>]*href="([^"]+)"[^>]*>(.*?)</a>', match.group(1), re.S | re.I)
    categories: list[dict[str, object]] = []
    category: dict[str, object] | None = None
    seen: set[str] = set()

    for heading, href, label in tokens:
        if heading:
            title = plain_text(heading).title()
            category = {"title": title, "slug": slugify(title), "articles": []}
            categories.append(category)
            continue
        if not category or "/documentation/" not in href:
            continue
        article_slug = urllib.parse.urlparse(href).path.rstrip("/").split("/")[-1]
        if article_slug == "00-documentation-map" or article_slug in seen:
            continue
        seen.add(article_slug)
        category["articles"].append({"slug": article_slug, "title": plain_text(label)})

    categories = [category for category in categories if category["articles"]]

    # Webflow ships newer navigation entries in compressed client-side data,
    # so they are visible in the rendered navigation but absent from the raw
    # HTML downloaded above. Keep those published entries explicit here.
    supplements = {
        "Library Settings": [
            ("19-manage-services-in-a-library", "Manage services in a library"),
            ("20-01-library-general-settings", "Library general settings"),
            ("20-02-library-style-settings", "Library style settings"),
            ("20-03-library-security-settings", "Library security settings"),
            ("20-04-library-authentication-settings", "Library authentication settings"),
            ("20-05-library-session-settings", "Library session settings"),
            ("20-06-library-cloud-storage-connections", "Library cloud storage connections"),
            ("20-07-library-third-party-api-settings", "Library third-party API settings"),
            ("20-08-library-email-configuration", "Library email configuration"),
            ("20-09-library-danger-zone", "Library danger zone"),
            ("20-10-library-integrations-and-data", "Library integrations and data"),
            ("20-11-library-patterns", "Library patterns"),
            ("20-12-library-properties-and-secrets", "Library properties and secrets"),
        ],
        "Service Settings": [
            ("21-08-service-change-management", "Service change management"),
            ("21-09-service-environments-and-deployments", "Service environments and deployments"),
        ],
    }
    for category in categories:
        additions = supplements.get(category["title"], [])
        existing = {article["slug"] for article in category["articles"]}
        category["articles"] = [
            *({"slug": slug, "title": title} for slug, title in additions if slug.startswith("19-")),
            *category["articles"],
            *({"slug": slug, "title": title} for slug, title in additions if not slug.startswith("19-")),
        ]

    guides = next(category for category in categories if category["title"] == "Guides")
    liquid_intro = next(article for article in guides["articles"] if article["slug"] == "11-write-liquid-templates")
    guides["articles"] = [article for article in guides["articles"] if article["slug"] != liquid_intro["slug"]]

    categories.extend(
        [
            {
                "title": "Govforms API",
                "slug": "govforms-api",
                "articles": [
                    {"slug": "33-govforms-api", "title": "Govforms API"},
                    {"slug": "33-01-api-fetch-submitted-form-data", "title": "Fetch submitted form data"},
                    {"slug": "33-02-api-fetch-analytics-events", "title": "Fetch analytics events"},
                    {"slug": "33-03-api-fetch-journey-analytics", "title": "Fetch journey analytics records"},
                    {"slug": "33-04-api-trigger-service-deployment", "title": "Trigger service deployment"},
                    {"slug": "33-05-api-get-deployed-service-version", "title": "Get deployed service version"},
                    {"slug": "33-06-api-delete-submitted-form-data", "title": "Delete submitted form data"},
                    {"slug": "33-13-api-response-hub", "title": "Response Hub API"},
                    {"slug": "33-14-mcp-capabilities", "title": "Govforms MCP capabilities"},
                ],
            },
            {
                "title": "Liquid Templates",
                "slug": "liquid-templates",
                "articles": [
                    liquid_intro,
                    {"slug": "34-01-liquid-built-in-filters-a-m", "title": "Arrays and collections"},
                    {"slug": "34-02-liquid-built-in-filters-n-z", "title": "Text and formatting"},
                    {"slug": "34-03-liquid-data-objects-and-encoding-filters", "title": "Data, objects and encoding"},
                    {"slug": "34-04-liquid-dates-times-and-number-filters", "title": "Dates, times and numbers"},
                    {"slug": "34-05-liquid-links-and-navigation-filters", "title": "Links and navigation"},
                    {"slug": "34-06-liquid-forms-fields-and-service-filters", "title": "Forms, fields and service"},
                ],
            },
        ]
    )

    return categories


class ContentExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.depth = 0
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        classes = (attributes.get("class") or "").split()
        if self.depth == 0 and (attributes.get("id") == "docs-content" or "w-richtext" in classes):
            self.depth = 1
            return
        if self.depth:
            self.parts.append(self.get_starttag_text())
            if tag not in {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}:
                self.depth += 1

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self.depth:
            self.parts.append(self.get_starttag_text())

    def handle_endtag(self, tag: str) -> None:
        if not self.depth:
            return
        self.depth -= 1
        if self.depth:
            self.parts.append(f"</{tag}>")

    def handle_data(self, data: str) -> None:
        if self.depth:
            self.parts.append(data)

    def handle_entityref(self, name: str) -> None:
        if self.depth:
            self.parts.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        if self.depth:
            self.parts.append(f"&#{name};")


ALLOWED_TAGS = {
    "a", "b", "blockquote", "br", "code", "div", "em", "figcaption", "figure",
    "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "ol", "p", "pre",
    "span", "strong", "table", "tbody", "td", "th", "thead", "tr", "ul",
}


class Sanitizer(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.parts: list[str] = []
        self.assets: set[str] = set()

    def clean_attrs(self, tag: str, attrs: list[tuple[str, str | None]]) -> str:
        clean: list[tuple[str, str]] = []
        attributes = {key: value for key, value in attrs if value is not None}
        if tag == "a" and "href" in attributes:
            href = urllib.parse.urljoin("https://govforms.co.uk", attributes["href"])
            parsed = urllib.parse.urlparse(href)
            if parsed.netloc in {"govforms.co.uk", "www.govforms.co.uk"} and "/documentation/" in parsed.path:
                slug = parsed.path.rstrip("/").split("/")[-1]
                href = (
                    "/resources"
                    if slug == "00-documentation-map"
                    else f"/resources/documentation/article/{slug}"
                )
            elif parsed.netloc in {"govforms.co.uk", "www.govforms.co.uk"} and "/tutorials/" in parsed.path:
                slug = parsed.path.rstrip("/").split("/")[-1]
                href = f"/resources/documentation/article/{slug}"
            clean.append(("href", href))
        if tag == "img" and "src" in attributes:
            src = urllib.parse.urljoin("https://govforms.co.uk", attributes["src"])
            self.assets.add(src)
            clean.append(("src", src))
            clean.append(("alt", attributes.get("alt", "")))
            clean.append(("loading", "lazy"))
        if tag in {"td", "th"} and "colspan" in attributes:
            clean.append(("colspan", attributes["colspan"]))
        return "".join(f' {key}="{html.escape(value, quote=True)}"' for key, value in clean)

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in ALLOWED_TAGS:
            self.parts.append(f"<{tag}{self.clean_attrs(tag, attrs)}>")

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in ALLOWED_TAGS:
            self.parts.append(f"<{tag}{self.clean_attrs(tag, attrs)} />")

    def handle_endtag(self, tag: str) -> None:
        if tag in ALLOWED_TAGS and tag not in {"br", "hr", "img"}:
            self.parts.append(f"</{tag}>")

    def handle_data(self, data: str) -> None:
        self.parts.append(data)

    def handle_entityref(self, name: str) -> None:
        self.parts.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        self.parts.append(f"&#{name};")


def extract_content(markup: str) -> tuple[str, set[str]]:
    extractor = ContentExtractor()
    extractor.feed(markup)
    sanitizer = Sanitizer()
    sanitizer.feed("".join(extractor.parts))
    return "".join(sanitizer.parts).strip(), sanitizer.assets


def parse_help_centre(markup: str) -> list[dict[str, object]]:
    """Turn the Help Centre's tabbed FAQ into documentation categories."""
    category_titles = {
        "1": "Help Centre: General",
        "2": "Help Centre: Platform & Features",
        "3": "Help Centre: Security & Compliance",
        "4": "Help Centre: Use Cases",
        "5": "Help Centre: Architecture & Integration",
    }
    pane_markers = list(
        re.finditer(r'data-w-tab="Tab ([1-5])" class="w-tab-pane[^\"]*"', markup, re.I)
    )
    faq_pattern = re.compile(
        r'<div[^>]*class="faq-large w-dropdown"[^>]*>.*?'
        r'<div class="paragraph-regular-2 bold">(.*?)</div>.*?'
        r'<div class="faq-content-large">(.*?)</div></nav></div>',
        re.S | re.I,
    )
    categories = {
        tab: {
            "title": title,
            "slug": f"help-centre-{slugify(title.removeprefix('Help Centre: '))}",
            "articles": [],
        }
        for tab, title in category_titles.items()
    }

    for match in faq_pattern.finditer(markup):
        preceding_panes = [pane for pane in pane_markers if pane.start() < match.start()]
        if not preceding_panes:
            continue
        tab = preceding_panes[-1].group(1)
        title = plain_text(match.group(1))
        sanitizer = Sanitizer()
        sanitizer.feed(match.group(2))
        content = "".join(sanitizer.parts).strip().replace("\u200d", "")
        if not title or not content:
            continue
        categories[tab]["articles"].append(
            {
                "slug": f"help-centre-{slugify(title)}",
                "title": title,
                "content": content,
            }
        )

    result = [categories[str(index)] for index in range(1, 6)]
    if sum(len(category["articles"]) for category in result) != 20:
        raise RuntimeError("Expected 20 Help Centre FAQs")
    return result


def download_article(article: dict[str, str]) -> tuple[str, str, set[str]]:
    if article.get("content"):
        return article["slug"], article["content"], set()
    markup = fetch(article.get("source", SOURCE_ROOT + article["slug"])).decode("utf-8", errors="replace")
    content, assets = extract_content(markup)
    if not content:
        raise RuntimeError(f"No article content found for {article['slug']}")
    return article["slug"], content, assets


def asset_path(url: str) -> tuple[Path, str]:
    parsed = urllib.parse.urlparse(url)
    basename = Path(parsed.path).name or "documentation-image"
    stem = slugify(Path(basename).stem)[:70]
    suffix = Path(basename).suffix.lower()
    if suffix not in {".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}:
        suffix = mimetypes.guess_extension(mimetypes.guess_type(parsed.path)[0] or "") or ".jpg"
    digest = hashlib.sha1(url.encode("utf-8")).hexdigest()[:10]
    filename = f"{stem}-{digest}{suffix}"
    return ASSET_DIR / filename, f"/images/documentation/{filename}"


def download_asset(url: str) -> tuple[str, str]:
    target, public_path = asset_path(url)
    target.write_bytes(fetch(url))
    return url, public_path


def main() -> None:
    map_markup = fetch(MAP_URL).decode("utf-8", errors="replace")
    categories = parse_navigation(map_markup)
    categories.insert(
        1,
        {
            "title": "Tutorials",
            "slug": "tutorials",
            "articles": [
                {
                    "slug": "01-get-started-with-govforms",
                    "title": "Get started with Govforms",
                    "source": TUTORIAL_ROOT + "01-get-started-with-govforms",
                },
                {
                    "slug": "02-uploads-and-conditional-page-flow",
                    "title": "Uploads and conditional page flow",
                    "source": TUTORIAL_ROOT + "02-uploads-and-conditional-page-flow",
                },
                {
                    "slug": "03-pre-population-validation-and-testing",
                    "title": "Pre-population, validation and testing",
                    "source": TUTORIAL_ROOT + "03-pre-population-validation-and-testing",
                },
            ],
        },
    )
    help_centre_markup = fetch(HELP_CENTRE_URL).decode("utf-8", errors="replace")
    categories.extend(parse_help_centre(help_centre_markup))
    articles = [article for category in categories for article in category["articles"]]

    content_by_slug: dict[str, str] = {}
    all_assets: set[str] = set()
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(download_article, article): article for article in articles}
        for future in as_completed(futures):
            slug, content, assets = future.result()
            content_by_slug[slug] = content
            all_assets.update(assets)

    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    asset_map: dict[str, str] = {}
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(download_asset, url): url for url in all_assets}
        for future in as_completed(futures):
            source, local = future.result()
            asset_map[source] = local

    for category in categories:
        for article in category["articles"]:
            content = content_by_slug[article["slug"]]
            for source, local in asset_map.items():
                content = content.replace(html.escape(source, quote=True), local).replace(source, local)
            article["content"] = content
            article.pop("source", None)

    OUTPUT_FILE.write_text(
        json.dumps(
            {"source": MAP_URL, "helpCentreSource": HELP_CENTRE_URL, "categories": categories},
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(categories)} categories and {len(articles)} articles to {OUTPUT_FILE}")
    print(f"Downloaded {len(asset_map)} documentation assets to {ASSET_DIR}")


if __name__ == "__main__":
    main()
