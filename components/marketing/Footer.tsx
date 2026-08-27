import Link from "next/link";
import { ScrollRevealGroup } from "./ScrollRevealGroup";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Workflow", href: "/workflow" },
      { label: "Security & compliance", href: "/security" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Business Cloud plans", href: "/pricing#plans" },
      { label: "Add-ons", href: "/pricing#addons" },
      { label: "Pricing calculator", href: "/pricing#calculator" },
      { label: "Business Estate", href: "/pricing#estate" },
      { label: "Institutional & Central Government", href: "/pricing#institutional" },
      { label: "Go-live reviews", href: "/pricing#go-live" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Templates & guides", href: "/resources" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Tutorials", href: "/resources/tutorials" },
      { label: "Book a demo", href: "/demo" },
      { label: "Customer successes", href: "/successes" },
      { label: "Analytics", href: "/analytics" },
      { label: "Pricing FAQ", href: "/pricing#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact us", href: "/#contact" },
      { label: "Support centre", href: "/support" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark-glow rounded-t-[24px] pt-16 pb-8 text-white">
      <ScrollRevealGroup className="wrap">
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link data-reveal-item style={{ transitionDelay: "0ms" }} href="/" className="inline-block font-serif text-xl font-bold tracking-tight text-white">
              govform<span className="text-[var(--hero-accent)]">.com</span>
            </Link>
            <p data-reveal-item style={{ transitionDelay: "160ms" }} className="mt-3 max-w-[36ch] text-[13.5px] text-white/60">
              Server-side infrastructure for accessible, secure, production-grade digital
              service forms.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:max-w-[640px] md:grid-cols-4">
            {COLUMNS.map((column, index) => (
              <div key={column.title} data-reveal-item style={{ transitionDelay: `${320 + index * 150}ms` }}>
                <div className="mb-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-white/45">
                  {column.title}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-white/75 no-underline hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 text-[13px] text-white/50">
          <div data-reveal-item style={{ transitionDelay: "950ms" }}>&copy; 2026 Govform.com</div>
          <div data-reveal-item style={{ transitionDelay: "1100ms" }}>Business Cloud &middot; Business Estate &middot; Institutional &amp; Central Government</div>
        </div>
      </ScrollRevealGroup>
    </footer>
  );
}
