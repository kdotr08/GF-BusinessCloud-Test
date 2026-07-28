import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Govform.com — Templates",
};

export default function TemplatesPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">Form templates &mdash; coming soon</h1>
      <p className="muted max-w-[46ch]">
        In the meantime, see{" "}
        <Link href="/resources" className="text-brand-blue underline">
          Resources
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
