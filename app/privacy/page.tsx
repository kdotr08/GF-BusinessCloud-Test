import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Govform.com — Privacy policy",
};

export default function PrivacyPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow border-seafoam/25 bg-seafoam/10 text-seafoam">Legal</div>
      <h1 className="text-4xl">Privacy policy &mdash; being finalised</h1>
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
