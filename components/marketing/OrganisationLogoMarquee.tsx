import fs from "node:fs";
import path from "node:path";

import styles from "./logo-marquee.module.css";

const LOGO_DIRECTORY = path.join(process.cwd(), "public", "logos", "organisations");
const LOGO_URL = "/logos/organisations";
const SUPPORTED_LOGO = /\.(?:svg|png|jpe?g|webp|avif)$/i;
const LOGO_ORDER = [
  "building-digital-uk-logo.jpg",
  "mhra.webp",
  "defra-01.png",
  "ofsted.png",
  "department_for_transport.svg",
  "ordnance_survey_logo.png",
  "dluhc-01.png",
  "ncsc-logo-black.webp",
  "dvla-logo.png",
  "ref-2029.svg",
  "dvsa.svg",
  "research-england.svg",
  "hmrc-logo.png",
  "scottish-government.svg",
  "terrence-higgins-trust-01.png",
];

type Logo = {
  alt: string;
  src: string;
  size: "default" | "smallText" | "badgeText" | "compact" | "extraCompact";
};

function logoSize(filename: string): Logo["size"] {
  const name = filename.toLowerCase();

  if (/terrence-higgins/.test(name)) return "badgeText";

  if (/building-digital|defra|department_for_transport|dluhc|dvla|dvsa|hmrc/.test(name)) {
    return "smallText";
  }

  if (/mhra/.test(name)) return "extraCompact";
  if (/ncsc|ofsted|ordnance|ref-2029|scottish-government/.test(name)) return "compact";

  return "default";
}

function readableName(filename: string) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]01$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\blogo\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .replace(/\s+(?:Black|White|Colou?r)$/i, "")
    .replace(/\b(?:dluhc|dvla|dvsa|hmrc|mhra|ncsc|ref|uk)\b/gi, (acronym) => acronym.toUpperCase());
}

function getLogos(): Logo[] {
  if (!fs.existsSync(LOGO_DIRECTORY)) return [];

  return fs
    .readdirSync(LOGO_DIRECTORY)
    .filter((filename) => SUPPORTED_LOGO.test(filename))
    .sort((a, b) => {
      const aIndex = LOGO_ORDER.indexOf(a.toLowerCase());
      const bIndex = LOGO_ORDER.indexOf(b.toLowerCase());

      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    })
    .map((filename) => ({
      alt: readableName(filename),
      src: `${LOGO_URL}/${encodeURIComponent(filename)}`,
      size: logoSize(filename),
    }));
}

export function OrganisationLogoMarquee() {
  const logos = getLogos();

  if (logos.length === 0) return null;

  // Keep a short placeholder or initial logo set wide enough to fill large
  // screens. The second identical set makes the animation loop seamlessly.
  const repetitions = Math.max(1, Math.ceil(8 / logos.length));
  const marqueeLogos = Array.from({ length: repetitions }, () => logos).flat();

  return (
    <section className={styles.band} aria-labelledby="organisation-logos-title">
      <h2 id="organisation-logos-title" className="sr-only">
        Organisations working with Govform
      </h2>

      <ul className="sr-only">
        {logos.map((logo) => (
          <li key={logo.src}>{logo.alt}</li>
        ))}
      </ul>

      <div className={styles.viewport} aria-hidden="true">
        <div className={styles.track}>
          {[0, 1].map((setIndex) => (
            <div className={styles.logoSet} key={setIndex}>
              {marqueeLogos.map((logo, logoIndex) => (
                <div
                  className={styles.logoItem}
                  key={`${setIndex}-${logo.src}-${logoIndex}`}
                >
                  <img className={styles[logo.size]} src={logo.src} alt="" decoding="async" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
