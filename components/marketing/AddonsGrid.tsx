import type { Addon } from "@/lib/content";
import styles from "./pricing.module.css";

export function AddonsGrid({ addons }: { addons: Addon[] }) {
  return (
    <section id="addons" className="bg-panel py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Pay only for what scales</div>
          <h2 className="text-[30px]">Add capacity and premium capabilities when you need them</h2>
          <p className="muted">
            Darcy AI is included on every plan, with clear monthly limits. Use Darcy Fast for
            quick help and routine building; use Darcy Pro for complex, higher-stakes reasoning
            and generation.
          </p>
        </div>

        <div className={styles.addons}>
          {addons.map(({ title, price, description }) => (
            <div key={title} className={styles.addonCard}>
              <h4 className="mb-1 font-sans text-[15px] text-navy">{title}</h4>
              <div className={styles.addonPrice}>{price}</div>
              <p className="text-[13.5px] text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
