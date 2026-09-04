"use client";

import { useMemo, useState } from "react";
import styles from "./content-page.module.css";
import { TemplateCard } from "./TemplateCard";

type Template = {
  title: string;
  body: string;
  image: string;
  previewHref: string;
  category: string;
};

// Every service type below has at least one template, so filtering never
// produces an empty grid.
const CATEGORIES = [
  "Review and approval workflows",
  "Task-list services",
  "Calculators and decision tools",
  "Health, safety and risk",
  "Licensing and permits",
  "Applications and eligibility",
  "Consultations and feedback",
  "Information requests",
];

const TEMPLATES: Template[] = [
  {
    title: "Apply for a licence or permit",
    body: "Configurable application journey for licences, permits and approvals, with conditional routing, evidence upload and a check-your-answers step.",
    image: "/images/templates/licence.png",
    previewHref: "https://govforms.uk/prototypes/templates/license-application",
    category: "Licensing and permits",
  },
  {
    title: "Eligibility checker",
    body: "A question-led tool that helps users check whether they are likely to qualify before starting a full application.",
    image: "/images/templates/eligibility-checker.png",
    previewHref: "https://govforms.uk/prototypes/templates/eligibility-checker-for-a-small-business-grant",
    category: "Calculators and decision tools",
  },
  {
    title: "Multi-part application task list",
    body: "A task-list service for applications made up of several sections that can be completed in any order and tracked to completion.",
    image: "/images/templates/task-list.png",
    previewHref: "https://govforms.uk/prototypes/templates/apply-for-a-council-tax-reduction",
    category: "Task-list services",
  },
  {
    title: "Apply for a grant or funding",
    body: "A reusable starting point for grant and funding applications, including eligibility questions, applicant details, supporting evidence and declarations.",
    image: "/images/templates/grant.png",
    previewHref: "https://govforms.uk/prototypes/templates/apply-for-a-community-development-grant",
    category: "Applications and eligibility",
  },
  {
    title: "Public consultation response",
    body: "Collect structured responses to public consultations, including respondent details, consultation questions and consent.",
    image: "/images/templates/consultation.png",
    previewHref: "https://govforms.uk/prototypes/templates/respond-to-a-local-policy-consultation",
    category: "Consultations and feedback",
  },
  {
    title: "Report an incident or concern",
    body: "A public-facing template for incident, concern or safeguarding reports, with evidence upload and triage routing.",
    image: "/images/templates/report-incident.png",
    previewHref: "https://govforms.uk/prototypes/templates/report-a-public-safety-concern",
    category: "Health, safety and risk",
  },
  {
    title: "Freedom of Information request",
    body: "Capture and route Freedom of Information and Environmental Information Regulation requests, including contact details, request scope and preferred response format.",
    image: "/images/templates/foi-request.png",
    previewHref: "https://govforms.uk/prototypes/templates/submit-an-f-o-i-or-e-i-r-request",
    category: "Information requests",
  },
  {
    title: "Subject access request",
    body: "Collect identity details, request scope and supporting evidence for subject access requests under UK GDPR.",
    image: "/images/templates/subject-access-request.png",
    previewHref: "https://govforms.uk/prototypes/templates/subject-access-request",
    category: "Information requests",
  },
  {
    title: "Application management dashboard",
    body: "Give teams one place to review, assign, track and progress incoming applications.",
    image: "/images/templates/manage-applications.png",
    previewHref: "https://govforms.uk/prototypes/templates/manage-incoming-licensing-applications",
    category: "Review and approval workflows",
  },
  {
    title: "Upload supporting evidence",
    body: "A standalone evidence-submission template for applicants asked to provide documents after their initial application.",
    image: "/images/templates/supporting-evidence.png",
    previewHref: "https://govforms.uk/prototypes/templates/provide-evidence-for-an-existing-application",
    category: "Applications and eligibility",
  },
];

const ALL = "All";

export function TemplatesShowcase() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const visible = useMemo(
    () => (activeCategory === ALL ? TEMPLATES : TEMPLATES.filter((t) => t.category === activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <div className={styles.pillRow} role="group" aria-label="Filter templates by category">
        {[ALL, ...CATEGORIES].map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.pill} ${styles.pillButton} ${
              activeCategory === category ? styles.pillButtonActive : ""
            }`}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`${styles.featureGrid} mt-8`}>
        {visible.map((t) => (
          <TemplateCard key={t.title} {...t} />
        ))}
      </div>
    </>
  );
}
