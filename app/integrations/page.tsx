import type { Metadata } from "next";
import { AnimatedFaqItem } from "@/components/marketing/AnimatedFaqItem";
import { DIRECTORY_INTEGRATIONS } from "@/components/marketing/integration-directory-data";
import { IntegrationDirectory, IntegrationLogo } from "@/components/marketing/IntegrationDirectory";
import { PageHero } from "@/components/marketing/PageHero";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import styles from "@/components/marketing/content-page.module.css";
import directoryStyles from "@/components/marketing/integration-directory.module.css";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Govform.com to Microsoft 365, cloud storage, CRMs, payment providers and internal systems with built-in connectors, APIs, webhooks and data feeds.",
  alternates: {
    canonical: "https://govform.com/integrations",
  },
};

const FEATURED_NAMES = [
  "Microsoft SharePoint",
  "Microsoft Power Automate",
  "Salesforce",
  "ServiceNow",
  "AWS S3",
  "Google Cloud Storage",
  "Stripe",
  "DocuSign",
];

const FEATURED_INTEGRATIONS = FEATURED_NAMES.map((name) =>
  DIRECTORY_INTEGRATIONS.find((item) => item.name === name),
).filter((item): item is NonNullable<typeof item> => Boolean(item));

const WAYS_TO_CONNECT = [
  {
    title: "Built-in connectors",
    body: "Configure supported platforms quickly using guided settings, connection testing and environment-specific credentials.",
  },
  {
    title: "APIs and webhooks",
    body: "Send, retrieve and validate service data using REST APIs, webhooks, configurable headers and secure authentication methods.",
  },
  {
    title: "Data feeds and exports",
    body: "Use CSV, Excel and JSON data feeds to power lookups, validate answers and transfer structured data into reporting or downstream systems.",
  },
];

const SHAREPOINT_FEATURES = [
  {
    title: "Secure connections",
    body: "Configure SharePoint sites using protected credentials and built-in connection tests. Restrict Govform access to specific sites where required.",
  },
  {
    title: "Structured submission data",
    body: "Automatically create or update SharePoint List items using configurable field mapping and data transformations.",
  },
  {
    title: "Files and generated documents",
    body: "Transfer uploaded files and generated PDFs using consistent folder structures and naming rules.",
  },
  {
    title: "Environment controls",
    body: "Maintain separate connections, settings and credentials for development, QA and production environments.",
  },
];

const CUSTOM_INTEGRATION_CAPABILITIES = [
  "REST API support",
  "Webhooks",
  "API push and pull",
  "Custom headers and request bodies",
  "Mutual TLS",
  "Environment-specific endpoints and credentials",
  "Connection testing",
  "Mock API responses",
  "CSV, Excel and JSON feeds",
];

const FAQS = [
  {
    question: "What systems can Govform integrate with?",
    answer:
      "Govform can connect with Microsoft platforms, CRMs, case-management systems, cloud storage, payment providers, identity services, analytics tools and internal systems. Connections may use built-in connectors, APIs, webhooks, open standards or structured data feeds.",
  },
  {
    question: "Can Govform connect to a system that is not listed?",
    answer:
      "Yes. Govform can connect to many internal, regional and specialist systems through REST APIs, webhooks, mutual TLS and structured data feeds. The available approach depends on the system's interfaces, authentication methods and security requirements.",
  },
  {
    question: "Does Govform integrate with Microsoft SharePoint?",
    answer:
      "Yes. Govform can create and update SharePoint List items, transfer uploaded files and generated PDFs, and use SharePoint-hosted reference data within digital service workflows.",
  },
  {
    question: "Can Govform use different integration settings for testing and production?",
    answer:
      "Yes. Integration endpoints, credentials and destination systems can be configured separately for different service environments, including QA and production.",
  },
  {
    question: "Can Govform send data to a CRM or case-management platform?",
    answer:
      "Yes. Govform can send structured service data to platforms such as Salesforce, Dynamics 365, ServiceNow and Jira through supported connectors or secure API-based workflows.",
  },
  {
    question: "Does Govform support APIs and webhooks?",
    answer:
      "Yes. Govform supports REST API connections, webhooks, configurable headers and request bodies, API push and pull, and mutual TLS for compatible high-assurance systems.",
  },
  {
    question: "Can integrations be configured without writing code?",
    answer:
      "Some supported connectors can be configured through Govform without custom development. More complex or organisation-specific systems may require API configuration or implementation support.",
  },
  {
    question: "How does Govform protect data used by integrations?",
    answer:
      "Govform supports environment-specific credentials, controlled access, secure authentication methods, connection testing and file validation. The exact controls depend on the connected system and the organisation's configuration. Visit the Security and Compliance page for more information.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Connect to anything."
        subtitle="Seamlessly integrate Govform.com into the rest of your software ecosystem. Start with a built-in connector or create a tailored integration using secure APIs, webhooks and data feeds."
        supportingText="Connect your digital services without replacing the systems and processes your organisation already relies on."
        primaryCta={{ label: "Explore integrations", href: "#integration-directory" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
        reveal
      />

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Flexible integration
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
                Choose the right way to connect
              </h2>
              <p data-reveal-item style={{ transitionDelay: "320ms" }}>
                Govform supports different integration approaches, from purpose-built connectors to
                configurable APIs. Choose an approach based on your systems, security requirements and
                service complexity.
              </p>
            </div>
            <div
              data-reveal-item
              style={{ transitionDelay: "440ms" }}
              className={directoryStyles.featuredStrip}
            >
              {FEATURED_INTEGRATIONS.map((item) => (
                <div key={item.name} className={directoryStyles.featuredItem}>
                  <IntegrationLogo item={item} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            <div data-reveal-item style={{ transitionDelay: "580ms" }} className={styles.featureGrid}>
              {WAYS_TO_CONNECT.map((item) => (
                <div key={item.title} className={styles.featureCard}>
                  <div className={styles.featureCardTitle}>{item.title}</div>
                  <p className="text-[13.5px] text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <div data-reveal-item style={{ transitionDelay: "600ms" }} className={styles.contextLinks}>
              <a href="/workflow">Learn how connected services support more complex processes on the Workflow page.</a>
              <a href="/security">
                Explore Govform's approach to integration security, credentials and environment controls on the
                Security and Compliance page.
              </a>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Featured integration
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
                Purpose-built Microsoft SharePoint connectivity
              </h2>
              <p data-reveal-item style={{ transitionDelay: "320ms" }}>
                Connect Govform services to your organisation's SharePoint environment without replacing the
                systems and processes your teams already use. Store structured submission data, uploaded
                documents and generated PDFs in the appropriate SharePoint sites and lists.
              </p>
            </div>
            <div
              data-reveal-item
              style={{ transitionDelay: "460ms" }}
              className={`${styles.featureGrid} ${styles.analyticsFeatureGrid}`}
            >
              {SHAREPOINT_FEATURES.map((item) => (
                <div key={item.title} className={styles.featureCard}>
                  <div className={styles.featureCardTitle}>{item.title}</div>
                  <p className="text-[13.5px] text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <div data-reveal-item style={{ transitionDelay: "600ms" }} className="mt-7">
              <a href="/contact" className="btn-pill-secondary btn-hover-shrink">
                Talk to us about SharePoint
              </a>
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.featuresFaqSection}`}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Frequently asked questions
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
                Govform integration FAQs
              </h2>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -5%">
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

      <section id="integration-directory" className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup rootMargin="0px 0px -5%">
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Integration directory
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "150ms" }} className="section-heading">
                Explore Govform integrations
              </h2>
              <p data-reveal-item style={{ transitionDelay: "300ms" }}>
                Search Govform's supported platforms, connection methods and data capabilities. If your
                system is not listed, Govform may still be able to connect to it through an API, webhook or
                structured data feed.
              </p>
            </div>
            <div data-reveal-item style={{ transitionDelay: "460ms" }}>
              <IntegrationDirectory />
            </div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Custom integrations
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
                Need to connect something else?
              </h2>
              <p data-reveal-item style={{ transitionDelay: "320ms" }}>
                Govform can connect with internal, regional and specialist systems through secure REST APIs,
                webhooks, mutual TLS and structured data feeds. Our team can help assess your requirements and
                design an integration approach that fits your architecture, security controls and service
                needs.
              </p>
            </div>
            <div data-reveal-item style={{ transitionDelay: "460ms" }} className={styles.pillRow}>
              {CUSTOM_INTEGRATION_CAPABILITIES.map((capability) => (
                <span key={capability} className={styles.pill}>
                  {capability}
                </span>
              ))}
            </div>
            <div data-reveal-item style={{ transitionDelay: "600ms" }} className="mt-7">
              <a href="/contact" className={`btn-pill-secondary btn-hover-shrink ${styles.solidBlueCta}`}>
                Discuss your integration
              </a>
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
