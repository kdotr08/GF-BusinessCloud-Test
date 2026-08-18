"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

type SimpleLink = { label: string; href: string };
type MegaConfig = {
  gridTitle: string;
  gridColumns: SimpleLink[][];
  listTitle: string;
  listItems: SimpleLink[];
  banner: { title: string; cta: string; href: string };
};
type NavLink = { href: string; label: string; mega?: MegaConfig };

const PRICING_NAV_LINKS: NavLink[] = [
  { href: "/pricing#plans", label: "Pricing" },
  { href: "/pricing#addons", label: "Add-ons" },
  { href: "/pricing#calculator", label: "Calculator" },
  { href: "/pricing#institutional", label: "Institutional" },
  { href: "/pricing#faq", label: "FAQ" },
];

function MegaMenu({ config }: { config: MegaConfig }) {
  return (
    <div className={styles.panel}>
      <div className={styles.megaLayout}>
        <div className={styles.gridArea}>
          <div className={styles.sectionTitle}>{config.gridTitle}</div>
          <div className={styles.iconGrid}>
            {config.gridColumns.map((column, i) => (
              <div key={i} className={styles.gridCol}>
                {column.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.gridItem}>
                    <span className={styles.itemIcon}>{item.label.slice(0, 2).toUpperCase()}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.listArea}>
          <div className={styles.sectionTitleMuted}>{config.listTitle}</div>
          {config.listItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.listLink}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.banner}>
        <span>{config.banner.title}</span>
        <Link href={config.banner.href} className={styles.bannerCta}>
          {config.banner.cta}
        </Link>
      </div>
    </div>
  );
}

export function Header({
  links = PRICING_NAV_LINKS,
  cta,
  variant = "dark",
}: {
  links?: NavLink[];
  cta?: NavLink;
  variant?: "dark" | "light";
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const light = variant === "light";

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  return (
    <div className="pb-10">
      <div className="relative grid grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className={`justify-self-start font-serif text-xl font-bold tracking-tight ${light ? "text-navy" : "text-white"}`}
        >
          govform<span className="text-[var(--hero-accent)]">.com</span>
        </Link>

        <nav className="hidden items-center justify-self-center whitespace-nowrap lg:flex">
          {links.map((link) =>
            link.mega ? (
              <div
                key={link.href}
                className={`${styles.menuWrap} ml-6`}
                onMouseEnter={() => setOpen(link.href)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  className={`${styles.trigger} ${light ? styles.triggerLight : ""} text-sm`}
                  aria-expanded={open === link.href}
                  onClick={() => setOpen(open === link.href ? null : link.href)}
                >
                  {link.label}
                  <svg
                    className={`${styles.chevron} ${open === link.href ? styles.chevronOpen : ""}`}
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {open === link.href && <MegaMenu config={link.mega} />}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`ml-6 text-sm no-underline ${light ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {cta && (
          <Link
            href={cta.href}
            className="btn-pill-primary hidden h-9 justify-self-end !px-5 text-sm lg:inline-flex"
          >
            {cta.label}
          </Link>
        )}

        <button
          type="button"
          className="-mr-1.5 flex cursor-pointer flex-col gap-1.5 justify-self-end border-0 bg-transparent p-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`${styles.hamburgerBar} ${light ? styles.hamburgerBarLight : ""}`} />
          <span className={`${styles.hamburgerBar} ${light ? styles.hamburgerBarLight : ""}`} />
          <span className={`${styles.hamburgerBar} ${light ? styles.hamburgerBarLight : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 pt-5 lg:hidden">
          {links.map((link) =>
            link.mega ? (
              <div key={link.href}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between py-2.5 text-sm font-semibold ${light ? "text-navy" : "text-white"}`}
                  aria-expanded={open === link.href}
                  onClick={() => setOpen(open === link.href ? null : link.href)}
                >
                  {link.label}
                  <svg
                    className={`${styles.chevron} ${open === link.href ? styles.chevronOpen : ""}`}
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {open === link.href && (
                  <div
                    className={`flex flex-col gap-0.5 border-l pb-2 pl-3.5 ${light ? "border-navy/15" : "border-white/15"}`}
                  >
                    {link.mega.listItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`py-2 text-sm no-underline ${light ? "text-navy/70 hover:text-navy" : "text-white/70 hover:text-white"}`}
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 text-sm no-underline ${light ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white"}`}
                onClick={closeAll}
              >
                {link.label}
              </Link>
            )
          )}
          {cta && (
            <Link
              href={cta.href}
              className="btn-pill-primary mt-3 justify-center !px-6"
              onClick={closeAll}
            >
              {cta.label}
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
