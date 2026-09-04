import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { TemplatesShowcase } from "@/components/marketing/TemplatesShowcase";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Ready-Made Digital Service Templates",
  description:
    "Explore ready-made Govform.com templates for applications, licences, consultations, FOI requests, eligibility checks and other public services.",
  keywords: [
    "digital service templates",
    "government form templates",
    "licence application template",
    "FOI request template",
    "eligibility checker template",
  ],
  alternates: { canonical: "https://govform.com/templates" },
};

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Form templates"
        title="Start from a template, not a blank page."
        subtitle="Start with a working service template, then configure the questions, apply your branding and publish it through the Govform.com builder."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
      />

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Service templates</div>
            <h2 className="section-heading">Ready-made templates for common public services.</h2>
            <p className="muted">Browse our most-used templates or filter them by service type.</p>
            <p className="muted mt-3 text-sm">
              Each link opens a functioning example service in a new tab; it does not copy the template into your
              account. Start a free trial to configure a template in the builder.
            </p>
          </div>
          <TemplatesShowcase />
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="Pick a template, make it yours, and have a working service live in days, not months."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
