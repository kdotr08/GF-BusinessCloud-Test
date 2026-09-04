import type { Metadata } from "next";
import { AnimatedFaqItem } from "@/components/marketing/AnimatedFaqItem";
import { PageHero } from "@/components/marketing/PageHero";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Digital Service Analytics Without Cookies",
  description:
    "Understand completions, drop-offs, validation failures and user behaviour with real-time, unsampled digital service analytics without analytics cookies.",
  keywords: [
    "digital service analytics",
    "form analytics",
    "user journey analytics",
    "digital service performance",
    "form completion rates",
    "form drop-off analysis",
    "cookie-free analytics",
    "public-sector service analytics",
  ],
  alternates: { canonical: "https://govform.com/analytics" },
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
    body: "See which fields generate the most validation failures, helping your team identify unclear questions and remove avoidable barriers.",
  },
  {
    title: "Analyse time on page",
    body: "Understand how long users spend on individual pages and identify steps that may be causing confusion or unnecessary effort.",
  },
  {
    title: "Compare devices and browsers",
    body: "See how service performance varies across devices and browsers so your team can investigate issues affecting particular groups of users.",
  },
  {
    title: "Separate QA and Production",
    body: "Use dedicated analytics for QA and Production environments, keeping test activity separate from live service data.",
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
  "Where are users leaving the service?",
  "Which questions cause the most validation problems?",
  "Which options are users selecting most often?",
  "Are service improvements increasing completion rates?",
  "Does performance differ across devices or browsers?",
];

const FAQS = [
  {
    question: "What can Govform.com analytics measure?",
    answer:
      "Govform.com can measure service starts, completed journeys, page views, failures, completion rates, drop-offs, time on page, validation failures, devices and browsers.",
  },
  {
    question: "Can Govform.com show where users leave a service?",
    answer:
      "Yes. Page-level drop-off reporting shows where users abandon a journey, helping your team identify possible usability or content problems.",
  },
  {
    question: "Does Govform.com use analytics cookies?",
    answer:
      "No. Govform.com collects service-usage analytics server-side without relying on analytics cookies.",
  },
  {
    question: "Does Govform.com sample analytics results?",
    answer:
      "No. Govform.com provides unsampled service-usage data rather than estimating performance from a sample of users.",
  },
  {
    question: "Can Govform.com track validation failures?",
    answer:
      "Yes. Govform.com shows which fields generate validation failures, helping service teams find unclear questions or input requirements.",
  },
  {
    question: "Can QA and Production analytics be kept separate?",
    answer:
      "Yes. Govform.com provides separate analytics for QA and Production so testing activity does not distort live service reporting.",
  },
  {
    question: "Can authorised users export submission data?",
    answer:
      "Yes. Authorised users can search, filter and export submission data in Excel, CSV or PDF format.",
  },
  {
    question: "Can analytics data connect to other systems?",
    answer:
      "Yes. Data can be retrieved through the Govform.com API, sent to SharePoint or connected to supported reporting and workflow tools.",
  },
  {
    question: "Where is Govform.com analytics data stored?",
    answer:
      "Govform.com analytics data is stored server-side in the UK. Specific hosting and data-residency arrangements may depend on the selected plan and deployment model.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Analytics"
        title="Understand how people use your digital service"
        subtitle="See where users succeed, where they struggle and where they leave. Govform.com gives your team real-time, unsampled service analytics without relying on analytics cookies."
        supportingText="Performance analytics are available as soon as your service goes live, with no additional analytics configuration required."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
        reveal
        revealMotion="rise"
      />

      <section className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup motion="rise">
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Service performance
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "150ms" }} className="section-heading">
                Turn service data into practical improvements
              </h2>
              <p data-reveal-item style={{ transitionDelay: "300ms" }}>
                Monitor performance across the user journey. Understand demand, identify usability
                problems and use real service data to make informed improvements.
              </p>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -5%" motion="rise">
            <div className={`${styles.featureGrid} ${styles.analyticsFeatureGrid}`}>
              {SERVICE_PERFORMANCE.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`${styles.featureCard} ${styles.analyticsCard}`}
                  data-reveal-item
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={`${styles.section} ${styles.analyticsTintSection}`}>
        <div className={`wrap ${styles.analyticsPrivacyGrid}`}>
          <ScrollRevealGroup motion="rise">
            <div className={styles.analyticsBodyCopy}>
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Privacy-conscious analytics
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "140ms" }} className="section-heading">
                Useful insight without analytics cookies
              </h2>
              <p data-reveal-item style={{ transitionDelay: "280ms" }}>
                Govform.com collects service-usage data server-side without placing analytics cookies
                on users’ devices.
              </p>
              <p data-reveal-item style={{ transitionDelay: "420ms" }}>
                This provides unsampled performance data while helping your organisation reduce its
                reliance on cookie consent and support its privacy and data-protection responsibilities.
              </p>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -12%" motion="rise">
            <ul className={styles.analyticsChecklist}>
              {PRIVACY_BENEFITS.map((benefit, index) => (
                <li key={benefit} data-reveal-item style={{ transitionDelay: `${index * 110}ms` }}>
                  {benefit}
                </li>
              ))}
            </ul>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup motion="rise">
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Reporting</div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "150ms" }} className="section-heading">
                Use your data wherever your team works
              </h2>
              <p data-reveal-item style={{ transitionDelay: "300ms" }}>
                Review submissions inside Govform.com or securely move data into the systems and
                reporting tools your organisation already uses.
              </p>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -5%" motion="rise">
            <div className={`${styles.featureGrid} ${styles.analyticsReportingGrid}`}>
              {REPORTING_FEATURES.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`${styles.featureCard} ${styles.analyticsCard}`}
                  data-reveal-item
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={`${styles.section} ${styles.analyticsTintSection}`}>
        <ScrollRevealGroup className={`wrap ${styles.analyticsChartGrid}`} motion="rise">
          <div className={styles.analyticsBodyCopy}>
            <div data-reveal-item style={{ transitionDelay: "0ms" }}>
              <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                Charting and tagging
              </div>
            </div>
            <h2 data-reveal-item style={{ transitionDelay: "140ms" }} className="section-heading">
              Go beyond headline metrics
            </h2>
            <p data-reveal-item style={{ transitionDelay: "280ms" }}>
              Select a time range, explore changes in service performance and compare completed
              journeys with drop-offs.
            </p>
            <p data-reveal-item style={{ transitionDelay: "420ms" }}>
              Tag radio-button, checkbox, dropdown and button fields to understand the choices users
              make throughout their journey, not only whether they completed it.
            </p>
            <p data-reveal-item style={{ transitionDelay: "560ms" }}>
              This helps your team answer questions such as:
            </p>
          </div>
          <ul className={styles.analyticsQuestionList}>
            {ANALYTICS_QUESTIONS.map((question, index) => (
              <li key={question} data-reveal-item style={{ transitionDelay: `${220 + index * 90}ms` }}>
                {question}
              </li>
            ))}
          </ul>
        </ScrollRevealGroup>
      </section>

      <section id="faq" className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup motion="rise">
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Frequently asked questions
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "150ms" }} className="section-heading">
                Digital service analytics questions
              </h2>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -5%" motion="rise">
            <div className={styles.featuresFaqList}>
              {FAQS.map((faq, index) => (
                <AnimatedFaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  delayMs={index * 70}
                />
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </>
  );
}
