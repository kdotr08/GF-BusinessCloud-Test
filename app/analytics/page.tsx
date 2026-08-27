import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Analytics",
};

const CORE_FEATURES = [
  "Complete user activity tracking, with no sampling",
  "GDPR-compliant by design — no cookie consent banner required",
  "UK-based, server-side data storage",
  "A dashboard with your key metrics at a glance",
  "Separate analytics for QA and Production",
  "Journey completion metrics, by hour or by day",
  "Page performance tracking — hits and failures, by time period",
  "Bounce, drop-off and completion rate analytics",
  "Detailed drop-off analysis, page by page",
  "Time-on-page breakdowns",
  "Validation failure tracking, by field",
  "Device and browser breakdowns",
];

const REPORTING_FEATURES = [
  {
    title: "Reviewer reports",
    body: "Search and download submitted data, filter and view individual submissions, and export to Excel, CSV or PDF.",
  },
  {
    title: "API and SharePoint export",
    body: "Pull data out through the API or push it straight into SharePoint, so your reporting isn't locked to one dashboard.",
  },
  {
    title: "Charting and tagging",
    body: "Pick a time range, compare completion against drop-off, and track choices on individual fields — radio, checkbox, dropdown and button.",
  },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Analytics"
        title="Real-time insight into how your service is actually used."
        subtitle="No configuration required. Access Govform.com's performance analytics the moment your service goes live."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Dashboard</div>
            <h2 className="section-heading">All the useful data, no sampling and no cookies.</h2>
          </div>
          <div className={styles.pillRow}>
            {CORE_FEATURES.map((f) => (
              <span key={f} className={styles.pill}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Reporting</div>
            <h2 className="section-heading">Get the data out, however your team works.</h2>
          </div>
          <div className={styles.featureGrid}>
            {REPORTING_FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{f.title}</div>
                <p className="text-[13.5px] text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="See exactly how people move through your service, from first page to submission — no setup, no sampling, no cookies."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
