"use client";

import { useEffect, useRef, useState } from "react";
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
    "Uploads are scanned, stripped of hidden metadata and access-controlled automatically. Produce a verifiable, sealed submission PDF carrying Govform.com's verified organisation seal, on request.",
    "secure",
  ],
  [
    "darcy-ai",
    "Darcy, built in",
    "An AI assistant for drafting content, answering questions and building forms — included on every plan, with clear limits.",
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
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10%", threshold: 0.15 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className="bg-panel-alt py-16">
      <ScrollRevealGroup className="wrap">
        <div className="section-intro">
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-[#00b4d8]/25 bg-[#00b4d8]/10 text-[#00b4d8]">How it&apos;s different</TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">Government standards without enterprise complexity.</h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
            Get the security, accessibility and governance expected of critical digital services
            without the cost and complexity of traditional enterprise transformation projects.
          </p>
        </div>

        <div ref={gridRef} className={styles.featuresBento} data-visible={visible || undefined}>
          {FEATURES.map(([slug, title, body, visual], i) => (
            <div
              key={slug}
              id={slug}
              className={styles.featureCard}
              style={{ ["--feature-reveal-delay" as string]: `${500 + i * 150}ms` }}
            >
              <div className={`${styles.featureCardGlow} ${styles.featureCardGlowA}`} />
              <div className={`${styles.featureCardGlow} ${styles.featureCardGlowB}`} />
              <div className={styles.featureCardBottomFade} />
              <div className={styles.featureVisual}>
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
    </section>
  );
}
