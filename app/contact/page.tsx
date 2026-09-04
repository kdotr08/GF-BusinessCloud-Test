import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Govform.com to book a demo, get product support, or discuss Business Cloud, Business Estate and Institutional pricing.",
  alternates: { canonical: "https://govform.com/contact" },
};

const CONTACT_ROUTES = [
  {
    title: "Discuss a service",
    body: "Tell us what you are building and see Govform.com applied to a real service journey.",
    label: "View demo services",
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
        title="Talk to us about your digital service."
        subtitle="Whether you want to book a demo, plan a complex service or discuss the right commercial route, start here."
        primaryCta={{ label: "Choose an enquiry", href: "#contact-options" }}
        secondaryCta={{ label: "Get support", href: "/support" }}
        centered
      />

      <main id="contact-options" className={styles.section}>
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
