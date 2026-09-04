import Link from "next/link";
import type { Metadata } from "next";

// Same "being finalised" treatment as privacy/page.tsx — see the comment
// there for why this is noindex, not a robots.ts crawl block.
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Govform.com's terms of service are being finalised for publication.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow border-seafoam/25 bg-seafoam/10 text-seafoam">Legal</div>
      <h1 className="text-4xl">Terms of service - being finalised</h1>
      <p className="muted max-w-[46ch]">
        Our full terms of service are being finalised for publication. For questions about
        Business Cloud, Business Estate or Institutional &amp; Central Government agreements,
        get in{" "}
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
