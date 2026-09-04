import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { PlanCards } from "@/components/marketing/PlanCards";
import { EstateBanner } from "@/components/marketing/EstateBanner";
import { IncludesGrid } from "@/components/marketing/IncludesGrid";
import { AddonsGrid } from "@/components/marketing/AddonsGrid";
import { PricingCalculator } from "@/components/marketing/PricingCalculator";
import { InstitutionalSection } from "@/components/marketing/InstitutionalSection";
import { GoLiveTable } from "@/components/marketing/GoLiveTable";
import { ScenariosGrid } from "@/components/marketing/ScenariosGrid";
import { FaqAccordion, FAQS } from "@/components/marketing/FaqAccordion";
import { FinalCta } from "@/components/marketing/FinalCta";
import {
  loadPlans,
  loadPlanCards,
  loadPlanComparison,
  loadAddons,
  loadGoLive,
  loadEstateBands,
  loadScenarios,
  loadInstitutionalComparison,
  loadHeroRungs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Cloud Pricing",
  description:
    "Compare Business Cloud, Business Estate and Institutional pricing for Govform.com: plans, add-ons, go-live reviews and a calculator to estimate your monthly cost.",
  keywords: [
    "form builder pricing",
    "digital service pricing",
    "Business Cloud plans",
    "government software pricing",
  ],
  alternates: { canonical: "https://govform.com/pricing" },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

// Pricing figures, plan features, addons, go-live tiers, estate bands and
// scenarios are read from the shared Google Sheet when PRICING_SHEET_ID and
// a tab gid are configured (see lib/sheets.ts), otherwise from the matching
// file in /data — see lib/content.ts for the fallback logic.
export default async function PricingPage() {
  const [
    plans,
    planCards,
    planComparison,
    addons,
    goLive,
    estateBands,
    scenarios,
    institutionalComparison,
    heroRungs,
  ] = await Promise.all([
    loadPlans(),
    loadPlanCards(),
    loadPlanComparison(),
    loadAddons(),
    loadGoLive(),
    loadEstateBands(),
    loadScenarios(),
    loadInstitutionalComparison(),
    loadHeroRungs(),
  ]);

  return (
    <>
      <Hero rungs={heroRungs} />
      <PlanCards cards={planCards} comparisonRows={planComparison} />
      <EstateBanner bands={estateBands} />
      <IncludesGrid />
      <AddonsGrid addons={addons} />
      <PricingCalculator plans={plans} />
      <InstitutionalSection rows={institutionalComparison} />
      <GoLiveTable rows={goLive} />
      <ScenariosGrid scenarios={scenarios} />
      <FaqAccordion />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </>
  );
}
