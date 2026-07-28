import Link from "next/link";
import type { Metadata } from "next";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { PlatformShowcase } from "@/components/marketing/PlatformShowcase";

export const metadata: Metadata = {
  title: "Govform.com — Platform",
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
