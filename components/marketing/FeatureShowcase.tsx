"use client";

import { useId, useState } from "react";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import styles from "./feature-showcase.module.css";

export type ShowcaseFeature = {
  title: string;
  body: string;
  highlights: string[];
  capabilities: string[];
  note?: string;
  image?: {
    src: string;
    alt: string;
  };
};

function FeatureRow({
  features,
  rowStart,
  defaultActive,
}: {
  features: ShowcaseFeature[];
  rowStart: number;
  defaultActive: number;
}) {
  const [active, setActive] = useState(defaultActive);
  const [openCapabilities, setOpenCapabilities] = useState<Set<number>>(() => new Set());
  const rowId = useId();

  const toggleCapabilities = (index: number) => {
    setActive(index);
    setOpenCapabilities((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className={styles.row} data-testid="feature-row">
      <div className={styles.cardTrack}>
        {features.map((feature, index) => {
          const expanded = active === index;
          const capabilityOpen = openCapabilities.has(index);
          const globalIndex = rowStart + index;
          const capabilityId = `${rowId}-capabilities-${index}`;

          return (
            <article
              key={feature.title}
              data-testid="feature-card"
              className={`${styles.card} ${expanded ? styles.cardActive : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <div className={`${styles.cardContent} ${expanded ? styles.cardContentExpanded : ""}`}>
                <div className={styles.cardCopy}>
                  <div className={styles.cardNum}>{String(globalIndex + 1).padStart(2, "0")}</div>
                  <div className={styles.cardText}>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <p className={styles.cardBody}>{feature.body}</p>

                    {expanded && (
                      <ul className={styles.highlightList} aria-label="Feature highlights">
                        {feature.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}

                    <button
                      type="button"
                      className={styles.expandButton}
                      aria-expanded={capabilityOpen}
                      aria-controls={capabilityId}
                      onClick={() => toggleCapabilities(index)}
                    >
                      <span>{capabilityOpen ? "Hide capabilities" : "View capabilities"}</span>
                      <span className={styles.expandIcon} aria-hidden="true">+</span>
                    </button>
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
            </article>
          );
        })}
      </div>

      <div className={styles.capabilityPanels}>
        {features.map((feature, index) => {
          const globalIndex = rowStart + index;
          const capabilityOpen = openCapabilities.has(index);
          const capabilityId = `${rowId}-capabilities-${index}`;

          return (
            <div
              key={feature.title}
              id={capabilityId}
              className={`${styles.capabilityReveal} ${capabilityOpen ? styles.capabilityRevealOpen : ""}`}
              aria-hidden={!capabilityOpen}
            >
              <div className={styles.capabilityRevealInner}>
                <div className={styles.capabilityPanel}>
                  <div className={styles.capabilityPanelHeader}>
                    <span>{String(globalIndex + 1).padStart(2, "0")}</span>
                    <h4>{feature.title}: complete capabilities</h4>
                  </div>
                  <ul className={styles.capabilityList}>
                    {feature.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  {feature.note && <p className={styles.complianceNote}>{feature.note}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FeatureShowcase({ features }: { features: ShowcaseFeature[] }) {
  const rows: ShowcaseFeature[][] = [];
  for (let index = 0; index < features.length; index += 3) {
    rows.push(features.slice(index, index + 3));
  }

  const rowDefaults = [0, 2, 0, 2];

  return (
    <div className={styles.stack}>
      {rows.map((row, rowIndex) => (
        <ScrollRevealGroup key={rowIndex} rootMargin="0px 0px -6%">
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <FeatureRow
              features={row}
              rowStart={rowIndex * 3}
              defaultActive={Math.min(rowDefaults[rowIndex] ?? 0, row.length - 1)}
            />
          </div>
        </ScrollRevealGroup>
      ))}
    </div>
  );
}
