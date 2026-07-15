import type { EstateBand } from "@/lib/content";
import styles from "./pricing.module.css";

export function EstateBanner({ bands }: { bands: EstateBand[] }) {
  return (
    <section className="bg-panel py-16">
      <div className="wrap">
        <div className={styles.estateBanner}>
          <div>
            <h3 className="text-[22px] text-white">Running a large form estate?</h3>
            <p className="max-w-[52ch] text-[#c9dbe9]">
              Business Estate pricing is for organisations with 100+ live services that need
              portfolio economics, not high-touch delivery support.
            </p>
          </div>
          <a className="btn btn-ghost" href="#institutional">
            Talk to us about Estate
          </a>
        </div>

        <details className={`${styles.estateDetail} mt-5`}>
          <summary>View Business Estate bands</summary>
          <table className={styles.estateTable}>
            <thead>
              <tr>
                <th>Estate plan</th>
                <th>Annual price</th>
                <th>Live services</th>
                <th>Annual submissions</th>
                <th>Annual automation actions</th>
                <th>Darcy assists</th>
                <th>AI form builds</th>
              </tr>
            </thead>
            <tbody>
              {bands.map((band) => (
                <tr key={band.plan}>
                  <td>{band.plan}</td>
                  <td>{band.annual_price}</td>
                  <td>{band.live_services}</td>
                  <td>{band.annual_submissions}</td>
                  <td>{band.annual_actions}</td>
                  <td>{band.darcy_assists}</td>
                  <td>{band.ai_form_builds}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3.5 text-[13.5px] text-muted">
            Business Estate covers platform access and light-touch product support. Migration
            factories, form conversion, service redesign, bespoke integrations and managed
            delivery are outside Estate and use professional-services rates or Institutional
            routing.
          </p>
        </details>
      </div>
    </section>
  );
}
