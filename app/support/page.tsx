import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Govform.com — Support",
};

export default function SupportPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">Support centre &mdash; coming soon</h1>
      <p className="muted max-w-[46ch]">
        Every Business Cloud plan already includes ticket-based product support &mdash; see{" "}
        <Link href="/pricing#faq" className="text-brand-blue underline">
          the pricing FAQ
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
