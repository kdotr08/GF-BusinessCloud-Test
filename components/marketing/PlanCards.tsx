import type { PlanCardData } from "@/lib/content";
import { MarketingPillButton } from "./MarketingPillButton";
import styles from "./pricing.module.css";

export function PlanCards({
  cards,
  comparisonRows,
}: {
  cards: PlanCardData[];
  comparisonRows: [string, string][];
}) {
  return (
    <section id="plans" className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Business Cloud plans</div>
          <h2 className="text-[30px]">Which plan am I?</h2>
          <p className="muted">
            Three plans cover almost every business-grade organisation. Everything above this is
            Business Estate or Institutional &mdash; see below.
          </p>
        </div>

        <div className={styles.plans}>
          {cards.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.planCard} ${plan.popular ? styles.planCardPopular : ""}`}
            >
              {plan.popular && <span className={styles.badgePopular}>Most popular</span>}
              <div className="font-serif text-[22px]">{plan.name}</div>
              <div className="mb-[18px] min-h-[32px] text-[13px] text-muted">{plan.audience}</div>
              <div className="font-serif text-[34px] text-navy">
                {plan.price}
                <span className="font-sans text-sm font-normal text-muted">/month</span>
              </div>
              <div className="my-1.5 mb-[18px] text-[12.5px] text-muted">{plan.sub}</div>
              <ul className={styles.planList}>
                {plan.rows.map(([k, v]) => (
                  <li key={k}>
                    <span className="text-muted">{k}</span>
                    <span className="text-right font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
              <MarketingPillButton
                href="#"
                variant={plan.ctaVariant === "primary" ? "primary" : "secondary"}
                className={`w-full ${plan.ctaVariant === "primary" ? "justify-between" : "justify-center"}`}
              >
                {plan.cta}
              </MarketingPillButton>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded border border-line bg-white p-4 text-[13.5px] text-muted">
          All Business Cloud plans include free build/test access, hosting, standard platform
          updates, production monitoring, backups, standard security evidence, custom domains,
          standard secure file handling, product documentation and ticket-based product support.
        </div>

        <table className={styles.vsTable}>
          <thead>
            <tr>
              <th>Other form builders</th>
              <th>Govform.com Business Cloud</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([left, right]) => (
              <tr key={left}>
                <td>{left}</td>
                <td className={styles.win}>{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
