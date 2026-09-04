import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import styles from "./content-page.module.css";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  supportingText,
  note,
  primaryCta,
  secondaryCta,
  centered = false,
  reveal = false,
  revealMotion = "scale",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  supportingText?: string;
  note?: string;
  primaryCta?: {
    label: string;
    href: string;
    variant?: "primary" | "white-icon";
    className?: string;
  };
  secondaryCta?: { label: string; href: string; scrollDurationMs?: number };
  centered?: boolean;
  reveal?: boolean;
  revealMotion?: "scale" | "rise";
}) {
  const heroContent = (
    <div
      className={`${styles.pageHeroBody} ${centered ? styles.pageHeroBodyCentered : ""} subpage-hero-clearance`}
    >
      <div data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "0ms" }}>
        <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">{eyebrow}</div>
      </div>
      <h1 data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "160ms" }}>{title}</h1>
      <p data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "320ms" }}>{subtitle}</p>
      {supportingText && (
        <p data-reveal-item={reveal ? "" : undefined} style={{ transitionDelay: "440ms" }}>
          {supportingText}
        </p>
      )}
      {note && (
        <p
          data-reveal-item={reveal ? "" : undefined}
          style={{ transitionDelay: supportingText ? "560ms" : "440ms" }}
          className={styles.pageHeroNote}
        >
          {note}
        </p>
      )}

      {(primaryCta || secondaryCta) && (
        <div
          data-reveal-item={reveal ? "" : undefined}
          style={{ transitionDelay: note || supportingText ? "680ms" : "480ms" }}
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
            <MarketingPillButton
              href={secondaryCta.href}
              variant="dark-secondary"
              scrollDurationMs={secondaryCta.scrollDurationMs}
            >
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
        <ScrollRevealGroup className="wrap" motion={revealMotion}>
          {heroContent}
        </ScrollRevealGroup>
      ) : (
        <div className="wrap">{heroContent}</div>
      )}
    </header>
  );
}
