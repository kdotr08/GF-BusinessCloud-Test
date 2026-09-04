import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddonsGrid } from "@/components/marketing/AddonsGrid";
import { EstateBanner } from "@/components/marketing/EstateBanner";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { GoLiveTable } from "@/components/marketing/GoLiveTable";
import { InstitutionalSection } from "@/components/marketing/InstitutionalSection";
import { PageHero } from "@/components/marketing/PageHero";
import { PlanCards } from "@/components/marketing/PlanCards";
import { PricingCalculator } from "@/components/marketing/PricingCalculator";
import {
  loadAddons,
  loadEstateBands,
  loadGoLive,
  loadInstitutionalComparison,
  loadPlanCards,
  loadPlanComparison,
  loadPlans,
} from "@/lib/content";

const PRICING_PAGES = {
  plans: {
    eyebrow: "Business Cloud",
    title: "Choose the right Business Cloud plan.",
    subtitle: "Compare plans, included capacity and the advantages of running production services on Govform.com.",
    anchor: "plans",
  },
  "add-ons": {
    eyebrow: "Add-ons",
    title: "Extend your plan when your service needs more.",
    subtitle: "Add capacity and specialist capabilities without moving away from your core Business Cloud plan.",
    anchor: "addons",
  },
  calculator: {
    eyebrow: "Pricing calculator",
    title: "Estimate the monthly cost of your service estate.",
    subtitle: "Model services, submissions and automation actions to find the most suitable starting plan.",
    anchor: "calculator",
  },
  "business-estate": {
    eyebrow: "Business Estate",
    title: "Portfolio pricing for large service estates.",
    subtitle: "Use predictable estate bands when you operate 100 or more live services across your organisation.",
    anchor: "estate",
  },
  institutional: {
    eyebrow: "Institutional",
    title: "A commercial route for complex public services.",
    subtitle: "Compare self-service Business Cloud with the hands-on delivery, assurance and support available to institutional teams.",
    anchor: "institutional",
  },
  "go-live": {
    eyebrow: "Go-live reviews",
    title: "Independent checks before your service goes live.",
    subtitle: "Choose the right level of assurance for complex, high-risk or business-critical services.",
    anchor: "go-live",
  },
  faq: {
    eyebrow: "Pricing FAQ",
    title: "Pricing definitions and common questions.",
    subtitle: "Understand submissions, automation actions, support, overages and the boundary between product and professional services.",
    anchor: "faq",
  },
} as const;

type PricingPageKey = keyof typeof PRICING_PAGES;

function isPricingPage(section: string): section is PricingPageKey {
  return section in PRICING_PAGES;
}

export function generateStaticParams() {
  return Object.keys(PRICING_PAGES).map((section) => ({ section }));
}

// Each of these renders the same section component /pricing itself renders
// in full (PlanCards, AddonsGrid, etc. — see the switch below) — so rather
// than let these compete with /pricing for the same content, canonical
// points back at the matching anchor on the one comprehensive page.
export function generateMetadata({ params }: { params: { section: string } }): Metadata {
  if (!isPricingPage(params.section)) return {};
  const page = PRICING_PAGES[params.section];
  return {
    title: page.eyebrow,
    description: page.subtitle,
    alternates: { canonical: `https://govform.com/pricing#${page.anchor}` },
  };
}

export default async function PricingSectionPage({ params }: { params: { section: string } }) {
  if (!isPricingPage(params.section)) notFound();

  const page = PRICING_PAGES[params.section];
  let content: React.ReactNode;

  switch (params.section) {
    case "plans": {
      const [cards, comparisonRows] = await Promise.all([loadPlanCards(), loadPlanComparison()]);
      content = <PlanCards cards={cards} comparisonRows={comparisonRows} />;
      break;
    }
    case "add-ons":
      content = <AddonsGrid addons={await loadAddons()} />;
      break;
    case "calculator":
      content = <PricingCalculator plans={await loadPlans()} />;
      break;
    case "business-estate":
      content = <EstateBanner bands={await loadEstateBands()} />;
      break;
    case "institutional":
      content = <InstitutionalSection rows={await loadInstitutionalComparison()} />;
      break;
    case "go-live":
      content = <GoLiveTable rows={await loadGoLive()} />;
      break;
    case "faq":
      content = <FaqAccordion />;
      break;
  }

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "View all pricing", href: "/pricing" }}
      />
      {content}
    </>
  );
}
