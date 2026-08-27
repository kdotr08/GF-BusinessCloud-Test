import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Integrations",
};

const CATEGORIES: { title: string; items: string[] }[] = [
  {
    title: "Government platforms",
    items: ["GOV.UK Notify", "GOV.UK Pay", "GOV.UK Design System", "AWS SES"],
  },
  {
    title: "Microsoft & automation",
    items: ["SharePoint", "Power Automate", "Power Apps", "Power BI", "Dataverse", "Azure DevOps"],
  },
  {
    title: "SSO & authentication",
    items: ["Azure AD / Entra ID", "AWS Cognito (MFA)", "OAuth 2.0", "OpenID Connect"],
  },
  {
    title: "File sharing & storage",
    items: ["AWS S3", "Google Cloud Storage", "Azure Blob Storage", "Dropbox", "OneDrive"],
  },
  {
    title: "Geo & mapping",
    items: ["Ordnance Survey", "OpenStreetMap", "UK postcode lookup", "International address entry"],
  },
  {
    title: "CRM & casework",
    items: ["Salesforce", "Jira", "ServiceNow", "Dynamics 365", "HubSpot", "Zendesk"],
  },
  {
    title: "Developer tools",
    items: ["REST API", "Webhooks", "Mutual TLS APIs", "Govform.com API"],
  },
  {
    title: "Documents & PDFs",
    items: ["PDF generation", "DocuSign", "Adobe Acrobat Sign", "SharePoint PDF uploads"],
  },
  {
    title: "Payments & billing",
    items: ["GOV.UK Pay", "Stripe", "PayPal", "Worldpay", "Opayo"],
  },
  {
    title: "Emailing & notifications",
    items: ["GOV.UK Notify (email & SMS)", "SendGrid", "Mailchimp", "Campaign Monitor"],
  },
  {
    title: "Data management",
    items: ["CSV feeds", "Excel feeds", "JSON feeds", "Google Sheets"],
  },
  {
    title: "Analytics & reporting",
    items: ["Power BI", "Google Analytics", "CSV export", "JSON export"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Connect to anything."
        subtitle="Seamlessly integrate Govform.com into the rest of your software ecosystem. Use an out-the-box connector, or a custom secure API call."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">70+ integrations</div>
            <h2 className="section-heading">Twelve categories, dozens of connectors.</h2>
          </div>
          <div className={styles.featureGrid}>
            {CATEGORIES.map((c) => (
              <div key={c.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{c.title}</div>
                <ul className={styles.featureCardList}>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">SharePoint</div>
            <h2 className="section-heading">Deep, purpose-built SharePoint connectivity.</h2>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Drop-site connectivity</div>
              <p className="text-[13.5px] text-muted">
                Secure SharePoint drop-site connections with configuration tests, so a broken link
                is caught before it costs you a submission.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Automatic mapping</div>
              <p className="text-[13.5px] text-muted">
                Submissions auto-map to SharePoint list items, with structured folder naming for
                uploaded files and generated PDFs.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Validated uploads</div>
              <p className="text-[13.5px] text-muted">
                File upload validation, compression, conversion and antivirus scanning, with
                separate QA and Production environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="If it has an API, Govform.com can talk to it. Not on the list above? Ask us — most integrations are a configuration, not a build."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
