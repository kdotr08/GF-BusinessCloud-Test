import { MarketingPillButton } from "./MarketingPillButton";
import styles from "./pricing.module.css";

export function FinalCta() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className={styles.finalCta}>
          <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">
            Central government, regulated programmes, custom SLA
          </div>
          <h2 className="text-white">Need dedicated delivery support?</h2>
          <p className="mx-auto mb-6 max-w-[56ch] text-white/75">
            Institutional &amp; Central Government pricing covers dedicated support, custom SLAs,
            security assurance, delivery help and bespoke procurement &mdash; the way Govform.com
            works with high-touch public-sector organisations.
          </p>
          <div className={styles.finalCtaButtons}>
            <MarketingPillButton href="#">
              Talk to us
            </MarketingPillButton>
            <MarketingPillButton href="#plans" variant="dark-secondary">
              Back to Business Cloud plans
            </MarketingPillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
