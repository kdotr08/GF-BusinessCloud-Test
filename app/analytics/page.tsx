import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Digital Service Analytics Without Cookies | Govform.com",
  description:
    "Understand completions, drop-offs, validation failures and user behaviour with real-time, unsampled digital service analytics—without analytics cookies.",
};

const SERVICE_PERFORMANCE = [
  {
    title: "Measure service demand",
    body: "Track page views, service starts and completed journeys by hour or day to understand when and how your service is being used.",
  },
  {
    title: "Understand completion and drop-off",
    body: "Compare completion, bounce and drop-off rates, then identify the pages where users are most likely to leave.",
  },
  {
    title: "Find validation problems",
    body: "See which fields generate the most validation failures, helping your team find unclear questions and remove avoidable barriers.",
  },
  {
    title: "Compare devices and browsers",
    body: "Understand how service performance varies across devices and browsers so you can investigate issues affecting particular groups of users.",
  },
  {
    title: "Analyse time on page",
    body: "See how long users spend on individual pages and identify steps that may be causing confusion or unnecessary effort.",
  },
  {
    title: "Separate QA and Production",
    body: "Use dedicated analytics for QA and Production environments, so testing activity remains separate from live service data.",
  },
];

const PRIVACY_BENEFITS = [
  "No analytics cookies",
  "No sampled results",
  "UK-based, server-side storage",
  "Privacy-conscious by design",
];

const REPORTING_FEATURES = [
  {
    title: "Review and search submissions",
    body: "Search, filter and review individual submissions using Govform.com Reviewer.",
  },
  {
    title: "Export for further analysis",
    body: "Download submission data in Excel, CSV or PDF format for reporting, analysis and operational processing.",
  },
  {
    title: "Connect through the API",
    body: "Retrieve submission data through the Govform.com API and use it within your organisation’s existing systems and workflows.",
  },
  {
    title: "Send data to SharePoint",
    body: "Securely send submission data to SharePoint, giving authorised teams access through the tools they already use.",
  },
];

const ANALYTICS_QUESTIONS = [
  "Which options are users choosing most often?",
  "Where are users leaving the service?",
  "Which questions cause the most validation problems?",
  "Are service improvements increasing completion rates?",
  "Does performance differ across devices or browsers?",
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Analytics"
        title="Understand how people use your digital service"
        subtitle="See where users succeed, where they struggle and where they leave. Govform.com gives your team real-time, unsampled service analytics without relying on analytics cookies."
        note="No additional configuration required."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Service performance</div>
            <h2 className="section-heading">Turn service data into practical improvements</h2>
            <p>
              Monitor performance across the entire user journey. Understand demand, identify
              usability problems and make evidence-based improvements from one clear dashboard.
            </p>
          </div>
          <div className={`${styles.featureGrid} ${styles.analyticsFeatureGrid}`}>
            {SERVICE_PERFORMANCE.map((feature) => (
              <article key={feature.title} className={`${styles.featureCard} ${styles.analyticsCard}`}>
                <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.analyticsTintSection}`}>
        <div className={`wrap ${styles.analyticsPrivacyGrid}`}>
          <div className={styles.analyticsBodyCopy}>
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Privacy-conscious analytics</div>
            <h2 className="section-heading">Useful insight without analytics cookies</h2>
            <p>Collect unsampled service-usage data without placing analytics cookies on users’ devices.</p>
            <p>
              Analytics data is recorded server-side and stored in the UK, helping your organisation
              reduce its reliance on cookie consent banners while supporting its privacy and
              data-protection responsibilities.
            </p>
          </div>
          <ul className={styles.analyticsChecklist}>
            {PRIVACY_BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Reporting</div>
            <h2 className="section-heading">Use your data wherever your team works</h2>
            <p>
              Review submissions inside Govform.com or securely move data into the systems and
              reporting tools your organisation already uses.
            </p>
          </div>
          <div className={`${styles.featureGrid} ${styles.analyticsReportingGrid}`}>
            {REPORTING_FEATURES.map((feature) => (
              <article key={feature.title} className={`${styles.featureCard} ${styles.analyticsCard}`}>
                <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.analyticsTintSection}`}>
        <div className={`wrap ${styles.analyticsChartGrid}`}>
          <div className={styles.analyticsBodyCopy}>
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Charting and tagging</div>
            <h2 className="section-heading">Go beyond headline metrics</h2>
            <p>
              Select a time range, explore changes in service performance and compare completed
              journeys with drop-offs.
            </p>
            <p>
              Tag radio-button, checkbox, dropdown and button fields to understand the choices users
              make throughout their journey—not only whether they completed it.
            </p>
            <p>This helps your team answer questions such as:</p>
          </div>
          <ul className={styles.analyticsQuestionList}>
            {ANALYTICS_QUESTIONS.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
