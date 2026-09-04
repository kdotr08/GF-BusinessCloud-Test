import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { SecurityGrid } from "@/components/marketing/SecurityGrid";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Security & Compliance for Digital Services",
  description:
    "Encryption in transit and at rest, role-based access control, isolated environments, full audit trails and UK-only hosting, built to meet UK public-sector security standards.",
  keywords: [
    "digital service security",
    "GDPR compliant forms",
    "UK data residency",
    "government security standards",
    "encrypted form data",
  ],
  alternates: { canonical: "https://govform.com/security" },
};

const AREAS: { title: string; body: string; bullets: string[] }[] = [
  {
    title: "Encryption",
    body: "Data is encrypted in transit and at rest, everywhere it moves.",
    bullets: [
      "TLS 1.2+ for data in transit",
      "AES-256 encryption at rest",
      "Mutual TLS for encrypted API communications",
      "SSL certificates for custom domains",
    ],
  },
  {
    title: "Access control",
    body: "Five builder access levels, and seven service-level authentication methods.",
    bullets: [
      "Admin, Live Data, Designer + Analytics, Read-only and QA Tester roles",
      "MFA enforcement at library level",
      "Anonymous access, magic links, OIDC/OAuth, AWS Cognito with MFA",
      "Session timeouts and group-based sharing",
    ],
  },
  {
    title: "Environment isolation",
    body: "Prototype, QA and Production are fully separate, with controlled promotion between them.",
    bullets: [
      "Separate data stores and configuration per environment",
      "Controlled, auditable promotion between environments",
      "Private cloud options available",
    ],
  },
  {
    title: "Audit & monitoring",
    body: "Every action leaves a trail, and every service is watched in real time.",
    bullets: [
      "Full event-level audit logs",
      "Review workflow audit trails",
      "Real-time performance dashboards",
      "Complete revision history",
    ],
  },
  {
    title: "Data residency",
    body: "UK-only hosting, UK-only backups, no exceptions.",
    bullets: [
      "UK-only hosting on AWS UK regions",
      "UK-resident backups: 1-hour RPO, 24-hour RTO on Enhanced support",
      "GDPR compliance support and data portability",
      "Private cloud arrangements available",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & compliance"
        title="Built for the security bar UK government and public sector set."
        subtitle="Govform.com is designed from the ground up to meet the security, compliance and data handling requirements of regulated organisations."
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <SecurityGrid />

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">In depth</div>
            <h2 className="section-heading">Five areas, one standard, applied everywhere.</h2>
          </div>
          <div className={styles.featureGrid}>
            {AREAS.map((a) => (
              <div key={a.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{a.title}</div>
                <p className="text-[13.5px] text-muted">{a.body}</p>
                <ul className={styles.featureCardList}>
                  {a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Need a security questionnaire answered before you can move?"
        body="Talk to us for penetration test reports, evidence packs and answers to your procurement or assurance questions."
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
