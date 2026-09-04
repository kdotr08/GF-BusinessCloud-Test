import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { TemplatesShowcase } from "@/components/marketing/TemplatesShowcase";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Templates",
};

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

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Featured templates</div>
            <h2 className="section-heading">Twenty-plus categories of ready-made services.</h2>
            <p className="muted">Filter by category, or browse all ten of the most-used templates below.</p>
          </div>
          <TemplatesShowcase />
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
