import fs from "node:fs";
import path from "node:path";

import styles from "./logo-marquee.module.css";

const LOGO_DIRECTORY = path.join(process.cwd(), "public", "logos", "organisations", "white");
const LOGO_URL = "/logos/organisations/white";
const SUPPORTED_LOGO = /\.(?:svg|png|jpe?g|webp|avif)$/i;
const LOGO_ORDER = [
  "w-bduk.png",
  "w-mhra-01.png",
  "w-defra-01.png",
  "w-ofsted.png",
  "w-department_for_transport-01.svg",
  "white-ordnance_survey_logo.png",
  "w-dluhc-01.png",
  "white-ncsc-logo.png",
  "w-dvla-logo.png",
  "w-ref-2029-01.svg",
  "w-dvsa-01.svg",
  "w-research-england-01.svg",
  "w-hmrc-logo.png",
  "w-scottish-government-01.svg",
  "w-terrencehigginstrust.png",
];

const LOGO_LABELS: Record<string, string> = {
  "w-bduk.png": "Building Digital UK",
  "w-mhra-01.png": "MHRA",
  "w-defra-01.png": "Department for Environment, Food and Rural Affairs",
  "w-ofsted.png": "Ofsted",
  "w-department_for_transport-01.svg": "Department for Transport",
  "white-ordnance_survey_logo.png": "Ordnance Survey",
  "w-dluhc-01.png": "Department for Levelling Up, Housing and Communities",
  "white-ncsc-logo.png": "National Cyber Security Centre",
  "w-dvla-logo.png": "Driver and Vehicle Licensing Agency",
  "w-ref-2029-01.svg": "REF 2029",
  "w-dvsa-01.svg": "Driver and Vehicle Standards Agency",
  "w-research-england-01.svg": "Research England",
  "w-hmrc-logo.png": "HM Revenue and Customs",
  "w-scottish-government-01.svg": "Scottish Government",
  "w-terrencehigginstrust.png": "Terrence Higgins Trust",
};

type Logo = {
  alt: string;
  src: string;
  size: "default" | "smallText" | "badgeText" | "compact" | "ref" | "extraCompact";
};

function logoSize(filename: string): Logo["size"] {
  const name = filename.toLowerCase();

  if (/terrence-?higgins/.test(name)) return "badgeText";

  if (/bduk|building-digital|defra|department_for_transport|dluhc|dvla|dvsa|hmrc/.test(name)) {
    return "smallText";
  }

  if (/mhra/.test(name)) return "extraCompact";
  if (/ref-2029/.test(name)) return "ref";
  if (/ncsc|ofsted|ordnance|scottish-government/.test(name)) return "compact";

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
    .filter((filename) => LOGO_ORDER.includes(filename.toLowerCase()))
    .sort((a, b) => {
      const aIndex = LOGO_ORDER.indexOf(a.toLowerCase());
      const bIndex = LOGO_ORDER.indexOf(b.toLowerCase());

      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    })
    .map((filename) => {
      const version = Math.trunc(fs.statSync(path.join(LOGO_DIRECTORY, filename)).mtimeMs);

      return {
        alt: LOGO_LABELS[filename.toLowerCase()] ?? readableName(filename),
        src: `${LOGO_URL}/${encodeURIComponent(filename)}?v=${version}`,
        size: logoSize(filename),
      };
    });
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
                  <img
                    className={`${styles.logoImage} ${styles[logo.size]}`}
                    src={logo.src}
                    alt=""
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
