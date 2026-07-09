import styles from "./pricing.module.css";

const ESTATE_BANDS: [string, string, string, string, string, string, string][] = [
  ["Estate 100", "£18,000/yr", "100", "750,000", "2,000,000", "5,000/mo", "150/mo"],
  ["Estate 250", "£36,000/yr", "250", "1,500,000", "4,000,000", "10,000/mo", "300/mo"],
  ["Estate 1000", "£60,000/yr", "1,000", "3,000,000", "8,000,000", "20,000/mo", "500/mo"],
  ["Estate 2000", "£96,000/yr", "2,000", "6,000,000", "15,000,000", "30,000/mo", "1,000/mo"],
];

export function EstateBanner() {
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
              {ESTATE_BANDS.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
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
