import type { Scenario } from "@/lib/content";
import styles from "./pricing.module.css";

export function ScenariosGrid({ scenarios }: { scenarios: Scenario[] }) {
  return (
    <section className="bg-panel py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Example prices</div>
          <h2 className="text-[30px]">What this looks like in practice</h2>
        </div>
        <div className={styles.scenarios}>
          {scenarios.map(({ title, price, description }) => (
            <div key={title} className={styles.scenarioCard}>
              <strong>{title}</strong>
              <div className={styles.sprice}>{price}</div>
              <p className="text-[13.5px] text-muted">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13.5px] text-muted">
          Complex, low-volume regulated services &mdash; authentication, sensitive files,
          reviewer workflow or bespoke assurance &mdash; may need a go-live review, professional
          services or Institutional pricing even if submission volume is low.
        </p>
      </div>
    </section>
  );
}
