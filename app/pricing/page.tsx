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
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
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
  title: "Govform.com — Business Cloud pricing",
};

// Pricing figures, plan features, addons, go-live tiers, estate bands and
// scenarios are all read from the CSVs in /data — edit those files (e.g. in
// Excel/Sheets) to update the page without touching this component.
export default function PricingPage() {
  const plans = loadPlans();
  const planCards = loadPlanCards();
  const planComparison = loadPlanComparison();
  const addons = loadAddons();
  const goLive = loadGoLive();
  const estateBands = loadEstateBands();
  const scenarios = loadScenarios();
  const institutionalComparison = loadInstitutionalComparison();
  const heroRungs = loadHeroRungs();

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
    </>
  );
}
