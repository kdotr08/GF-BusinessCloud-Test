import { HomeHero } from "@/components/marketing/HomeHero";
import { StatsBar } from "@/components/marketing/StatsBar";
import { SolutionsGrid } from "@/components/marketing/SolutionsGrid";
import { ProductTour } from "@/components/marketing/ProductTour";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";
import { IntegrationsSection } from "@/components/marketing/IntegrationsSection";
import { CustomerSuccess } from "@/components/marketing/CustomerSuccess";
import { SecurityGrid } from "@/components/marketing/SecurityGrid";
import { AudienceTracks } from "@/components/marketing/AudienceTracks";
import { HomeFaq } from "@/components/marketing/HomeFaq";
import { HomeFinalCta } from "@/components/marketing/HomeFinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <SolutionsGrid />
      <ProductTour />
      <PlatformShowcase />
      <FeatureGrid />
      <IntegrationsSection />
      <CustomerSuccess />
      <SecurityGrid />
      <AudienceTracks />
      <HomeFaq />
      <HomeFinalCta />
    </>
  );
}
