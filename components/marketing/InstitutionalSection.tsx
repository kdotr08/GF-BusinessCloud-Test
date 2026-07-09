import styles from "./pricing.module.css";

const ROWS: [string, string][] = [
  [
    "Your team can build and manage services using the platform, docs and examples.",
    "You need us to help design, build, migrate or operate services.",
  ],
  [
    "You need standard business-grade support by email/ticket.",
    "You need a dedicated support contact, account management or a custom SLA.",
  ],
  [
    "You use documented features and standard automation patterns.",
    "You need bespoke integration architecture, custom identity or special file handling.",
  ],
  [
    "You can use the standard security/compliance evidence pack.",
    "You need us to complete questionnaires, join assurance workshops or negotiate DR/RPO/RTO.",
  ],
  [
    "You can buy by card or standard invoice.",
    "You need bespoke procurement, contract redlines or custom commercial packaging.",
  ],
];

export function InstitutionalSection() {
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
            {ROWS.map(([left, right]) => (
              <tr key={left}>
                <td>{left}</td>
                <td>{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <a className="btn btn-primary" href="#">
            Need Institutional pricing? Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
