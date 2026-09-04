import type { Metadata } from "next";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { PageHero } from "@/components/marketing/PageHero";
import { UseCasesShowcase } from "@/components/marketing/UseCasesShowcase";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Digital Service Use Cases",
  description:
    "Explore how Govform.com supports applications, renewals, casework, consultations, licensing, inspections, payments and other public-service use cases.",
  alternates: { canonical: "https://govform.com/use-cases" },
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="Digital services for the work government needs to do."
        subtitle="From applications and renewals to casework, consultations and inspections, Govform combines reusable capabilities around the outcome your service needs to deliver."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo services", href: "/demo" }}
      />

      <main className={`${styles.section} ${styles.useCasesSection}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
              What you can build
            </div>
            <h2 className="section-heading">Start with the service outcome, then combine the capabilities you need.</h2>
            <p className="muted">
              Browse common interaction types used across public services. Each use case can combine questions,
              evidence, decisions, workflow, integrations and reporting in a single accessible journey.
            </p>
          </div>
          <UseCasesShowcase />
        </div>
      </main>

      <ClosingCta
        eyebrow="Build your service"
        title="Turn a complex process into a clear digital journey"
        body="Start from a template or build around the particular users, rules, data and operational outcomes your service requires."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
