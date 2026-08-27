"use client";

import { useEffect, useRef } from "react";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";
import { ScrollRevealGroup } from "./ScrollRevealGroup";

type VisualKind = "server" | "automation" | "accessible" | "secure" | "ai" | "domain";

const FEATURES: [string, string, string, VisualKind][] = [
  [
    "server-side-forms",
    "Server-side by design",
    "Every page is validated and processed on the server, not just in a browser a user, or an attacker, controls.",
    "server",
  ],
  [
    "automation-webhooks",
    "Automation & webhooks",
    "Run integrations mid-journey — outbound API calls, inbound actions, Notify/email steps and mapping, priced per action, not per seat.",
    "automation",
  ],
  [
    "accessible-by-default",
    "Accessible by default",
    "Built on WCAG-conformant components from the first screen, not retrofitted before an audit.",
    "accessible",
  ],
  [
    "malware-scanning",
    "Secure file handling & evidence",
    "Uploads are scanned, stripped of hidden metadata and access-controlled automatically. Produce a verifiable, sealed submission PDF.",
    "secure",
  ],
  [
    "darcy-ai",
    "Darcy, your built-in assistant",
    "Draft questions, improve guidance and get help building services with Govform's integrated AI assistant.",
    "ai",
  ],
  [
    "custom-domains",
    "Custom domains",
    "Point your own domain at a live service, with standard, documented configuration — no professional-services ticket needed.",
    "domain",
  ],
];

// Every visual is a small coded product-mockup, not an illustration —
// same vocabulary as WorkflowCard.tsx (JetBrains Mono badges, navy/
// turquoise accents) so this grid reads as "here's the thing working",
// not decoration. Pure CSS keyframes drive the loops (home.module.css)
// so none of this needs per-card JS state or intervals.
function FeatureVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case "server":
      return (
        <div className={styles.fvServer}>
          <span className={styles.fvChip}>Browser</span>
          <span className={styles.fvLine}>
            <span className={styles.fvDot} />
          </span>
          <span className={`${styles.fvChip} ${styles.fvChipActive}`}>Server</span>
        </div>
      );
    case "automation":
      return (
        <div className={styles.fvFlow}>
          <span className={styles.fvNode}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="currentColor" />
            </svg>
          </span>
          <span className={styles.fvLine}>
            <span className={styles.fvDot} />
          </span>
          <span className={styles.fvNode}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 15 15 9M10 6l1.4-1.4a4 4 0 0 1 5.7 5.7L15.5 12M14 18l-1.4 1.4a4 4 0 0 1-5.7-5.7L8.5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className={styles.fvLine}>
            <span className={styles.fvDot} style={{ animationDelay: "-1.2s" }} />
          </span>
          <span className={styles.fvNode}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      );
    case "accessible":
      return (
        <div className={styles.fvForm}>
          <span className={styles.fvField} />
          <span className={styles.fvField} />
          <span className={styles.fvField} />
          <span className={styles.fvFocusRing} />
        </div>
      );
    case "secure":
      return (
        <div className={styles.fvFile}>
          <div className={styles.fvFileLines}>
            <span className={styles.fvFileLine} />
            <span className={styles.fvFileLine} />
            <span className={styles.fvFileLine} />
          </div>
          <span className={styles.fvScan} />
          <span className={styles.fvSealed}>Sealed &#10003;</span>
        </div>
      );
    case "ai":
      return (
        <div className={styles.fvChat}>
          <span className={styles.fvChatAvatar} />
          <span className={styles.fvChatBubble}>
            <span className={styles.fvTypeText}>Draft a confirmation email&hellip;</span>
          </span>
        </div>
      );
    case "domain":
      return (
        <div className={styles.fvBar}>
          <span className={styles.fvTypeText}>https://apply.yourcouncil.gov.uk</span>
          <span className={styles.fvBarLive}>
            <span className={styles.fvBarLiveDot} />
            Live
          </span>
        </div>
      );
  }
}

export function FeatureGrid() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const sticky = stickyRef.current;
    const grid = gridRef.current;
    if (!pin || !sticky || !grid) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 820px)").matches
    ) {
      return;
    }

    const cards = Array.from(grid.children) as HTMLElement[];
    let travel = 0;
    let rafId = 0;
    let queued = false;

    const apply = () => {
      const scrolled = Math.min(Math.max(-pin.getBoundingClientRect().top, 0), travel);
      const progress = travel > 0 ? scrolled / travel : 1;
      const remaining = 1 - progress;

      cards.forEach((card, index) => {
        const direction = index < 3 ? -1 : 1;
        card.style.transform = `translate3d(${direction * remaining * window.innerWidth}px, 0, 0)`;
        card.style.opacity = `${Math.min(progress * 3, 1)}`;
      });
    };

    // One viewport of vertical scroll maps to one viewport of horizontal
    // travel. The pin's extra height ends at the exact point the cards are
    // centred, so normal document scrolling resumes without an unlock.
    const measure = () => {
      travel = window.innerWidth;
      pin.style.height = `${sticky.offsetHeight + travel}px`;
      apply();
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(() => {
        queued = false;
        apply();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(sticky);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section id="product" className={`bg-panel-alt ${styles.featuresSection}`}>
      <div ref={pinRef} className={styles.featuresPin}>
        <div ref={stickyRef} className={styles.featuresSticky}>
          <ScrollRevealGroup className="wrap">
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <TypingEyebrow className="border-[#00b4d8]/25 bg-[#00b4d8]/10 text-[#00b4d8]">Built for services that matter</TypingEyebrow>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">Government standards without enterprise complexity.</h2>
              <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
                Govform is designed for teams that need more than a basic form builder. Launch quickly
                while retaining the security, accessibility and control expected of production-grade
                digital services.
              </p>
            </div>

            <div ref={gridRef} className={styles.featuresBento}>
              {FEATURES.map(([slug, title, body, visual], i) => (
                <div
                  key={slug}
                  id={slug}
                  className={styles.featureCard}
                  style={{
                    ["--feature-reveal-x" as string]: i < 3 ? "-100vw" : "100vw",
                  }}
                >
                  <div className={styles.featureVisual}>
                    <div className={styles.featureCardGlow} />
                    <div className={styles.featureVisualContent}>
                      <FeatureVisual kind={visual} />
                    </div>
                  </div>
                  <div className={styles.featureBody}>
                    <div className={styles.featureTitle}>{title}</div>
                    <div className={styles.featureDesc}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealGroup>
        </div>
      </div>
    </section>
  );
}
