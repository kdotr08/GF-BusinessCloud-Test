import Link from "next/link";
import type { Metadata } from "next";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";

// Orphaned page — not in nav-links.ts, duplicates FeatureGrid/PlatformShowcase
// content that already lives on /features. noindex + canonical here (belt
// and suspenders alongside the robots.ts disallow) instead of deleting it,
// since it's still reachable by direct URL and something may still link to
// it externally.
export const metadata: Metadata = {
  title: "Platform",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://govform.com/features" },
};

export default function PlatformPage() {
  return (
    <>
      <div className="wrap pt-16">
        <Link href="/" className="text-sm text-brand-blue underline">
          &larr; Back to homepage
        </Link>
      </div>
      <FeatureGrid />
      <PlatformShowcase />
    </>
  );
}
