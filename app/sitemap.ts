import type { MetadataRoute } from "next";
import { articleHref, categoryHref, documentationCategories } from "@/lib/documentation";

const BASE_URL = "https://govform.com";

// Real, indexable marketing pages only. Excluded on purpose:
// - /platform: orphaned (not in nav-links.ts), duplicates /features content,
//   disallowed in robots.ts.
// - Pages that still carry noindex metadata are omitted.
// - /pricing/[section]: each self-canonicalizes to an anchor on /pricing
//   (see generateMetadata there), so /pricing already represents them.
const ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/features", changeFrequency: "weekly", priority: 0.9 },
  { path: "/workflow", changeFrequency: "monthly", priority: 0.8 },
  { path: "/integrations", changeFrequency: "weekly", priority: 0.8 },
  { path: "/analytics", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security", changeFrequency: "monthly", priority: 0.8 },
  { path: "/templates", changeFrequency: "weekly", priority: 0.8 },
  { path: "/use-cases", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/institutional", changeFrequency: "monthly", priority: 0.85 },
  { path: "/business-estate", changeFrequency: "monthly", priority: 0.85 },
  { path: "/demo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const marketingRoutes = ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
  const categoryRoutes = documentationCategories.map((category) => ({
    url: `${BASE_URL}${categoryHref(category)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));
  const articleRoutes = documentationCategories.flatMap((category) =>
    category.articles.map((article) => ({
      url: `${BASE_URL}${articleHref(article)}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  );

  return [...marketingRoutes, ...categoryRoutes, ...articleRoutes];
}
