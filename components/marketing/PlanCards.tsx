import styles from "./pricing.module.css";

type PlanCardData = {
  name: string;
  audience: string;
  price: string;
  sub: string;
  popular?: boolean;
  rows: [string, string][];
  cta: string;
  ctaVariant: "primary" | "secondary";
};

const PLAN_CARDS: PlanCardData[] = [
  {
    name: "Launch",
    audience: "First production services",
    price: "£75",
    sub: "£900/year annual · £90/month monthly-flex",
    rows: [
      ["Live services", "2"],
      ["Submissions", "2,500/mo"],
      ["Automation actions", "10,000/mo"],
      ["Hosted storage", "25GB"],
      ["Darcy assists", "100/mo (Fast)"],
      ["Builder users", "3"],
      ["Support", "Email/ticket · 2 day"],
      ["Extra service", "£10/mo"],
    ],
    cta: "Start free",
    ctaVariant: "secondary",
  },
  {
    name: "Portfolio",
    audience: "Multi-service organisational teams",
    price: "£195",
    sub: "£2,340/year annual · £234/month monthly-flex",
    popular: true,
    rows: [
      ["Live services", "12"],
      ["Submissions", "15,000/mo"],
      ["Automation actions", "75,000/mo"],
      ["Hosted storage", "250GB"],
      ["Darcy assists", "500/mo (Fast)"],
      ["Builder users", "10"],
      ["Support", "Priority + onboarding call"],
      ["Extra service", "£9/mo"],
    ],
    cta: "Start free",
    ctaVariant: "primary",
  },
  {
    name: "Scale",
    audience: "High-volume or larger light-touch teams",
    price: "£595",
    sub: "£7,140/year annual · £714/month monthly-flex",
    rows: [
      ["Live services", "50"],
      ["Submissions", "75,000/mo"],
      ["Automation actions", "300,000/mo"],
      ["Hosted storage", "1TB"],
      ["Darcy assists", "2,000/mo (Fast + Pro)"],
      ["Builder users", "25"],
      ["Support", "Priority product support"],
      ["Extra service", "£8.50/mo"],
    ],
    cta: "Talk to us / Start free",
    ctaVariant: "secondary",
  },
];

const COMPARISON_ROWS: [string, string][] = [
  [
    "Capture data in the browser and send a webhook after submission.",
    "Submit each page server-side, validate as you go, and run controlled automation while the journey is in progress.",
  ],
  [
    "Store API credentials or integration logic in third-party automation tools.",
    "Keep credentials, mapping and branching inside a server-side production service model.",
  ],
  [
    "Treat integration as an add-on or Enterprise custom feature.",
    "Generous standard automation actions included in every plan, advanced actions priced transparently.",
  ],
];

export function PlanCards() {
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
          {PLAN_CARDS.map((plan) => (
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
              <a
                className={`btn w-full ${plan.ctaVariant === "primary" ? "btn-primary" : "btn-secondary"}`}
                href="#"
              >
                {plan.cta}
              </a>
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
            {COMPARISON_ROWS.map(([left, right]) => (
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
