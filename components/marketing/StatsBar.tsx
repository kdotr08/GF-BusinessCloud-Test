"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";
import { CountUpStat } from "./CountUpStat";

const SECTORS = ["government", "healthcare", "education", "research"];

// Icons start staggering shortly after .bentoCardContent (--trust-reveal-
// delay: 420ms) begins its own fade-in — overlapping its tail rather than
// waiting for it to fully settle (1120ms) — then cascade in SECTORS order
// (government first, research last). See the note by .sectorIcon in
// home.module.css for the per-icon transition duration.
const ICON_STAGGER_START_MS = 550;
const ICON_STAGGER_STEP_MS = 130;

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.trustSection} py-16`}
      data-visible={visible || undefined}
    >
      <div className="wrap">
        <div className="mb-8 max-w-[62ch]">
          <TypingEyebrow className="border-white/25 bg-white/10 text-[var(--hero-accent)]">
            Proven in high-stakes services
          </TypingEyebrow>
          <h2 className={`text-[30px] text-white ${styles.trustReveal} ${styles.trustRevealHeading}`}>
            Trusted where security, accessibility and reliability matter.
          </h2>
          <p className={`text-white/75 ${styles.trustReveal} ${styles.trustRevealBody}`}>
            Govform.com is built on experience delivering critical digital services for
            government and regulated organisations. The same standards, controls and
            infrastructure are now available to organisations of every size.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          <div
            className={`${styles.bentoCard} ${styles.bentoCardHero} ${styles.trustReveal} ${styles.trustRevealCard1}`}
          >
            <CountUpStat value="12M+" className={styles.bentoNumHero} />
            <div className={styles.bentoLabelHero}>Secure submissions processed</div>
          </div>

          <div
            className={`${styles.bentoCard} ${styles.bentoCardContent} ${styles.trustReveal} ${styles.trustRevealCard2}`}
          >
            <div>
              <CountUpStat value="40+" className={styles.bentoNum} />
              <div className={styles.bentoLabel}>Organisations across different sectors</div>
            </div>
            <div>
              <div className={styles.sectorIcons}>
                {SECTORS.map((sector, i) => (
                  <img
                    key={sector}
                    src={`/icons/sectors/${sector}.svg`}
                    alt=""
                    className={styles.sectorIcon}
                    style={{
                      ["--icon-delay" as string]: `${ICON_STAGGER_START_MS + i * ICON_STAGGER_STEP_MS}ms`,
                    }}
                  />
                ))}
              </div>
              <div className={styles.bentoDesc}>
                Government, healthcare, education, research and regulated services
              </div>
            </div>
          </div>

          <div
            className={`${styles.bentoCard} ${styles.bentoCardLight} ${styles.trustReveal} ${styles.trustRevealCard3}`}
          >
            <div className={styles.bentoCardLightContent}>
              <CountUpStat value="99.98%" className={styles.bentoNum} />
              <div className={styles.bentoLabel}>Platform uptime</div>
            </div>
            <span className={styles.statusPulseZone} aria-hidden="true">
              <span className={styles.statusPulseRing} />
              <span className={styles.statusPulseRing} />
              <span className={styles.statusPulseRing} />
              <span className={styles.statusPulseDot} />
            </span>
          </div>

          <div
            className={`${styles.bentoCard} ${styles.bentoCardDark} ${styles.trustReveal} ${styles.trustRevealCard4}`}
          >
            <div className={styles.bentoLabelDark}>
              Certified information
              <br />
              security management
            </div>
            <div className={styles.isoShield}>
              <svg viewBox="0 0 80 76" aria-hidden="true">
                <defs>
                  <clipPath id="iso-shield-clip">
                    <path d="M40 2 C50 2 64 6 74 10 C74 40 64 60 40 74 C16 60 6 40 6 10 C16 6 30 2 40 2 Z" />
                  </clipPath>
                  <linearGradient id="iso-shield-shine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#fff" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 2 C50 2 64 6 74 10 C74 40 64 60 40 74 C16 60 6 40 6 10 C16 6 30 2 40 2 Z"
                  fill="var(--navy)"
                />
                <g clipPath="url(#iso-shield-clip)">
                  <g transform="rotate(24 40 38)">
                    <rect
                      className={styles.isoShieldShine}
                      x="-80"
                      y="-30"
                      width="38"
                      height="140"
                      fill="url(#iso-shield-shine)"
                    />
                  </g>
                </g>
              </svg>
              <span className={styles.isoShieldText}>
                ISO
                <br />
                27001
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
