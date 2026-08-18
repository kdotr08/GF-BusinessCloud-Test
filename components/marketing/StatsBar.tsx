import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

const STATS: [string, string, string?][] = [
  ["12M+", "Secure submissions processed"],
  ["99.98%", "Platform uptime"],
  [
    "40+",
    "organisations across different sectors",
    "Government, healthcare, education, research and regulated services",
  ],
  ["ISO 27001", "Certified information security management"],
];

export function StatsBar() {
  return (
    <section className="border-y border-line bg-white py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[62ch]">
          <TypingEyebrow className="border-seafoam/25 bg-seafoam/10 text-seafoam">
            Proven in high-stakes services
          </TypingEyebrow>
          <h2 className="text-[30px]">
            Trusted where security, accessibility and reliability matter.
          </h2>
          <p className="muted">
            Govform.com is built on experience delivering critical digital services for
            government and regulated organisations. The same standards, controls and
            infrastructure are now available to every team.
          </p>
        </div>
        <div className={styles.stats}>
          {STATS.map(([num, label, desc], i) => (
            <div key={label}>
              <div className={i === STATS.length - 1 ? styles.statNumFeatured : styles.statNum}>
                {num}
              </div>
              <div className={styles.statLabel}>{label}</div>
              {desc && <div className={styles.statDesc}>{desc}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
