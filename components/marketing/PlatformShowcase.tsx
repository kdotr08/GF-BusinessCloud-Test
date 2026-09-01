"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MediaPlaceholder } from "./MediaPlaceholder";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

type StepTabStyle = CSSProperties & {
  "--tab-fill": string;
  "--tab-text": string;
};

// Reuses the exact sector-icon circle colors from the "Proven in
// high-stakes services" bento (see /icons/sectors/*.svg) so the active
// tab's solid fill reads as part of the same color system rather than
// inventing new step colors. Build/Connect are light enough that white
// label text loses contrast against them, so those two use dark navy
// text instead — Automate/Manage are dark enough for white to stay
// legible.
const BUILDER_STEPS = [
  {
    title: "Build",
    body: "Create accessible forms and journeys with reusable pages, validation and conditional logic.",
    color: "#40e0d0",
    textColor: "var(--navy)",
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
    color: "#00b4d8",
    textColor: "var(--navy)",
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
    color: "#003366",
    textColor: "#fff",
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
    color: "#001f3f",
    textColor: "#fff",
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
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-advance shouldn't start counting down while the section is still
  // off-screen — otherwise a user scrolling normally could arrive to find
  // it already several steps in.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Keyed on activeStep (not a bare interval) so a manual tab click
    // restarts the countdown from zero, giving the clicked tab a full
    // interval before auto-advance resumes.
    const id = setTimeout(() => {
      setActiveStep((current) => (current + 1) % BUILDER_STEPS.length);
    }, STEP_INTERVAL_MS);
    return () => clearTimeout(id);
  }, [activeStep, inView]);

  const active = BUILDER_STEPS[activeStep];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`bg-panel-alt ${styles.platformShowcaseSection}`}
    >
      <ScrollRevealGroup className={`wrap ${styles.platformShowcaseLayout}`}>
        <div className={`section-intro section-intro--center ${styles.builderIntro}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="mx-auto border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">How it works</TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
            The complete service lifecycle in one platform.
          </h2>
        </div>

        <div data-reveal-item style={{ transitionDelay: "480ms" }} className={styles.tourCard}>
          {/* Below md (real phones), height is capped small via a vw-based
              clamp — on a narrow portrait screen, tying height to vh would
              make the box taller than it is wide, which looks wrong for a
              16:9 video area. From md up (tablets, split-screen desktop
              windows, full-width desktop alike) height is vh-driven
              instead, with no further breakpoint jump — so narrowing the
              browser window (e.g. side-by-side with another window) keeps
              the box proportional to the viewport's height instead of
              shrinking just because it got less wide. */}
          <MediaPlaceholder aspectClass="h-[clamp(210px,24vw,260px)] md:h-[clamp(260px,46vh,760px)]" />

          <div data-reveal-item style={{ transitionDelay: "700ms" }} className={styles.stepTabs}>
            {BUILDER_STEPS.map((step, index) => (
              <button
                key={step.title}
                type="button"
                aria-pressed={index === activeStep}
                data-active={index === activeStep || undefined}
                // Steps already passed through stay filled in their own
                // color instead of reverting to the neutral pill — reads
                // as each step being filled out in turn, not just one tab
                // being highlighted at a time. Wrapping back to Build
                // resets the rest to unfilled since only index 0 then
                // satisfies this.
                data-filled={index <= activeStep || undefined}
                className={styles.stepTab}
                style={{ "--tab-fill": step.color, "--tab-text": step.textColor } as StepTabStyle}
                onClick={() => setActiveStep(index)}
              >
                <span className={styles.stepTabLabel}>{step.title}</span>
                <span className={styles.stepTabMarker}>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>

          {/* Reveal-item wrapper is separate from .stepDetail itself —
              .stepDetail remounts (via the key below) and replays its own
              short stepDetailFade keyframe every time the active step
              changes, which would collide with the group's slower
              scroll-triggered opacity/transform transition if both sat on
              the same element. */}
          <div data-reveal-item style={{ transitionDelay: "900ms" }}>
            <div className={styles.stepDetail} key={active.title}>
              <div className={styles.builderStepIcon} style={{ backgroundColor: active.color }}>
                {active.icon}
              </div>
              <div>
                <h3>{active.title}</h3>
                <p>{active.body}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
