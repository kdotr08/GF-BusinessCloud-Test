import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { TemplateCard } from "@/components/marketing/TemplateCard";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Demo Digital Services",
  description:
    "Try out some example Govforms digital services, all created in Govforms Digital Service Builder — no coding required.",
  alternates: { canonical: "https://govform.com/demo" },
};

const SERVICES = [
  {
    title: "Forestry license application",
    body: "This demo includes revealing help text with embedded images, file uploads, map-based location selection for multiple sites, postcode address lookup, double email capture for verification, and reference number format validation.",
    image: "/images/demo/forestry-licence.avif",
    previewHref: "https://www.govforms.uk/prototypes/demo2/apply-for-a-license-demo/LIC-00855420/0",
    category: "Licensing and permits",
  },
  {
    title: "Test kit order form",
    body: "This demo asks questions to determine next steps and dynamic content, depending on the user's local authority. It includes conditional page flow logic, exit pages, dynamic content, dynamic links and drop-down selection lists.",
    image: "/images/demo/test-kit-order.avif",
    previewHref: "https://www.govforms.uk/prototypes/demo3/request-postal-pks-kit/PKS100005069/0",
    category: "Conditional journeys",
  },
  {
    title: "Tax calculator",
    body: "This demo calculates income tax and allows the user to change bands and rates. It includes pre-population, rich and dynamic tabular content, page flow controlled by buttons, numeric validation and journey loops.",
    image: "/images/demo/tax-calculator.avif",
    previewHref: "https://www.govforms.uk/prototypes/demo4/calculate-your-income-tax/2BRY-RE3N-C93Y/0",
    category: "Calculators and decision tools",
  },
  {
    title: "Annual training budget submission",
    body: "This demo captures staff training requests using a data grid and calculates budget totals in real time. It includes repeatable rows, spreadsheet-style data entry, dynamic calculations, and a structured review and submission flow.",
    image: "/images/demo/training-budget.png",
    previewHref: "https://govforms.uk/prototypes/demo5/training-budget-demo/AHTA-BWD6-RAXD/0",
    category: "Data and workflow",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo services"
        title="Try out our demo form services"
        subtitle="All the digital form services below were created with Govforms Digital Service Builder running on our cloud platform."
        supportingText="Sign up for your free account to start building your own digital service prototypes."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        centered
      />

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="section-intro section-intro--center">
            <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Example services</div>
            <h2 className="section-heading">Explore services built with Govforms.</h2>
          </div>
          <div className={`${styles.featureGrid} ${styles.demoGrid} mt-8`}>
            {SERVICES.map((service) => (
              <TemplateCard key={service.title} {...service} ctaLabel="Start demo" />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="Take the first step towards streamlined digital services with a personalised consultation from our expert team."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
