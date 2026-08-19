"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";
import { CountUpStat } from "./CountUpStat";

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
                <img src="/icons/sectors/government.svg" alt="" className={styles.sectorIcon} />
                <img src="/icons/sectors/healthcare.svg" alt="" className={styles.sectorIcon} />
                <img src="/icons/sectors/education.svg" alt="" className={styles.sectorIcon} />
                <img src="/icons/sectors/research.svg" alt="" className={styles.sectorIcon} />
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
            <div className={styles.bentoNumDark}>ISO 27001</div>
          </div>
        </div>
      </div>
    </section>
  );
}
