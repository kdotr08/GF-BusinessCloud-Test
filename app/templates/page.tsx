import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Templates",
};

const CATEGORIES = [
  "Search, register and directory services",
  "Review and approval workflows",
  "Task-list services",
  "Calculators and decision tools",
  "Health, safety and risk",
  "Payments, fees and charges",
  "Licensing and permits",
  "Applications and eligibility",
  "Complaints, appeals and reviews",
];

const TEMPLATES: { title: string; body: string }[] = [
  {
    title: "Apply for a licence or permit",
    body: "Configurable application journey for licences, permits and approvals, with conditional routing, evidence upload and a check-your-answers step.",
  },
  {
    title: "Eligibility checker",
    body: "A question-led tool that qualifies applicants against a set of rules before they start a full application.",
  },
  {
    title: "Multi-part application task list",
    body: "A task-list service for applications made up of several sections that can be completed in any order and tracked to completion.",
  },
  {
    title: "Apply for a grant or funding",
    body: "A comprehensive starter for grant and funding applications, including evidence collection and eligibility checks.",
  },
  {
    title: "Public consultation response",
    body: "Collect structured responses to a policy consultation from the public, businesses or stakeholder groups.",
  },
  {
    title: "Report an incident or concern",
    body: "A public-facing template for incident, concern or safeguarding reports, with evidence upload and triage routing.",
  },
  {
    title: "Freedom of Information request",
    body: "Capture and route FOI and EIR requests, with the fields and validation regulators expect.",
  },
  {
    title: "Subject Access Request",
    body: "A structured template for handling personal data access requests under UK GDPR.",
  },
  {
    title: "Application management dashboard",
    body: "A reviewer-facing interface for teams to triage, assign and progress incoming applications.",
  },
  {
    title: "Upload supporting evidence",
    body: "A standalone evidence-submission template for applicants asked to provide documents after their initial application.",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Form templates"
        title="Start from a template, not a blank page."
        subtitle="Every template below is a working starting point on the Govform.com builder — configure it, brand it and take it live."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Browse by category</div>
            <h2 className="section-heading">Twenty-plus categories of ready-made services.</h2>
          </div>
          <div className={styles.pillRow}>
            {CATEGORIES.map((c) => (
              <span key={c} className={styles.pill}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Featured templates</div>
            <h2 className="section-heading">Ten of the most-used templates.</h2>
          </div>
          <div className={styles.featureGrid}>
            {TEMPLATES.map((t) => (
              <div key={t.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{t.title}</div>
                <p className="text-[13.5px] text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="Pick a template, make it yours, and have a working service live in days — not months."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
