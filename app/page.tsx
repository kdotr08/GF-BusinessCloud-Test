import Link from "next/link";

export default function HomePage() {
  return (
    <main className="wrap flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <div className="eyebrow">Govform.com</div>
      <h1 className="text-4xl">Homepage &mdash; coming soon</h1>
      <p className="muted max-w-[46ch]">
        This is a placeholder. Start with the{" "}
        <Link href="/pricing" className="text-brand-blue underline">
          Business Cloud pricing page
        </Link>{" "}
        while the rest of the site is built out.
      </p>
    </main>
  );
}
