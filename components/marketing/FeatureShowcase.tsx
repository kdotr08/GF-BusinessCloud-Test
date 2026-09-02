"use client";

import { useState } from "react";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import styles from "./feature-showcase.module.css";

export type ShowcaseFeature = {
  title: string;
  body: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
  };
};

function FeatureRow({ features, rowStart }: { features: ShowcaseFeature[]; rowStart: number }) {
  // The document-generation card (06) is the strongest visual anchor for
  // the second row, so that row opens on its third card by default.
  const defaultActive = rowStart === 3 ? 2 : 0;
  const [active, setActive] = useState(defaultActive);
  const interactive = features.length > 1;

  return (
    <div
      className={styles.row}
      data-testid="feature-row"
    >
      {features.map((feature, i) => {
        const expanded = !interactive || active === i;

        return (
          <div
            key={feature.title}
            data-testid="feature-card"
            className={`${styles.card} ${interactive && expanded ? styles.cardActive : ""} ${
              !interactive ? styles.cardSolo : ""
            }`}
            onMouseEnter={() => interactive && setActive(i)}
            onFocus={() => interactive && setActive(i)}
            onClick={() => interactive && setActive(i)}
            onKeyDown={(event) => {
              if (interactive && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                setActive(i);
              }
            }}
            tabIndex={0}
            role="button"
            aria-expanded={expanded}
          >
            <div className={`${styles.cardContent} ${expanded ? styles.cardContentExpanded : ""}`}>
              <div className={styles.cardCopy}>
                <div className={styles.cardNum}>{String(rowStart + i + 1).padStart(2, "0")}</div>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardBody}>{feature.body}</p>
                  {expanded && (
                    <ul className={styles.cardList}>
                      {feature.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {expanded && (
                <div className={styles.cardMedia}>
                  {feature.image ? (
                    <img src={feature.image.src} alt={feature.image.alt} />
                  ) : (
                    <span>Image placeholder</span>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FeatureShowcase({ features }: { features: ShowcaseFeature[] }) {
  const rows: ShowcaseFeature[][] = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }

  return (
    <div className={styles.stack}>
      {rows.map((row, idx) => (
        <ScrollRevealGroup key={idx} rootMargin="0px 0px -6%">
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <FeatureRow features={row} rowStart={idx * 3} />
          </div>
        </ScrollRevealGroup>
      ))}
    </div>
  );
}
