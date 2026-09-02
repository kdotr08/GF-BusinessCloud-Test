import type { Metadata } from "next";
import { AnimatedFaqItem } from "@/components/marketing/AnimatedFaqItem";
import { FeatureDirectory } from "@/components/marketing/FeatureDirectory";
import { FeatureShowcase, type ShowcaseFeature } from "@/components/marketing/FeatureShowcase";
import { PageHero } from "@/components/marketing/PageHero";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Digital Service Platform Features | Govform.com",
  description:
    "Explore Govform.com’s accessible form builder, workflow automation, AI assistant, integrations, analytics, security and digital service features.",
  alternates: {
    canonical: "https://govform.com/features",
  },
};

const FEATURES: ShowcaseFeature[] = [
  {
    title: "Darcy AI assistant",
    body: "Create a structured, multi-page digital service from a plain-English description, then refine its content and logic conversationally.",
    highlights: [
      "Prompt-to-service generation",
      "Conversational service updates",
      "Human review and version control",
    ],
    capabilities: [
      "Generate structured, multi-page services from plain-English instructions",
      "Add pages, questions and guidance through conversation",
      "Rewrite existing service content",
      "Introduce or update conditional logic",
      "Inspect and update existing services",
      "Review changes before they are applied",
      "Maintain version history and auditability",
      "Control access through roles and deployment permissions",
      "Connect through APIs and supported AI tools",
    ],
  },
  {
    title: "Accessible service design",
    body: "Create responsive digital services using established UK government patterns and accessible components.",
    highlights: [
      "GOV.UK Design System-based patterns",
      "Responsive, mobile-friendly journeys",
      "Components designed to support WCAG 2.2 AA",
    ],
    capabilities: [
      "Multi-page service journeys",
      "Task-list patterns",
      "Check-your-answers pages",
      "Confirmation pages",
      "Configurable validation and error messages",
      "Progress indicators and service back links",
      "Shareable stakeholder previews",
      "Comments and collaborative review",
      "Version history and rollback",
      "Reusable design libraries",
    ],
    note: "Govform.com components are designed to support WCAG 2.2 AA conformance. Final accessibility depends on the service’s content, configuration and implementation.",
  },
  {
    title: "Conditional logic and workflow automation",
    body: "Adapt each journey using conditional routing, dynamic content and configurable workflow actions.",
    highlights: [
      "Conditional page routing",
      "Data pre-population and calculations",
      "Multi-stage review workflows",
    ],
    capabilities: [
      "Show or skip pages based on user answers",
      "Display dynamic questions, content and guidance",
      "Configure field-level validation",
      "Create calculated fields",
      "Pre-populate and transform data",
      "Capture repeating groups and tabular data",
      "Configure save-and-return journeys",
      "Trigger emails, SMS messages and API calls",
      "Send data to connected systems",
      "Create sequential review and approval workflows",
      "Return submissions for correction",
      "Link related services and pass data between them",
      "Use Liquid templates for advanced requirements",
    ],
  },
  {
    title: "Reusable service components",
    body: "Add common and complex service functionality using configurable, reusable components.",
    highlights: [
      "File uploads and address lookup",
      "Payments and appointment booking",
      "Repeating and tabular data capture",
    ],
    capabilities: [
      "Multiple file uploads",
      "UK postcode address lookup",
      "International address capture",
      "Interactive maps and geolocation",
      "Booking and calendar scheduling",
      "Payments through GOV.UK Pay or supported providers",
      "Repeating groups",
      "Spreadsheet-style tables",
      "Searchable results tables",
      "Shopping-cart and multi-item journeys",
      "Declarations and attestations",
      "Typed or drawn signatures",
      "Check-your-answers pages",
      "Confirmation pages with reference numbers",
      "Auto-language translation",
    ],
  },
  {
    title: "Integrations and connected services",
    body: "Securely connect digital services to Microsoft products, APIs, notification services and cloud-storage systems.",
    highlights: [
      "SharePoint and Power Automate",
      "Configurable REST API connections",
      "GOV.UK Notify email and SMS",
    ],
    capabilities: [
      "Microsoft SharePoint lists",
      "SharePoint document libraries",
      "Microsoft Power Automate",
      "Microsoft Dataverse",
      "Power BI",
      "Power Apps",
      "GOV.UK Notify",
      "Configurable REST API requests and responses",
      "Submission retrieval through the Govform.com API",
      "Excel and CSV data feeds",
      "AWS SES email",
      "AWS S3",
      "Google Cloud Storage",
      "Azure Blob Storage",
      "Mock API responses for development and testing",
      "Mutual TLS for secure API connections",
      "Alerts when post-submission actions fail",
    ],
  },
  {
    title: "Digital service analytics",
    body: "Understand service demand, completion and user behaviour using unsampled, server-side analytics.",
    highlights: [
      "Completion and drop-off reporting",
      "Page and validation-failure analysis",
      "No analytics cookies",
    ],
    capabilities: [
      "Journey starts and completions by hour or day",
      "Completion, bounce and drop-off rates",
      "Page-level drop-off analysis",
      "Page hits and failures",
      "Time-on-page reporting",
      "Validation failures by field",
      "Device and browser breakdowns",
      "Separate QA and Production analytics",
      "Choice tracking through field tagging",
      "Searchable submission data",
      "Excel, CSV and PDF exports",
      "API and Power BI reporting options",
    ],
    note: "Govform.com analytics does not rely on analytics cookies. Service-usage data is collected server-side, helping organisations reduce their reliance on cookie consent while supporting their privacy and data-protection responsibilities.",
  },
  {
    title: "Secure document processing",
    body: "Inspect, scan and reconstruct uploaded documents before they enter operational workflows.",
    highlights: [
      "Content Disarm and Reconstruction",
      "Antivirus and URL inspection",
      "Isolated processing infrastructure",
    ],
    capabilities: [
      "Content Disarm and Reconstruction for supported documents",
      "Antivirus scanning",
      "Detection and rejection of malicious files",
      "Inspection of URLs in supported documents",
      "Redaction of unsafe or unverified links",
      "Image-only PDF reconstruction",
      "User review before submission",
      "Configurable file types and upload limits",
      "Isolated document-processing infrastructure",
      "Secure handling of high-volume or sensitive documents",
    ],
  },
  {
    title: "Document generation and signing",
    body: "Turn submitted data into consistent PDF documents, forms, contracts and application records.",
    highlights: [
      "PDF template population",
      "Typed and drawn signatures",
      "Digital certificate signing",
    ],
    capabilities: [
      "Map submitted answers onto existing PDF templates",
      "Populate text and dates",
      "Populate repeating data",
      "Generate official forms and application documents",
      "Generate contracts and supporting records",
      "Capture typed or drawn signatures",
      "Retain signature audit information",
      "Apply digital certificate signatures",
      "Produce consistent, ready-to-use PDF outputs",
      "Reduce repetitive manual document preparation",
    ],
  },
  {
    title: "Addresses, maps and location",
    body: "Capture accurate UK and international address and location information within a service journey.",
    highlights: [
      "UK postcode address lookup",
      "Ordnance Survey mapping",
      "International address capture",
    ],
    capabilities: [
      "One-click UK postcode lookup",
      "Configurable UK address fields",
      "International address fields",
      "Ordnance Survey maps",
      "OpenStreetMap fallback",
      "Mobile-friendly location selection",
      "Geographic coordinate capture",
      "Nearest-address lookup",
      "Mapping of address data to downstream systems",
      "Mapping of coordinates and location data to downstream systems",
    ],
  },
  {
    title: "Authentication and access control",
    body: "Control who can access, complete, review and manage each digital service.",
    highlights: [
      "Anonymous and passwordless access",
      "OIDC and OAuth 2.0",
      "Role-based platform permissions",
    ],
    capabilities: [
      "Anonymous public access",
      "Passwordless email access using GOV.UK Notify",
      "OpenID Connect",
      "OAuth 2.0",
      "Microsoft Entra ID and compatible identity providers",
      "AWS Cognito",
      "Configurable multi-factor authentication",
      "Save and return",
      "Configurable session timeouts",
      "In-browser timeout warnings",
      "Group-based submission sharing",
      "Read-only reviewer access",
      "Role-based platform permissions",
      "Controlled deployment permissions",
    ],
  },
  {
    title: "Branding and design control",
    body: "Apply your organisation’s visual identity while retaining accessible, responsive service patterns.",
    highlights: [
      "Configurable colours and typography",
      "Reusable design libraries",
      "Advanced CSS or Sass control",
    ],
    capabilities: [
      "Configure logos and brand imagery",
      "Select colours and typography",
      "Customise headers and footers",
      "Create shared design libraries",
      "Reuse branded components",
      "Apply branding consistently across services",
      "Use advanced CSS or Sass overrides",
      "Maintain responsive behaviour across devices",
    ],
    note: "Govform.com uses components and patterns based on the GOV.UK Design System. Final accessibility and conformance depend on each service’s content, configuration and implementation.",
  },
  {
    title: "Environments, deployment and governance",
    body: "Move services from prototype to production using separate environments and controlled deployment processes.",
    highlights: [
      "Prototype, QA and Production environments",
      "Version history and rollback",
      "Controlled deployment permissions",
    ],
    capabilities: [
      "Separate Prototype, QA and Production environments",
      "Environment-specific service data",
      "Environment-specific API connections",
      "Shareable prototype previews",
      "Complete version history",
      "Version comparison",
      "Rollback to earlier versions",
      "Controlled promotion between environments",
      "Role-based deployment permissions",
      "Platform event logs",
      "Workflow audit trails",
    ],
  },
];

const FAQS = [
  {
    question: "What is Govform.com?",
    answer: "Govform.com is a digital service platform for designing, testing, launching and managing accessible online forms and multi-stage service journeys. It combines service-building tools, workflow automation, integrations, analytics and governance capabilities in one platform.",
  },
  {
    question: "Can Govform.com create multi-page digital services?",
    answer: "Yes. Govform.com can create multi-page service journeys with conditional routing, dynamic content, validation, save-and-return functionality, task lists and review workflows.",
  },
  {
    question: "Does Govform.com support accessible online forms?",
    answer: "Govform.com provides responsive components and patterns designed to support WCAG 2.2 AA conformance. Final accessibility also depends on the content, configuration and implementation of each service.",
  },
  {
    question: "Can Govform.com connect to SharePoint and Power Automate?",
    answer: "Yes. Govform.com can read from and write to Microsoft SharePoint and trigger Power Automate workflows. It also supports Microsoft Dataverse, Power BI, Power Apps and configurable REST API connections.",
  },
  {
    question: "Does Govform.com provide digital service analytics?",
    answer: "Yes. Govform.com provides server-side analytics for journey completions, drop-offs, page performance, validation failures, time on page, devices and browsers. The analytics do not rely on analytics cookies.",
  },
  {
    question: "Can Govform.com process uploaded documents securely?",
    answer: "Govform.com supports antivirus scanning, Content Disarm and Reconstruction, URL inspection and isolated document processing for supported uploads and configurations.",
  },
  {
    question: "What authentication methods does Govform.com support?",
    answer: "Govform.com supports anonymous access, passwordless email access, OpenID Connect, OAuth 2.0, Microsoft Entra ID, AWS Cognito and configurable session controls.",
  },
  {
    question: "Where is Govform.com data stored?",
    answer: "Govform.com provides UK-based data storage and processing options. The precise hosting, residency and deployment arrangements depend on the selected product plan and hosting model.",
  },
  {
    question: "Can Govform.com generate and sign PDF documents?",
    answer: "Yes. Govform.com can map submitted data onto PDF templates, generate completed documents, capture typed or drawn signatures and apply digital certificate signatures where configured.",
  },
  {
    question: "Does Govform.com support AI-assisted service creation?",
    answer: "Yes. The Darcy AI Assistant can generate structured services from plain-English descriptions and help update existing content and logic. Changes remain subject to human review, permissions and version control.",
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

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital service platform"
        title="Everything you need to design, build and run a digital service"
        subtitle="Design accessible user journeys, automate complex workflows and securely connect services to the systems your organisation already uses."
        supportingText="Govform.com supports the complete service lifecycle, from early prototypes and stakeholder reviews to production deployment, reporting and continuous improvement."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{
          label: "View full feature list",
          href: "#feature-directory",
          scrollDurationMs: 1200,
        }}
        reveal
      />

      <section className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Platform capabilities
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
                One platform for the complete digital service lifecycle
              </h2>
              <p data-reveal-item style={{ transitionDelay: "320ms" }}>
                Build straightforward online forms or complex, multi-stage digital services without
                assembling and maintaining multiple disconnected tools. Govform.com combines
                accessible service design, workflow automation, integrations, analytics and
                governance in one flexible platform.
              </p>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -6%">
            <div
              data-reveal-item
              className={styles.featuresUxPlaceholder}
              role="img"
              aria-label="Placeholder for a Govform user experience screenshot"
            >
              <span>Image placeholder</span>
            </div>
          </ScrollRevealGroup>
          <FeatureShowcase features={FEATURES} />
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
                Govform.com platform questions
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

      <section id="feature-directory" className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup rootMargin="0px 0px -5%">
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                  Compare capabilities
                </div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "150ms" }} className="section-heading">
                Find the features your service needs
              </h2>
              <p data-reveal-item style={{ transitionDelay: "300ms" }}>
                Search and filter Govform.com’s complete feature directory to compare platform
                capabilities and plan availability.
              </p>
            </div>
            <div data-reveal-item style={{ transitionDelay: "460ms" }}>
              <FeatureDirectory />
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
