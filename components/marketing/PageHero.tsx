import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import styles from "./content-page.module.css";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  note,
  primaryCta,
  secondaryCta,
  reveal = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  note?: string;
  primaryCta?: {
    label: string;
    href: string;
    variant?: "primary" | "white-icon";
    className?: string;
  };
  secondaryCta?: { label: string; href: string };
  reveal?: boolean;
}) {
  const heroContent = (
    <div className={`${styles.pageHeroBody} subpage-hero-clearance`}>
      <div data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "0ms" }}>
        <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">{eyebrow}</div>
      </div>
      <h1 data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "160ms" }}>{title}</h1>
      <p data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "320ms" }}>{subtitle}</p>
      {note && (
        <p
          data-reveal-item={reveal ? "" : undefined}
          style={{ transitionDelay: "440ms" }}
          className={styles.pageHeroNote}
        >
          {note}
        </p>
      )}

      {(primaryCta || secondaryCta) && (
        <div
          data-reveal-item={reveal ? "" : undefined}
          style={{ transitionDelay: note ? "600ms" : "480ms" }}
          className={styles.pageHeroButtons}
        >
          {primaryCta && (
            <MarketingPillButton
              href={primaryCta.href}
              variant={primaryCta.variant ?? "white-icon"}
              className={`${styles.pageHeroPrimary} ${primaryCta.className ?? ""}`}
            >
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
  );

  return (
    <header className={`bg-dark-glow ${styles.pageHero}`}>
      {reveal ? (
        <ScrollRevealGroup className="wrap">{heroContent}</ScrollRevealGroup>
      ) : (
        <div className="wrap">{heroContent}</div>
      )}
    </header>
  );
}
