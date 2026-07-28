import styles from "./home.module.css";

const FEATURES: [string, string, string][] = [
  [
    "server-side-forms",
    "Server-side by design",
    "Every page is validated and processed on the server, not just in a browser a user, or an attacker, controls.",
  ],
  [
    "automation-webhooks",
    "Automation & webhooks",
    "Run integrations mid-journey — outbound API calls, inbound actions, Notify/email steps and mapping, priced per action, not per seat.",
  ],
  [
    "accessible-by-default",
    "Accessible by default",
    "Built on WCAG-conformant components from the first screen, not retrofitted before an audit.",
  ],
  [
    "malware-scanning",
    "Secure file handling & evidence",
    "Uploads are scanned, stripped of hidden metadata and access-controlled automatically. Produce a verifiable, sealed submission PDF carrying Govform.com's verified organisation seal, on request.",
  ],
  [
    "darcy-ai",
    "Darcy, built in",
    "An AI assistant for drafting content, answering questions and building forms — included on every plan, with clear limits.",
  ],
  [
    "custom-domains",
    "Custom domains",
    "Point your own domain at a live service, with standard, documented configuration — no professional-services ticket needed.",
  ],
];

export function FeatureGrid() {
  return (
    <section id="product" className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[62ch]">
          <div className="eyebrow border-plum/25 bg-plum/10 text-plum">How it&apos;s different</div>
          <h2 className="text-[30px]">Most form tools weren&apos;t built for organisations like yours.</h2>
          <p className="muted">
            General-purpose form builders are built for marketing teams collecting leads.
            Govform.com is server-side infrastructure for services that have to hold up to
            scrutiny.
          </p>
        </div>

        <div className={styles.features}>
          {FEATURES.map(([slug, title, body], i) => (
            <div key={slug} id={slug} className={styles.featureItem}>
              <span className={styles.featureNum}>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.featureTitle}>{title}</div>
              <div className={styles.featureDesc}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
