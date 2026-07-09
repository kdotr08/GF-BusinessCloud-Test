import styles from "./pricing.module.css";

const SCENARIOS: [string, string, string][] = [
  ["Small organisation launching 1–2 services", "£75/month", "2 live services, 300 submissions/month, light support — Launch."],
  [
    "Team running several public-facing forms",
    "£99/month",
    "5 live services, 1,000 submissions/month — Launch + 3 extra services.",
  ],
  [
    "Organisational portfolio",
    "£195/month",
    "10 live services, 10,000 submissions/month, standard automation usage — Portfolio.",
  ],
  [
    "High-volume simple service",
    "~£685/month",
    "1 live service, 80,000 submissions/month — Scale + overage (5,000 × £0.018).",
  ],
];

export function ScenariosGrid() {
  return (
    <section className="bg-panel py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Example prices</div>
          <h2 className="text-[30px]">What this looks like in practice</h2>
        </div>
        <div className={styles.scenarios}>
          {SCENARIOS.map(([title, price, body]) => (
            <div key={title} className={styles.scenarioCard}>
              <strong>{title}</strong>
              <div className={styles.sprice}>{price}</div>
              <p className="text-[13.5px] text-muted">{body}</p>
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
