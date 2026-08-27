import Link from "next/link";
import { Header } from "@/components/marketing/Header";
import { MAIN_NAV_LINKS } from "@/components/marketing/nav-links";
import styles from "./content-page.module.css";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <header className={`${styles.pageHero} pt-4`}>
      <div className="wrap">
        <Header links={MAIN_NAV_LINKS} cta={{ href: "/pricing#institutional", label: "Talk to us" }} />

        <div className={`${styles.pageHeroBody} pt-10`}>
          <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{subtitle}</p>

          {(primaryCta || secondaryCta) && (
            <div className={styles.pageHeroButtons}>
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-pill-primary btn-hover-shrink !px-6">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className={`${styles.pillGhost} btn-hover-shrink`}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
