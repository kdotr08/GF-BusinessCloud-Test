import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Govform.com — Analytics",
};

export default function AnalyticsPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">Analytics &amp; reporting &mdash; coming soon</h1>
      <p className="muted max-w-[46ch]">
        In the meantime, see the{" "}
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
