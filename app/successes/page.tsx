import Link from "next/link";
import type { Metadata } from "next";

// "Coming soon" stub — noindexed for the same reason as the legal pages
// (privacy/page.tsx): stays crawlable for re-indexing once real case
// studies ship, without a thin placeholder page competing for the query.
export const metadata: Metadata = {
  title: "Customer Successes",
  description: "Govform.com customer stories and case studies are on the way.",
  robots: { index: false, follow: true },
};

export default function SuccessesPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">Successes - coming soon</h1>
      <p className="muted max-w-[46ch]">
        Customer stories and case studies are on the way. In the meantime, see the{" "}
        <Link href="/pricing" className="text-brand-blue underline">
          Business Cloud pricing page
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
