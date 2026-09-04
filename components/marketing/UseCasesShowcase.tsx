"use client";

import { useMemo, useState } from "react";
import styles from "./content-page.module.css";

type UseCase = {
  title: string;
  category: string;
  examples: string;
  capabilities: string;
  outcome: string;
};

const CATEGORIES = [
  "Citizen services",
  "Regulation and assurance",
  "Operations and casework",
  "Data and automation",
  "Engagement and evidence",
];

const USE_CASES: UseCase[] = [
  {
    title: "Apply and register",
    category: "Citizen services",
    examples: "Benefits, passports, licences, company registration, planning, trademarks and patents.",
    capabilities: "Drag-and-drop builder, conditional logic, file uploads, address lookup, save and return, and SharePoint.",
    outcome: "Guide people through complex applications and deliver complete, structured submissions to operational teams.",
  },
  {
    title: "Renew, update and manage records",
    category: "Citizen services",
    examples: "Passport and licence renewals, vehicle tax, council tax changes, address changes and annual returns.",
    capabilities: "API pre-population, version control, identity verification, SSO and renewal reminders.",
    outcome: "Use known data and reminders to make renewals faster, reduce errors and prevent avoidable service lapses.",
  },
  {
    title: "Identity and eligibility",
    category: "Citizen services",
    examples: "GOV.UK One Login, NHS login, HMRC accounts, DBS, right-to-work checks and benefit calculators.",
    capabilities: "OAuth 2.0, SSO, access controls, role-based permissions and custom-domain branding.",
    outcome: "Help people establish access and check likely eligibility before beginning a full application.",
  },
  {
    title: "Payments and financial services",
    category: "Citizen services",
    examples: "GOV.UK Pay, council tax, visa fees, claims, VAT refunds and creative reliefs.",
    capabilities: "GOV.UK Pay integration, fee calculation, conditional routing and receipt generation.",
    outcome: "Calculate fees, route payments and produce confirmations as part of one joined-up journey.",
  },
  {
    title: "Booking and scheduling",
    category: "Citizen services",
    examples: "Driving tests, GP appointments, visa biometrics, court hearings and vaccinations.",
    capabilities: "Date and time components, availability logic, confirmation workflows and calendar APIs.",
    outcome: "Connect availability, booking and reminders so users can manage appointments without manual intervention.",
  },
  {
    title: "Licensing and permits",
    category: "Citizen services",
    examples: "Alcohol, taxi, street-trading, HMO, waste-carrier, marine and drone licences.",
    capabilities: "Conditional flows, fee calculation, uploads, expiry tracking and renewal reminders.",
    outcome: "Connect applications, evidence, fees, decisions and renewals in one licensing journey.",
  },
  {
    title: "Elections and civic services",
    category: "Citizen services",
    examples: "Voter registration, proxy and postal votes, nominations and petitions.",
    capabilities: "Identity verification, address validation, date-sensitive forms and accessible service patterns.",
    outcome: "Support accessible, time-sensitive civic processes with appropriate identity and address checks.",
  },
  {
    title: "Reporting and returns",
    category: "Regulation and assurance",
    examples: "Self Assessment, VAT, Companies House, gender pay gap, CQC and cyber-incident returns.",
    capabilities: "Repeating sections, validation rules, API submission, version control and audit trails.",
    outcome: "Validate returns before submission and pass structured records into reporting and compliance systems.",
  },
  {
    title: "Compliance and declarations",
    category: "Regulation and assurance",
    examples: "Right-to-work, modern-slavery, gender-pay-gap, health and safety, and ICO declarations.",
    capabilities: "Declaration pages, signature capture, attestation, audit trails and conditional routing.",
    outcome: "Collect declarations consistently, maintain traceable records and identify incomplete submissions before deadlines.",
  },
  {
    title: "Grants and approvals",
    category: "Regulation and assurance",
    examples: "Innovate UK, Arts Council, UKSPF, agricultural subsidies and emergency grant programmes.",
    capabilities: "Multi-stage journeys, eligibility screening, uploads, scoring forms and SharePoint.",
    outcome: "Support grant programmes from eligibility and application through assessment, award and monitoring.",
  },
  {
    title: "Procurement and tendering",
    category: "Regulation and assurance",
    examples: "CCS frameworks, Contracts Finder, defence, NHS tenders and G-Cloud.",
    capabilities: "Multi-section bids, weighted scoring, uploads, conditional routing and audit trails.",
    outcome: "Structure bids, evidence and evaluation criteria to support consistent assessment and a clear audit trail.",
  },
  {
    title: "Inspections and assessments",
    category: "Regulation and assurance",
    examples: "Ofsted, CQC, food hygiene, building control, HSE, fire safety and MOT.",
    capabilities: "Mobile forms, geotagged photos, repeating sections and severity scoring.",
    outcome: "Guide consistent mobile capture, scoring and evidence collection, then prioritise follow-up work.",
  },
  {
    title: "Staff workflows and cases",
    category: "Operations and casework",
    examples: "Benefits casework, immigration, NHS triage, inspections and public-sector procurement.",
    capabilities: "Internal libraries, role-based access, SharePoint, Dataverse, Power Automate and managed environments.",
    outcome: "Guide triage, assignment and approval while maintaining consistent decisions and a clear case history.",
  },
  {
    title: "Appeals and disputes",
    category: "Operations and casework",
    examples: "Tax appeals, benefit tribunals, planning objections, parking penalties and SEND.",
    capabilities: "Multi-stage journeys, branching, evidence uploads, case linking and deadline triggers.",
    outcome: "Guide people through grounds, evidence and deadlines while linking an appeal to its original decision.",
  },
  {
    title: "Whistleblowing",
    category: "Operations and casework",
    examples: "NHS Freedom to Speak Up, fraud reporting, Crimestoppers and safeguarding.",
    capabilities: "Anonymous submissions, incident capture, secure uploads, encryption and controlled access.",
    outcome: "Provide a secure route for confidential or anonymous reports and structure information for safe triage.",
  },
  {
    title: "Find, filter and use datasets",
    category: "Data and automation",
    examples: "Land Registry, Companies House, MOT history, planning searches and flood mapping.",
    capabilities: "Dynamic CSV and JSON feeds, API lookups, conditional display and map visualisation.",
    outcome: "Help users locate and act on relevant records without relying on manual searches or information requests.",
  },
  {
    title: "Monitoring and dashboards",
    category: "Data and automation",
    examples: "Service dashboards, inspection trackers, air quality, flood warnings and NHS waiting times.",
    capabilities: "Real-time analytics, cookieless measurement, server-side UK data and Power BI integration.",
    outcome: "Bring operational and service-performance data together so teams can identify issues and allocate resources.",
  },
  {
    title: "Geolocated and spatial services",
    category: "Data and automation",
    examples: "Pothole reports, planning boundaries, flood zones, fly-tipping and catchment areas.",
    capabilities: "Map components, Ordnance Survey and OpenStreetMap, postcode lookup, coordinates and address resolution.",
    outcome: "Capture accurate locations and connect spatial records directly to field operations and analysis.",
  },
  {
    title: "AI document and image processing",
    category: "Data and automation",
    examples: "Passport photos, housing disrepair, road defects and receipt processing.",
    capabilities: "File uploads, image-to-PDF conversion, compression, AI Builder and API hooks.",
    outcome: "Use assisted extraction and classification to reduce manual review while keeping people in control of decisions.",
  },
  {
    title: "Document generation",
    category: "Data and automation",
    examples: "Decision letters, inspection reports, planning notices and certificates.",
    capabilities: "PDF generation, SharePoint output, templates, custom branding and dynamic content.",
    outcome: "Create consistent branded documents from service data and shorten the path from decision to notification.",
  },
  {
    title: "Notifications and correspondence",
    category: "Data and automation",
    examples: "Confirmations, NHS reminders, tax notices, benefit decisions and flood warnings.",
    capabilities: "Email actions, GOV.UK Notify, configurable confirmations and Power Automate triggers.",
    outcome: "Send clear, accessible confirmations, decisions and reminders automatically throughout a service.",
  },
  {
    title: "Collect evidence",
    category: "Engagement and evidence",
    examples: "Regulatory submissions, self-evaluations, planning documents and supporting evidence.",
    capabilities: "Secure uploads, antivirus scanning, compression, validation, repeating capture and PDF generation.",
    outcome: "Validate and organise evidence at capture so reviewers receive more complete, decision-ready submissions.",
  },
  {
    title: "Consultations and feedback",
    category: "Engagement and evidence",
    examples: "Planning and policy consultations, petitions, surveys and service-design research.",
    capabilities: "Survey patterns, Likert scales, free text, anonymous responses, analytics and prototypes.",
    outcome: "Make participation accessible and organise structured and free-text responses for efficient analysis.",
  },
  {
    title: "Consent and permissions",
    category: "Engagement and evidence",
    examples: "NHS opt-out, organ donation, power of attorney, research consent and data sharing.",
    capabilities: "Consent controls, privacy links, conditional flows, version control and UK hosting.",
    outcome: "Explain permissions clearly and record the wording, version and status associated with each consent.",
  },
];

const ALL = "All use cases";

export function UseCasesShowcase() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const visibleUseCases = useMemo(
    () =>
      activeCategory === ALL
        ? USE_CASES
        : USE_CASES.filter((useCase) => useCase.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <div className={styles.pillRow} role="group" aria-label="Filter use cases by category">
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

      <div className={styles.useCaseGrid}>
        {visibleUseCases.map((useCase) => (
          <article key={useCase.title} className={styles.useCaseCard}>
            <div className={`eyebrow ${styles.useCaseCategory}`}>{useCase.category}</div>
            <h2>{useCase.title}</h2>
            <p className={styles.useCaseOutcome}>{useCase.outcome}</p>
            <dl className={styles.useCaseMeta}>
              <div>
                <dt>Examples</dt>
                <dd>{useCase.examples}</dd>
              </div>
              <div>
                <dt>Govform capabilities</dt>
                <dd>{useCase.capabilities}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}
