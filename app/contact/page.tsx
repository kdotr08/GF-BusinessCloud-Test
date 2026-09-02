import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Contact us",
};

const CONTACT_ROUTES = [
  {
    title: "Discuss a service",
    body: "Tell us what you are building and see Govform.com applied to a real service journey.",
    label: "Book a demo",
    href: "/demo",
  },
  {
    title: "Product support",
    body: "Get help with a live service, product capabilities, documentation or delivery support.",
    label: "Visit support",
    href: "/support",
  },
  {
    title: "Choose a commercial route",
    body: "Compare Business Cloud, Business Estate and Institutional options for your organisation.",
    label: "Explore pricing",
    href: "/pricing",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Start with the team best placed to help."
        subtitle="Whether you are evaluating Govform.com, planning a complex service or supporting an existing deployment, choose the route below."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Get support", href: "/support" }}
      />

      <main className={styles.section}>
        <div className="wrap">
          <div className={styles.featureGrid}>
            {CONTACT_ROUTES.map((route) => (
              <article key={route.href} className={styles.featureCard}>
                <h2 className={styles.featureCardTitle}>{route.title}</h2>
                <p className="text-[13.5px] text-muted">{route.body}</p>
                <Link href={route.href} className="mt-4 inline-block text-sm font-semibold text-brand-blue underline">
                  {route.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
