import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
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
    <header className={`bg-dark-glow ${styles.pageHero}`}>
      <div className="wrap">
        <div className={`${styles.pageHeroBody} subpage-hero-clearance`}>
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
