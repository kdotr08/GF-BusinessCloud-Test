import Link from "next/link";
import type { Metadata } from "next";
import { WorkflowCard } from "@/components/marketing/WorkflowCard";

export const metadata: Metadata = {
  title: "Govform.com — Book a demo",
};

export default function DemoPage() {
  return (
    <main className="wrap grid min-h-[75vh] items-center gap-12 py-20 md:grid-cols-2">
      <div>
        <div className="eyebrow">Book a demo</div>
        <h1 className="max-w-[16ch] text-4xl">See Govform.com on a real service.</h1>
        <p className="muted max-w-[46ch]">
          Tell us about the service you&apos;re building and we&apos;ll walk through Business
          Cloud, Darcy AI and how server-side automation works end to end &mdash; on your
          screen, not a slide deck.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/pricing#institutional">
            Talk to us
          </a>
          <Link href="/" className="text-sm text-brand-blue underline self-center">
            &larr; Back to homepage
          </Link>
        </div>
      </div>
      <div className="max-w-[420px] justify-self-center">
        <WorkflowCard />
      </div>
    </main>
  );
}
