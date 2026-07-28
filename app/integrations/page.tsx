import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Govform.com — Integrations",
};

export default function IntegrationsPage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">A named integrations directory &mdash; coming soon</h1>
      <p className="muted max-w-[46ch]">
        Today, Govform.com connects to other systems through server-side{" "}
        <Link href="/workflow" className="text-brand-blue underline">
          automation actions and webhooks
        </Link>{" "}
        &mdash; outbound API calls, inbound actions and mapping steps. Or head back to the{" "}
        <Link href="/" className="text-brand-blue underline">
          homepage
        </Link>
        .
      </p>
    </main>
  );
}
