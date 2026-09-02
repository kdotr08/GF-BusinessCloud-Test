"use client";

import type { MouseEvent, ReactNode } from "react";
import styles from "./home.module.css";

export function MarketingPillButton({
  href,
  children,
  variant = "primary",
  className = "",
  scrollDurationMs,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark-secondary" | "white-icon";
  className?: string;
  scrollDurationMs?: number;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      !scrollDurationMs ||
      !href.startsWith("#") ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      target.scrollIntoView();
      window.history.pushState(null, "", href);
      return;
    }

    const start = window.scrollY;
    const destination = target.getBoundingClientRect().top + start;
    const distance = destination - start;
    const startedAt = performance.now();
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;

    document.documentElement.style.scrollBehavior = "auto";

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / scrollDurationMs, 1);
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
        return;
      }

      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      window.history.pushState(null, "", href);
    };

    window.requestAnimationFrame(animate);
  };

  if (variant === "secondary" || variant === "dark-secondary") {
    return (
      <a
        href={href}
        onClick={handleClick}
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
      onClick={handleClick}
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
