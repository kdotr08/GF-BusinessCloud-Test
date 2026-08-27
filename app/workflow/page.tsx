import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { MAIN_NAV_LINKS } from "@/components/marketing/nav-links";
import { WorkflowCard } from "@/components/marketing/WorkflowCard";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Workflow",
};

const STAGES: {
  label: string;
  title: string;
  steps: { title: string; body: string }[];
}[] = [
  {
    label: "Alpha",
    title: "Design & validate",
    steps: [
      {
        title: "Design your service",
        body: "Build prototypes with GDS patterns and components — file uploads, repeating sections, tables, mapping and search/retrieval.",
      },
      {
        title: "Test with users",
        body: "Share prototype links directly with user researchers, no separate environment to stand up.",
      },
      {
        title: "Configure rules and dynamic content",
        body: "Use the rules editor to go beyond the basics — conditional pages, calculated fields, dynamic text.",
      },
      {
        title: "Review with stakeholders",
        body: "Add comments, iterate with full change history, and copy, paste or revert changes as the design settles.",
      },
    ],
  },
  {
    label: "Beta",
    title: "Connect & configure",
    steps: [
      {
        title: "Connect your data and systems",
        body: "Link a service to your own systems through secure API and cloud service connections.",
      },
      {
        title: "Smart lookups and mapping",
        body: "Postcode and geographic lookups, Ordnance Survey map components, and logic tags for data mapping.",
      },
      {
        title: "Seamless communications",
        body: "GOV.UK Notify or standard email for confirmations, notifications and PDFs with attachments.",
      },
      {
        title: "Microsoft and enterprise integration",
        body: "SharePoint, Jira, Azure DevOps and Power BI connections, with automated uploads and data transformation.",
      },
    ],
  },
  {
    label: "Live",
    title: "Operate & improve",
    steps: [
      {
        title: "Monitor and improve",
        body: "A real-time analytics dashboard, 100% server-side, UK-hosted, with no sampling.",
      },
      {
        title: "Fine-grained release control",
        body: "Automatic version management with role-based QA/Production deployment — one-click deploy, update, revert or shutter.",
      },
      {
        title: "Service management and support",
        body: "Hosting, upgrades and backups included, with 99.9% uptime. Enhanced plans add priority response, DR and dedicated support.",
      },
      {
        title: "Custom domain",
        body: "Host on your own domain with SSL certificate management included in the monthly fee.",
      },
    ],
  },
];

const FAQS: [string, string][] = [
  [
    "Do I need technical skills to use Govform.com?",
    "No — services are built with drag-and-drop tools, templates and a visual logic editor, not code.",
  ],
  [
    "How long does it take to go live?",
    "Most services deploy in days or weeks, not months, once the design is settled in Alpha.",
  ],
  [
    "What authentication methods are supported?",
    "Seven, including anonymous access, GOV.UK Notify magic links, OIDC/OAuth 2.0, and AWS Cognito with MFA — plus save-and-return and group-based sharing.",
  ],
  [
    "What systems can a service connect to?",
    "Any HTTP endpoint through the REST API client, with native support for GOV.UK Notify, AWS S3, Google Cloud Storage and Azure Blob Storage, alongside deep Microsoft integration.",
  ],
  [
    "How do changes move from test to live?",
    "Through three environments — Prototype, QA and Production — with one-click promotion, full version tracking and revert capability.",
  ],
];

export default function WorkflowPage() {
  return (
    <>
      <header className={`${styles.pageHero} pt-4`}>
        <div className="wrap">
          <Header links={MAIN_NAV_LINKS} cta={{ href: "/pricing#institutional", label: "Talk to us" }} />

          <div className="grid items-center gap-12 pt-10 md:grid-cols-2">
            <div className={styles.pageHeroBody}>
              <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Workflow</div>
              <h1 className="max-w-[16ch]">From submission to automation, without leaving the server.</h1>
              <p className="max-w-[50ch]">
                Every submission is validated page by page on the server, then moves into whatever
                automation the service needs — a Notify/email step, an outbound API call, a webhook
                delivery, or a mapping step into another system.
              </p>
              <div className={styles.pageHeroButtons}>
                <a className="btn-pill-primary btn-hover-shrink !px-6" href="/pricing#addons">
                  See automation pricing
                </a>
                <a className={`${styles.pillGhost} btn-hover-shrink`} href="/demo">
                  View demo
                </a>
              </div>
            </div>
            <div className="max-w-[420px] justify-self-center">
              <WorkflowCard />
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">How it works</div>
            <h2 className="section-heading">From idea to a fully deployed, supported service in days.</h2>
          </div>
          <div className={styles.stageList}>
            {STAGES.map((stage) => (
              <div key={stage.label} className={styles.stage}>
                <div>
                  <div className={styles.stageLabel}>{stage.label}</div>
                  <div className={styles.stageTitle}>{stage.title}</div>
                </div>
                <ul className={styles.stageSteps}>
                  {stage.steps.map((step) => (
                    <li key={step.title}>
                      <b>{step.title}.</b> {step.body}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="mb-8 max-w-[60ch]">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Questions</div>
            <h2 className="text-[30px]">Workflow FAQ</h2>
          </div>
          {FAQS.map(([question, answer]) => (
            <details key={question} className={styles.faqItem}>
              <summary>{question}</summary>
              <div className="mt-2.5 text-[14.5px] text-muted">{answer}</div>
            </details>
          ))}
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
