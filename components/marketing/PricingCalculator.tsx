"use client";

import { useMemo, useState } from "react";
import { estimateCost, formatGbp, formatInt } from "@/lib/pricing";
import styles from "./pricing.module.css";

export function PricingCalculator() {
  const [services, setServices] = useState(4);
  const [subs, setSubs] = useState(3000);
  const [actions, setActions] = useState(8000);
  const [complex, setComplex] = useState(false);
  const [needsInstitutional, setNeedsInstitutional] = useState(false);

  const estimate = useMemo(
    () => estimateCost(services, subs, actions, complex, needsInstitutional),
    [services, subs, actions, complex, needsInstitutional]
  );

  return (
    <section id="calculator" className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Estimate your cost</div>
          <h2 className="text-[30px]">Pricing calculator</h2>
          <p className="muted">
            A rough guide only &mdash; draft logic based on published Business Cloud rates. Wire
            up to real plan data before launch.
          </p>
        </div>

        <div className={styles.calc}>
          <div>
            <div className={styles.calcField}>
              <label>
                Live services <span className={styles.calcVal}>{services}</span>
              </label>
              <input
                type="range"
                min={1}
                max={120}
                value={services}
                onChange={(e) => setServices(Number(e.target.value))}
              />
            </div>
            <div className={styles.calcField}>
              <label>
                Monthly submissions <span className={styles.calcVal}>{formatInt(subs)}</span>
              </label>
              <input
                type="range"
                min={100}
                max={150000}
                step={100}
                value={subs}
                onChange={(e) => setSubs(Number(e.target.value))}
              />
            </div>
            <div className={styles.calcField}>
              <label>
                Monthly automation actions <span className={styles.calcVal}>{formatInt(actions)}</span>
              </label>
              <input
                type="range"
                min={0}
                max={400000}
                step={500}
                value={actions}
                onChange={(e) => setActions(Number(e.target.value))}
              />
            </div>
            <div className={styles.calcField}>
              <label>
                Do you need file uploads, authentication, reviewer workflows or custom identity?
              </label>
              <select value={complex ? "yes" : "no"} onChange={(e) => setComplex(e.target.value === "yes")}>
                <option value="no">No — standard components only</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className={styles.calcField}>
              <label>
                Do you need a dedicated support contact, custom SLA or security questionnaire
                help?
              </label>
              <select
                value={needsInstitutional ? "yes" : "no"}
                onChange={(e) => setNeedsInstitutional(e.target.value === "yes")}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          <div className={styles.calcOut}>
            <div className="eyebrow mb-1.5">Recommended plan</div>
            <div className={styles.calcPlan}>{estimate.plan.name}</div>
            <div className={styles.calcPrice}>
              {formatGbp(estimate.total)}
              <span>/month</span>
            </div>
            <div className={styles.calcLine}>
              <span>Base plan</span>
              <span>{formatGbp(estimate.plan.base)}</span>
            </div>
            <div className={styles.calcLine}>
              <span>Extra services</span>
              <span>{formatGbp(estimate.serviceCost)}</span>
            </div>
            <div className={styles.calcLine}>
              <span>Submission overage</span>
              <span>{formatGbp(estimate.subCost)}</span>
            </div>
            <div className={styles.calcLine}>
              <span>Automation overage</span>
              <span>{formatGbp(estimate.actionCost)}</span>
            </div>
            {estimate.needsInstitutionalReview && (
              <div className={styles.calcWarn}>
                This looks like an Institutional scenario &mdash; talk to us before buying
                Business Cloud.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
