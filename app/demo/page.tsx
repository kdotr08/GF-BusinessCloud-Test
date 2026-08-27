import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { MAIN_NAV_LINKS } from "@/components/marketing/nav-links";
import { WorkflowCard } from "@/components/marketing/WorkflowCard";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Book a demo",
};

const SERVICES: { title: string; body: string }[] = [
  {
    title: "Forestry licence application",
    body: "Revealing help text with embedded images, file uploads, map-based location selection, postcode address lookup and reference number validation.",
  },
  {
    title: "Test kit order form",
    body: "Conditional page flow logic, exit pages, dynamic content and links, and dropdown selection lists.",
  },
  {
    title: "Tax calculator",
    body: "Income tax calculations across adjustable bands and rates, pre-population, rich tabular content and numeric validation.",
  },
  {
    title: "Annual training budget submission",
    body: "Staff training requests via a data grid, real-time budget calculations, repeatable rows and a structured review step.",
  },
];

export default function DemoPage() {
  return (
    <>
      <header className={`${styles.pageHero} pt-4`}>
        <div className="wrap">
          <Header links={MAIN_NAV_LINKS} cta={{ href: "/pricing#institutional", label: "Talk to us" }} />

          <div className="grid min-h-[60vh] items-center gap-12 pt-10 md:grid-cols-2">
            <div className={styles.pageHeroBody}>
              <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Book a demo</div>
              <h1 className="max-w-[16ch]">See Govform.com on a real service.</h1>
              <p className="max-w-[46ch]">
                Tell us about the service you&apos;re building and we&apos;ll walk through Business
                Cloud, Darcy AI and how server-side automation works end to end — on your screen,
                not a slide deck.
              </p>
              <div className={styles.pageHeroButtons}>
                <a className="btn-pill-primary btn-hover-shrink !px-6" href="/pricing#institutional">
                  Talk to us
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
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">What we&apos;ll show you</div>
            <h2 className="section-heading">Four real services, built on Govform.com.</h2>
          </div>
          <div className={styles.featureGrid}>
            {SERVICES.map((s) => (
              <div key={s.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{s.title}</div>
                <p className="text-[13.5px] text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Ready to see it on your own service?"
        body="Bring the service you're building — we'll show you how it looks on Govform.com, live."
        primaryCta={{ label: "Talk to us", href: "/pricing#institutional" }}
        secondaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
      />
    </>
  );
}
