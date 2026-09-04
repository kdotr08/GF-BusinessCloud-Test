import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Fully inclusive live service support, expert tech support and on-the-ground delivery help, from proactive monitoring to hands-on service design and UX consulting.",
  alternates: { canonical: "https://govform.com/support" },
};

const CHANNELS: { title: string; body: string; bullets: string[] }[] = [
  {
    title: "Fully inclusive live service support",
    body: "Expert UK-based support, proactive monitoring and rapid response, built into every live service as standard.",
    bullets: [
      "Proactive platform monitoring with issue alerts",
      "99.9% availability guarantee",
      "Performance monitoring, sub-1-second page loads",
    ],
  },
  {
    title: "Expert tech support",
    body: "Access to expert help, detailed tutorials and responsive support whenever you need it.",
    bullets: [
      "Email support for product questions",
      "Step-by-step tutorials and API/templating documentation",
      "Feature request reviews, with roadmap visibility",
    ],
  },
  {
    title: "On-the-ground delivery help",
    body: "Hands-on expertise in service design, UX and content to bring a mission-critical service to life, fast.",
    bullets: [
      "In-product design guidance",
      "Optional service design and UX consulting",
      "SFIA rate-card pricing, with G-Cloud and DOS routes",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Support that goes from tech answers to on-the-ground delivery."
        subtitle="Any service you deploy to our Production platform comes with UK-based, comprehensive live service support as standard."
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className="section-intro">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">How we help</div>
            <h2 className="section-heading">Three ways we support a live service.</h2>
          </div>
          <div className={styles.featureGrid}>
            {CHANNELS.map((c) => (
              <div key={c.title} className={styles.featureCard}>
                <div className={styles.featureCardTitle}>{c.title}</div>
                <p className="text-[13.5px] text-muted">{c.body}</p>
                <ul className={styles.featureCardList}>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className={styles.statRow}>
            <div className={styles.statCard}>
              <div className={styles.statNum}>99.9%</div>
              <div className={styles.statLabel}>Availability guarantee</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>24hr</div>
              <div className={styles.statLabel}>Response time (Enhanced Support)</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>2 day</div>
              <div className={styles.statLabel}>Turnaround (Enhanced Support)</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>UK</div>
              <div className={styles.statLabel}>Based support and backups</div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="Take the first step towards streamlined digital services with a personalised consultation from our expert team."
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
