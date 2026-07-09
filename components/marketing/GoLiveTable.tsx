import styles from "./pricing.module.css";

const ROWS: [string, string, string][] = [
  ["Self-certified go-live", "£0", "Simple services using standard components, no unusual risk."],
  ["Simple go-live check", "£350/service", "Up to 25 pages, no API, no custom auth, no reviewer workflow."],
  ["Standard go-live review", "£750/service", "Up to 75 pages, standard integrations, ordinary file upload."],
  [
    "Complex business review",
    "£1,500/service",
    "Authentication, reviewer workflow, sensitive uploads, several API actions, or 75+ pages.",
  ],
  ["Professional services", "From £950/day", "Service build, migration, UX/content support, bespoke integration, delivery help."],
];

export function GoLiveTable() {
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
            {ROWS.map(([name, price, when]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
