import { MarketingPillButton } from "./MarketingPillButton";
import styles from "./content-page.module.css";

export function ClosingCta({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.closingCta}>
          <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className={styles.closingCtaButtons}>
            <MarketingPillButton href={primaryCta.href}>
              {primaryCta.label}
            </MarketingPillButton>
            <MarketingPillButton href={secondaryCta.href} variant="dark-secondary">
              {secondaryCta.label}
            </MarketingPillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
