import Link from "next/link";

const NAV_LINKS = [
  { href: "/pricing#plans", label: "Pricing" },
  { href: "/pricing#addons", label: "Add-ons" },
  { href: "/pricing#calculator", label: "Calculator" },
  { href: "/pricing#institutional", label: "Institutional" },
  { href: "/pricing#faq", label: "FAQ" },
];

export function Header() {
  return (
    <div className="flex items-center justify-between pb-10">
      <Link href="/" className="font-serif text-xl font-bold tracking-tight text-white">
        govform<span className="text-[var(--hero-accent)]">.com</span>
      </Link>
      <nav className="flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="ml-6 text-sm text-white/85 no-underline hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
