import { Header } from "@/components/marketing/Header";
import type { HeroRung } from "@/lib/content";
import styles from "./pricing.module.css";

export function Hero({ rungs }: { rungs: HeroRung[] }) {
  return (
    <header className={`${styles.hero} pt-14`}>
      <div className="wrap">
        <Header />

        <div className={styles.heroGrid}>
          <div>
            <div className="eyebrow">Business Cloud pricing</div>
            <h1 className="max-w-[15ch] text-[44px] leading-[1.08] text-white">
              Build and test for free. Go live from £75/month.
            </h1>
            <p className="max-w-[46ch] text-[19px] text-[#d9e6f0]">
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
              <a className="btn btn-primary" href="#plans">
                Start building free
              </a>
              <a className="btn btn-ghost" href="#calculator">
                Calculate your live cost
              </a>
              <a className="btn btn-ghost" href="#institutional">
                Talk to us
              </a>
            </div>
            <div className="mt-3.5 text-[12.5px] text-[#8fa9bf]">
              Prices exclude VAT / local sales taxes. Annual-plan prices shown. Monthly-flex
              plans are available at +20%.
            </div>
          </div>

          <div className={styles.ladderRail}>
            {rungs.map((rung) => (
              <div key={rung.name} className={`${styles.rung} ${rung.active ? styles.rungActive : ""}`}>
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
