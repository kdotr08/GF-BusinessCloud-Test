"use client";

import { useEffect, useState } from "react";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MediaPlaceholder } from "./MediaPlaceholder";
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

const STEP_INTERVAL_MS = 3200;

export function PlatformShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActiveStep((current) => (current + 1) % BUILDER_STEPS.length);
    }, STEP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const active = BUILDER_STEPS[activeStep];

  return (
    <section className="bg-panel-alt py-16">
      <ScrollRevealGroup className="wrap">
        <div className={`section-intro section-intro--center ${styles.builderIntro}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="mx-auto border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">How it works</TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
            The complete service lifecycle in one platform.
          </h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
            Watch how teams build accessible journeys, connect existing systems, automate
            workflows and manage live services, all without rebuilding their existing systems.
          </p>
        </div>

        <div data-reveal-item style={{ transitionDelay: "480ms" }} className={styles.tourCard}>
          <MediaPlaceholder aspectClass="aspect-video" />

          <div className={styles.stepTabs}>
            {BUILDER_STEPS.map((step, index) => (
              <button
                key={step.title}
                type="button"
                aria-pressed={index === activeStep}
                data-active={index === activeStep || undefined}
                className={styles.stepTab}
                onClick={() => setActiveStep(index)}
              >
                <span className={styles.stepTabMarker}>{String(index + 1).padStart(2, "0")}</span>
                {step.title}
              </button>
            ))}
          </div>

          <div className={styles.stepDetail} key={active.title}>
            <div className={styles.builderStepIcon}>{active.icon}</div>
            <div>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
            </div>
          </div>
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
