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
export type NavLink = { href: string; label: string; mega?: MegaConfig };

const PRICING_NAV_LINKS: NavLink[] = [
  { href: "/pricing#plans", label: "Pricing" },
  { href: "/pricing#addons", label: "Add-ons" },
  { href: "/pricing#calculator", label: "Calculator" },
  { href: "/pricing#institutional", label: "Institutional" },
  { href: "/pricing#faq", label: "FAQ" },
];

const SIGN_IN_HREF = "https://govforms.uk/builder/libraries";

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
  invertedCta = false,
}: {
  links?: NavLink[];
  cta?: NavLink;
  variant?: "dark" | "light";
  invertedCta?: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const light = variant === "light";
  const navRevealDelay = (index: number) =>
    `${120 + Math.abs(index - (links.length - 1) / 2) * 150}ms`;

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  return (
    <div className="pb-10">
      <div className="relative grid grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className={`${styles.navReveal} justify-self-start font-serif text-xl font-bold tracking-tight ${light ? "text-navy" : "text-white"}`}
          style={{ animationDelay: "570ms" }}
        >
          govform<span className="text-[var(--hero-accent)]">.com</span>
        </Link>

        <nav className="hidden items-center justify-self-center whitespace-nowrap lg:flex">
          {links.map((link, index) =>
            link.mega ? (
              <div
                key={link.href}
                className={`${styles.menuWrap} ml-6`}
                onMouseEnter={() => setOpen(link.href)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  className={`${styles.navReveal} ${styles.trigger} ${light ? styles.triggerLight : ""} text-sm`}
                  style={{ animationDelay: navRevealDelay(index) }}
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
                className={`${styles.navReveal} ml-6 text-sm no-underline ${light ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white"}`}
                style={{ animationDelay: navRevealDelay(index) }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center justify-self-end gap-6 lg:flex">
          <Link
            href={SIGN_IN_HREF}
            className={`${styles.navReveal} text-sm no-underline ${light ? "text-navy/85 hover:text-navy" : "text-white/85 hover:text-white"}`}
            style={{ animationDelay: "570ms" }}
          >
            Sign in
          </Link>
          {cta && (
            <div
              className={styles.navReveal}
              style={{ animationDelay: "720ms" }}
            >
              <Link
                href={cta.href}
                className={`btn-pill-secondary btn-hover-shrink ${styles.navCta} ${invertedCta ? styles.navCtaInverted : ""} h-9 !px-5 text-sm`}
              >
                {cta.label}
              </Link>
            </div>
          )}
        </div>

        <button
          type="button"
          className={`${styles.navReveal} -mr-1.5 flex cursor-pointer flex-col gap-1.5 justify-self-end border-0 bg-transparent p-1.5 lg:hidden`}
          style={{ animationDelay: "165ms" }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`${styles.hamburgerBar} ${light ? styles.hamburgerBarLight : ""}`} />
          <span className={`${styles.hamburgerBar} ${light ? styles.hamburgerBarLight : ""}`} />
          <span className={`${styles.hamburgerBar} ${light ? styles.hamburgerBarLight : ""}`} />
        </button>

        {mobileOpen && (
          <nav className={`${styles.mobilePanel} flex flex-col gap-1 lg:hidden`}>
            {links.map((link) =>
              link.mega ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-navy"
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
                    <div className="flex flex-col gap-0.5 border-l border-navy/15 pb-2 pl-3.5">
                      <div className="pb-1 pt-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-navy/45">
                        {link.mega.gridTitle}
                      </div>
                      {link.mega.gridColumns.flat().map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="py-2 text-sm text-navy/70 no-underline hover:text-navy"
                          onClick={closeAll}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="pb-1 pt-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-navy/45">
                        {link.mega.listTitle}
                      </div>
                      {link.mega.listItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="py-2 text-sm text-navy/70 no-underline hover:text-navy"
                          onClick={closeAll}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        href={link.mega.banner.href}
                        className="mt-2 rounded-lg bg-navy px-3 py-2.5 text-sm font-semibold text-white no-underline"
                        onClick={closeAll}
                      >
                        <span className="block text-[11px] font-normal text-white/65">
                          {link.mega.banner.title}
                        </span>
                        {link.mega.banner.cta}
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2.5 text-sm text-navy/85 no-underline hover:text-navy"
                  onClick={closeAll}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href={SIGN_IN_HREF}
              className="py-2.5 text-sm text-navy/85 no-underline hover:text-navy"
              onClick={closeAll}
            >
              Sign in
            </Link>
            {cta && (
              <Link
                href={cta.href}
                className={`btn-pill-secondary btn-hover-shrink ${styles.navCta} ${invertedCta ? styles.navCtaInverted : ""} mt-3 justify-center !px-6`}
                onClick={closeAll}
              >
                {cta.label}
              </Link>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
