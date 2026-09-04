import Link from "next/link";
import type { Metadata } from "next";

// "Being finalised" stub, not the real policy yet — noindexed so it isn't
// what search engines show for "Govform.com privacy policy" in the
// meantime. Not in robots.ts's disallow, though: noindex (not a crawl
// block) means it still gets re-crawled and picked up once the real policy
// ships, instead of sitting blocked and stale.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Govform.com's privacy policy is being finalised for publication.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow border-seafoam/25 bg-seafoam/10 text-seafoam">Legal</div>
      <h1 className="text-4xl">Privacy policy - being finalised</h1>
      <p className="muted max-w-[46ch]">
        Our full privacy policy is being finalised for publication. For questions about how
        Govform.com handles data today, get in{" "}
        <Link href="/#contact" className="text-brand-blue underline">
          touch with us
        </Link>{" "}
        or head back to the{" "}
        <Link href="/" className="text-brand-blue underline">
          homepage
        </Link>
        .
      </p>
    </main>
  );
}
