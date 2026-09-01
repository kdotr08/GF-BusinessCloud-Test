import shared from "./pricing.module.css";
import styles from "./home.module.css";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MarketingPillButton } from "./MarketingPillButton";
import { TypingEyebrow } from "./TypingEyebrow";

export function HomeFinalCta() {
  return (
    <section id="contact" className={shared.homeFinalCtaSection}>
      <ScrollRevealGroup className={shared.homeFinalCtaOuter}>
        <div className={`${shared.finalCta} ${shared.homeFinalCtaCard}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-white/45 bg-white/[0.08] text-white">
              Ready when you are
            </TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "170ms" }} className="section-heading text-white">Build your next digital service with confidence.</h2>
          <p data-reveal-item style={{ transitionDelay: "340ms" }} className="mx-auto mb-6 max-w-[64ch] text-pretty text-white/75">
            Start building for free, or talk to our team about delivering a more complex service.
          </p>
          <div className={shared.finalCtaButtons}>
            <div data-reveal-item style={{ transitionDelay: "520ms" }}>
              <MarketingPillButton
                href="/pricing#plans"
                variant="white-icon"
                className={styles.pillNavyGradientHover}
              >
                Start building free
              </MarketingPillButton>
            </div>
            <div data-reveal-item style={{ transitionDelay: "690ms" }}>
              <MarketingPillButton
                href="/pricing#institutional"
                variant="dark-secondary"
                className={styles.pillWhiteSecondary}
              >
                Talk to us
              </MarketingPillButton>
            </div>
          </div>
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
