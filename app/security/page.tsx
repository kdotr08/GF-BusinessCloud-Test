import Link from "next/link";
import type { Metadata } from "next";
import { SecurityGrid } from "@/components/marketing/SecurityGrid";

export const metadata: Metadata = {
  title: "Govform.com — Security & compliance",
};

export default function SecurityPage() {
  return (
    <>
      <div className="wrap pt-16">
        <Link href="/" className="text-sm text-brand-blue underline">
          &larr; Back to homepage
        </Link>
      </div>
      <SecurityGrid />
    </>
  );
}
