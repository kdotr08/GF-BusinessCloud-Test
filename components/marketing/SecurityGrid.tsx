import styles from "./home.module.css";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { TypingEyebrow } from "./TypingEyebrow";

const SECURITY: [string, string, string, string?][] = [
  ["ISO 27001", "Information security", "Independently certified information security management, audited annually.", "/logos/certifications/ISO-27001.png"],
  ["CYBER ESSENTIALS+", "UK government baseline", "Meets the technical controls expected of suppliers to UK public sector bodies.", "/logos/certifications/cyberessentials_certification-mark-plus_colour.png"],
  ["SOC 2 TYPE II", "Operational assurance", "Controls verified over time, not just at a single point-in-time audit.", "/logos/certifications/soc2.png"],
  ["GDPR", "Data protection", "Data residency controls and processing agreements built for regulated buyers.", "/logos/certifications/gdpr.webp"],
  ["WCAG 2.2 AA", "Accessibility", "Every form and workflow screen tested against current accessibility standards.", "/logos/certifications/wcag2.2-aa.svg"],
  ["AES-256", "Encryption", "Government-grade encryption at rest and in transit, with managed key rotation.", "/logos/certifications/aes256-mark.png"],
];

export function SecurityGrid() {
  return (
    <section id="security" className="bg-panel-alt py-16">
      <ScrollRevealGroup className="wrap">
        <div className="section-intro">
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
              Security &amp; compliance
            </TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">Held to the same standard as the services you run.</h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
            Govform.com is designed for organisations handling sensitive information and
            operating under demanding regulatory, accessibility and governance requirements.
          </p>
        </div>
        <div className={styles.secGrid}>
          {SECURITY.map(([badge, title, body, logo], index) => (
            <div
              key={title}
              data-reveal-item
              style={{ transitionDelay: `${500 + index * 150}ms` }}
              className={styles.secCard}
            >
              {logo ? (
                <span className={styles.secLogo}>
                  <img src={logo} alt={badge} />
                </span>
              ) : (
                <span className={styles.secBadge}>{badge}</span>
              )}
              <div>
                <div className={styles.secTitle}>{title}</div>
                <div className={styles.secDesc}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
