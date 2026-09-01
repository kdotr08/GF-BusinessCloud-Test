import { Header } from "@/components/marketing/Header";
import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
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
    <header className={`bg-dark-glow ${styles.pageHero} pt-4`}>
      <div className="wrap">
        <Header links={MAIN_NAV_LINKS} cta={{ href: "/pricing#institutional", label: "Talk to us" }} />

        <div className={`${styles.pageHeroBody} pt-10`}>
          <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{subtitle}</p>

          {(primaryCta || secondaryCta) && (
            <div className={styles.pageHeroButtons}>
              {primaryCta && (
                <MarketingPillButton href={primaryCta.href}>
                  {primaryCta.label}
                </MarketingPillButton>
              )}
              {secondaryCta && (
                <MarketingPillButton href={secondaryCta.href} variant="dark-secondary">
                  {secondaryCta.label}
                </MarketingPillButton>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
