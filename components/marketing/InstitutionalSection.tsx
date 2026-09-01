import { MarketingPillButton } from "./MarketingPillButton";
import styles from "./pricing.module.css";

export function InstitutionalSection({ rows }: { rows: [string, string][] }) {
  return (
    <section id="institutional" className="bg-panel-alt py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Choosing the right route</div>
          <h2 className="text-[30px]">
            Business Cloud when you want product access. Institutional when you need us involved.
          </h2>
        </div>
        <table className={styles.vsTable}>
          <thead>
            <tr>
              <th>Business Cloud is right when&hellip;</th>
              <th>Institutional &amp; Central Government is right when&hellip;</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([left, right]) => (
              <tr key={left}>
                <td>{left}</td>
                <td>{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <MarketingPillButton href="#">
            Need Institutional pricing? Talk to us
          </MarketingPillButton>
        </div>
      </div>
    </section>
  );
}
