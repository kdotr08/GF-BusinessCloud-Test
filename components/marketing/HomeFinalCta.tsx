import shared from "./pricing.module.css";
import styles from "./home.module.css";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MarketingPillButton } from "./MarketingPillButton";
import { TypingEyebrow } from "./TypingEyebrow";

type FinalCtaLink = {
  label: string;
  href: string;
};

export function HomeFinalCta({
  eyebrow = "Ready when you are",
  title = "Build your next digital service with confidence.",
  body = "Start building for free, or talk to our team about delivering a more complex service.",
  primaryCta = { label: "Start building free", href: "/pricing#plans" },
  secondaryCta = { label: "Talk to us", href: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryCta?: FinalCtaLink;
  secondaryCta?: FinalCtaLink;
} = {}) {
  return (
    <section id="contact" className={shared.homeFinalCtaSection}>
      <ScrollRevealGroup className={shared.homeFinalCtaOuter}>
        <div className={`${shared.finalCta} ${shared.homeFinalCtaCard}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-white/45 bg-white/[0.08] text-white">
              {eyebrow}
            </TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "170ms" }} className="section-heading text-white">{title}</h2>
          <p data-reveal-item style={{ transitionDelay: "340ms" }} className="mx-auto mb-6 max-w-[64ch] text-pretty text-white/75">
            {body}
          </p>
          <div className={shared.finalCtaButtons}>
            <div data-reveal-item style={{ transitionDelay: "520ms" }}>
              <MarketingPillButton
                href={primaryCta.href}
                variant="white-icon"
                className={styles.pillNavyGradientHover}
              >
                {primaryCta.label}
              </MarketingPillButton>
            </div>
            <div data-reveal-item style={{ transitionDelay: "690ms" }}>
              <MarketingPillButton
                href={secondaryCta.href}
                variant="dark-secondary"
                className={styles.pillWhiteSecondary}
              >
                {secondaryCta.label}
              </MarketingPillButton>
            </div>
          </div>
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
