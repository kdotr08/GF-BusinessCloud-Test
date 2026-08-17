import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Govform.com — Resources",
};

export default function ResourcesPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">Resources &mdash; coming soon</h1>
      <p className="muted max-w-[46ch]">
        Documentation, tutorials, guides and templates are on the way. In the meantime, see the{" "}
        <Link href="/pricing" className="text-brand-blue underline">
          Business Cloud pricing page
        </Link>{" "}
        or head back to the{" "}
        <Link href="/" className="text-brand-blue underline">
          homepage
        </Link>
        .
      </p>
      <div className="mt-2 flex flex-wrap gap-4">
        <Link href="/resources/documentation" className="text-brand-blue underline">
          Documentation
        </Link>
        <Link href="/resources/tutorials" className="text-brand-blue underline">
          Tutorials
        </Link>
      </div>
    </main>
  );
}
