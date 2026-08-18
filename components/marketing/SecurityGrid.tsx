import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

const SECURITY: [string, string, string][] = [
  ["ISO 27001", "Information security", "Independently certified information security management, audited annually."],
  ["CYBER ESSENTIALS+", "UK government baseline", "Meets the technical controls expected of suppliers to UK public sector bodies."],
  ["SOC 2 TYPE II", "Operational assurance", "Controls verified over time, not just at a single point-in-time audit."],
  ["GDPR", "Data protection", "Data residency controls and processing agreements built for regulated buyers."],
  ["WCAG 2.2 AA", "Accessibility", "Every form and workflow screen tested against current accessibility standards."],
  ["AES-256", "Encryption", "Government-grade encryption at rest and in transit, with managed key rotation."],
];

export function SecurityGrid() {
  return (
    <section id="security" className="bg-panel py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <TypingEyebrow className="border-seafoam/25 bg-seafoam/10 text-seafoam">
            Security &amp; compliance
          </TypingEyebrow>
          <h2 className="text-[30px]">Held to the same standard as the services you run.</h2>
        </div>
        <div className={styles.secGrid}>
          {SECURITY.map(([badge, title, body]) => (
            <div key={title} className={styles.secCard}>
              <span className={styles.secBadge}>{badge}</span>
              <div>
                <div className={styles.secTitle}>{title}</div>
                <div className={styles.secDesc}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
