import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MarketingPillButton } from "./MarketingPillButton";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

const BUILDER_STEPS = [
  {
    title: "Build",
    body: "Create accessible forms and journeys with reusable pages, validation and conditional logic.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="15" y="10" width="34" height="44" rx="5" />
        <path d="M23 22h18M23 30h11M23 38h15" />
        <path d="M41 43v10M36 48h10" />
      </svg>
    ),
  },
  {
    title: "Connect",
    body: "Link services to your existing systems, APIs and data sources without rebuilding your stack.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="23" width="17" height="18" rx="5" />
        <rect x="39" y="9" width="17" height="18" rx="5" />
        <rect x="39" y="37" width="17" height="18" rx="5" />
        <path d="M25 32h7c5 0 7-4 7-9v-5M32 32c5 0 7 4 7 9v5" />
      </svg>
    ),
  },
  {
    title: "Automate",
    body: "Route submissions, trigger notifications and run repeatable workflows automatically.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M14 18h25a9 9 0 0 1 9 9v2" />
        <path d="m43 24 5 5 5-5" />
        <path d="M50 46H25a9 9 0 0 1-9-9v-2" />
        <path d="m21 40-5-5-5 5" />
        <path d="m34 22-7 12h7l-4 10 11-14h-7l4-8" />
      </svg>
    ),
  },
  {
    title: "Manage",
    body: "Monitor live services, review activity and improve performance from one secure dashboard.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="11" width="48" height="42" rx="6" />
        <path d="M8 21h48M18 17h.1M24 17h.1" />
        <path d="M18 43V33M27 43V28M36 43v-7M45 43V25" />
      </svg>
    ),
  },
];

export function PlatformShowcase() {
  return (
    <section className="bg-panel-alt py-16">
      <ScrollRevealGroup className="wrap">
        <div className={`section-intro section-intro--center ${styles.builderIntro}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="mx-auto border-[#00608e]/25 bg-[#00608e]/10 text-[#00608e]">The builder</TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">The complete service lifecycle in one platform.</h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
            Move through a clear four-stage workflow while Govform.com handles the secure,
            accessible infrastructure underneath.
          </p>
        </div>

        <div className={styles.builderSteps}>
          {BUILDER_STEPS.map((step, index) => (
            <article
              key={step.title}
              data-reveal-item
              style={{ transitionDelay: `${520 + index * 180}ms` }}
              className={styles.builderStep}
            >
              <div className={styles.builderStepMarker}>{String(index + 1).padStart(2, "0")}</div>
              <div className={styles.builderStepBody}>
                <div className={styles.builderStepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal-item style={{ transitionDelay: "1280ms" }} className={styles.builderCta}>
          <MarketingPillButton
            href="/pricing#plans"
            className={`${styles.pillSolidBlue} ${styles.pillGradientHoverSweep}`}
          >
            Start building free
          </MarketingPillButton>
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
