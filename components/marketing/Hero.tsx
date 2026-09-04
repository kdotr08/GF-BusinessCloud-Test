import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
import type { HeroRung } from "@/lib/content";
import contentStyles from "./content-page.module.css";
import styles from "./pricing.module.css";

export function Hero({ rungs }: { rungs: HeroRung[] }) {
  return (
    <header className="bg-dark-glow subpage-hero-clearance">
      <div className="wrap">
        <div className={styles.heroGrid}>
          <div>
            <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">
              Business Cloud pricing
            </div>
            <h1 className="max-w-[15ch] text-[44px] leading-[1.08] text-white">
              Build and test for free. Go live from £75/month.
            </h1>
            <p className="max-w-[46ch] text-[19px] text-white/75">
              Account-level pricing for organisations that need accessible, secure,
              production-grade digital service forms &mdash; without paying for
              central-government-level delivery support they don&apos;t need.
            </p>

            <div className={styles.guardrail}>
              Business Cloud is for teams that configure and manage their own services
              using documentation, standard platform features and ticket-based product
              support. Need dedicated support, custom SLAs or bespoke integrations?{" "}
              <a href="#institutional">See Institutional &amp; Central Government pricing &rarr;</a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <MarketingPillButton
                href="#plans"
                variant="white-icon"
                className={contentStyles.pageHeroPrimary}
              >
                Start building free
              </MarketingPillButton>
              <MarketingPillButton href="#calculator" variant="dark-secondary">
                Calculate your live cost
              </MarketingPillButton>
              <MarketingPillButton href="/contact" variant="dark-secondary">
                Talk to us
              </MarketingPillButton>
            </div>
            <div className="mt-3.5 text-[12.5px] text-white/50">
              Prices exclude VAT / local sales taxes. Annual-plan prices shown. Monthly-flex
              plans are available at +20%.
            </div>
          </div>

          <div className={styles.ladderRail}>
            {rungs.map((rung) => (
              <div key={rung.name} className={styles.rung}>
                <div className={styles.rname}>{rung.name}</div>
                <div className={styles.rprice}>{rung.price}</div>
                <div className={styles.rnote}>{rung.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
