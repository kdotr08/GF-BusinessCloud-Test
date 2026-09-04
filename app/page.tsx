import type { Metadata } from "next";
import { HomeHero } from "@/components/marketing/HomeHero";
import { StatsBar } from "@/components/marketing/StatsBar";
import { SolutionsGrid } from "@/components/marketing/SolutionsGrid";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";
import { IntegrationsSection } from "@/components/marketing/IntegrationsSection";
import { CustomerSuccess } from "@/components/marketing/CustomerSuccess";
import { SecurityGrid } from "@/components/marketing/SecurityGrid";
import { AudienceTracks } from "@/components/marketing/AudienceTracks";
import { HomeFaq } from "@/components/marketing/HomeFaq";
import { FAQS } from "@/components/marketing/home-faq-data";
import { HomeFinalCta } from "@/components/marketing/HomeFinalCta";

// No title here — app/page.tsx resolves metadata for the SAME segment as
// the root layout (it's not a child segment), so layout.tsx's
// title.template doesn't apply to it the way it does on every other page;
// a title set here would render verbatim with no "| Govform.com" suffix.
// Leaving it unset falls back to the layout's title.default instead, which
// is already the exact homepage title, written out in full for the same
// reason.
export const metadata: Metadata = {
  description:
    "Build accessible forms and digital services, automate complex workflows, and handle sensitive information securely. Proven in UK public services, available to organisations of every size.",
  keywords: [
    "digital service platform",
    "accessible form builder",
    "government form software",
    "workflow automation",
    "GOV.UK form builder",
  ],
  alternates: { canonical: "https://govform.com" },
};

// Organization + WebSite structured data — not FAQPage-specific like the
// inner pages (see FAQ_SCHEMA below), this is what lets answer engines and
// rich results resolve "Govform.com" as an actual named entity rather than
// just a page title string.
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Govform.com",
  url: "https://govform.com",
  description:
    "Accessible, secure digital service platform for building forms, automating workflows and handling sensitive information, proven in UK public services.",
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Govform.com",
  url: "https://govform.com",
};

// Same FAQPage pattern as the inner pages (analytics/features/integrations/
// workflow/pricing page.tsx) — built from HomeFaq's own exported FAQS so it
// can't drift out of sync with what the accordion actually renders.
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <PlatformShowcase />
      <SolutionsGrid />
      <FeatureGrid />
      <IntegrationsSection />
      <CustomerSuccess />
      <SecurityGrid />
      <AudienceTracks />
      <HomeFaq />
      <HomeFinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </>
  );
}
