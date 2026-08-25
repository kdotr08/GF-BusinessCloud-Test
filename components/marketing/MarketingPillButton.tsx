import type { ReactNode } from "react";
import styles from "./home.module.css";

export function MarketingPillButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark-secondary" | "white-icon";
  className?: string;
}) {
  if (variant === "secondary" || variant === "dark-secondary") {
    return (
      <a
        href={href}
        className={`btn-pill-secondary btn-hover-shrink ${
          variant === "dark-secondary" ? styles.darkPillSecondary : styles.heroSecondaryCta
        } ${className}`}
      >
        {children}
      </a>
    );
  }

  // "white-icon" shares the label+icon-badge markup with "primary"
  // (styles.pillWhiteIcon gives it a white resting fill/navy text instead
  // of the gradient, reusing .heroPrimaryCta's hover-sweep and icon-rotate
  // selectors — see home.module.css) for a "Talk to us"-style CTA on a
  // colored card where a second gradient/solid pill would compete.
  return (
    <a
      href={href}
      className={`btn-pill-primary ${variant === "white-icon" ? styles.pillWhiteIcon : styles.heroPrimaryCta} ${className}`}
    >
      <span className={styles.heroCtaLabel}>{children}</span>
      <span className={`btn-pill-icon ${styles.heroCtaIcon}`}>
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M4 10L10 4M10 4H5M10 4V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
