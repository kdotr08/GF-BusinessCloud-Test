import Link from "next/link";
import type { Metadata } from "next";
import { WorkflowCard } from "@/components/marketing/WorkflowCard";

export const metadata: Metadata = {
  title: "Govform.com — Workflow",
};

export default function WorkflowPage() {
  return (
    <main className="wrap grid items-center gap-12 py-20 md:grid-cols-2">
      <div>
        <Link href="/" className="text-sm text-brand-blue underline">
          &larr; Back to homepage
        </Link>
        <div className="eyebrow mt-6">Workflow</div>
        <h1 className="max-w-[18ch] text-4xl">
          From submission to automation, without leaving the server.
        </h1>
        <p className="muted max-w-[50ch]">
          Every submission is validated page by page on the server, then moves into whatever
          automation the service needs &mdash; a Notify/email step, an outbound API call, a
          webhook delivery, or a mapping step into another system. Each step is one billed
          automation action, priced transparently, not bundled into a per-seat licence.
        </p>
        <a className="btn btn-secondary mt-6" href="/pricing#addons">
          See automation pricing
        </a>
      </div>
      <div className="max-w-[420px] justify-self-center">
        <WorkflowCard />
      </div>
    </main>
  );
}
