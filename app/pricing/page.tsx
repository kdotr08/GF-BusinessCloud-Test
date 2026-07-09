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

export const metadata: Metadata = {
  title: "Govform.com — Business Cloud pricing",
};

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PlanCards />
      <EstateBanner />
      <IncludesGrid />
      <AddonsGrid />
      <PricingCalculator />
      <InstitutionalSection />
      <GoLiveTable />
      <ScenariosGrid />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}
