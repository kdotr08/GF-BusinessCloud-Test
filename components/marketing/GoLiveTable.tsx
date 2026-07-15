import type { GoLiveRow } from "@/lib/content";
import styles from "./pricing.module.css";

export function GoLiveTable({ rows }: { rows: GoLiveRow[] }) {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Optional assurance</div>
          <h2 className="text-[30px]">Go-live checks and hands-on help</h2>
          <p className="muted">
            Most simple services can be self-certified. Complex, high-risk or business-critical
            services may need a paid review.
          </p>
        </div>
        <table className={styles.simpleTable}>
          <thead>
            <tr>
              <th>Review / service</th>
              <th>Price</th>
              <th>Use when</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ name, price, use_when }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{use_when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
