import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Features",
};

const FEATURES: { title: string; body: string; bullets: string[] }[] = [
  {
    title: "Darcy AI assistant",
    body: "Generate a complete multi-page service from a plain-English prompt, then iterate on it by conversation.",
    bullets: [
      "Prompt-to-service in seconds, with iterative refinement",
      "Inspects and updates existing services, not just new ones",
      "Human approval and role-based permissions on every change",
    ],
  },
  {
    title: "UX and content design",
    body: "GDS-compliant, accessible patterns and components with the collaboration tools a design team actually needs.",
    bullets: [
      "Comments, version history and shared previews",
      "Access management and shared design libraries",
      "Instant deploy to QA or Production",
    ],
  },
  {
    title: "Smart logic and workflow engine",
    body: "An intuitive rules editor drives page flow, validation and dynamic content — no code required.",
    bullets: [
      "Post-submission actions: API calls, notifications, approvals",
      "Dynamic templating and logic tags",
      "Data pre-population and transformation across services",
    ],
  },
  {
    title: "Rich component library",
    body: "Drop-in components for the complex parts of a service, all WCAG 2.2 compliant out of the box.",
    bullets: [
      "File uploads, postcode lookup, repeating data capture",
      "Shared component libraries across services",
      "Usable immediately on default settings, no configuration required",
    ],
  },
  {
    title: "Real-time analytics and auditability",
    body: "See 100% of user activity on a service, server-side, without cookies or a consent banner.",
    bullets: [
      "UK-based data storage, fully GDPR-compliant",
      "Separate QA and Production dashboards",
      "Page performance, device and browser breakdowns",
    ],
  },
  {
    title: "Secure document processing",
    body: "Every upload passes through Content Disarm & Reconstruction and antivirus scanning in isolated infrastructure.",
    bullets: [
      "URL inspection and link redaction",
      "Safe PDF reconstruction into image-only documents",
      "User review before submission",
    ],
  },
  {
    title: "Document generation and signing",
    body: "Map form answers straight onto a PDF template — text, dates, signatures and repeating data, filled automatically.",
    bullets: [
      "Typed or drawn signature capture with audit information",
      "Digital certificate signature application",
      "Consistent, ready-to-use PDF output",
    ],
  },
  {
    title: "Addresses, maps and geographic lookups",
    body: "Ordnance Survey maps with an OpenStreetMap fallback, plus UK and international address lookup.",
    bullets: [
      "Mobile-friendly map components for location selection",
      "UK postcode address lookup",
      "Customisable international address fields",
    ],
  },
  {
    title: "Custom branding and style control",
    body: "The award-winning UK Design System frontend, fully rebrandable to match your organisation.",
    bullets: [
      "Header, footer, colour and font adjustments",
      "CSS/SASS stylesheet override for full control",
      "Free brand customisation service from our team",
    ],
  },
  {
    title: "Authentication and access control",
    body: "Seven authentication methods, from fully anonymous public access to enterprise SSO.",
    bullets: [
      "GOV.UK Notify magic links, OIDC/OAuth 2.0, AWS Cognito with MFA",
      "Save-and-return with configurable draft modes",
      "Group-based sharing and read-only reviewer access",
    ],
  },
];

const STATS: { num: string; label: string }[] = [
  { num: "99.9%", label: "Uptime SLA" },
  { num: "WCAG 2.2 AA", label: "Accessibility, out of the box" },
  { num: "ISO 27001", label: "Certified information security" },
  { num: "0", label: "Analytics cookies required" },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital service builder"
        title="Everything you need to design, build and run a service."
        subtitle="Powerful service-building tools on the UK Design System, with accessible UX, easy collaboration and unrivalled customisation."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Feature set</div>
            <h2 className="section-heading">Ten capabilities, one platform.</h2>
          </div>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{f.title}</div>
                <p className="text-[13.5px] text-muted">{f.body}</p>
                <ul className={styles.featureCardList}>
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className={styles.statRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="Take the first step towards streamlined digital services with a personalised consultation from our expert team."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
