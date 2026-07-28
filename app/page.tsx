import { HomeHero } from "@/components/marketing/HomeHero";
import { StatsBar } from "@/components/marketing/StatsBar";
import { SolutionsGrid } from "@/components/marketing/SolutionsGrid";
import { ProductTour } from "@/components/marketing/ProductTour";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";
import { SecurityGrid } from "@/components/marketing/SecurityGrid";
import { AudienceTracks } from "@/components/marketing/AudienceTracks";
import { HomeFinalCta } from "@/components/marketing/HomeFinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <SolutionsGrid />
      <ProductTour />
      <FeatureGrid />
      <PlatformShowcase />
      <SecurityGrid />
      <AudienceTracks />
      <HomeFinalCta />
    </>
  );
}
