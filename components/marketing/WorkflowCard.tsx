"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.css";

const LABELS = [
  "Submitted",
  "Server-side validation passed",
  "Confirmation email sent",
  "Approved",
];

// Illustrative timestamps only — automated steps land seconds apart, the
// final step lands much later to show a licensing officer finishing up
// after the automated part of the journey is already done.
const OFFSETS_SECONDS = [0, 0, 1, 27 * 60 + 13];
const BASE = Date.UTC(2026, 0, 1, 9, 14, 2);

function timeAt(offset: number) {
  return new Date(BASE + offset * 1000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

const START_DONE = 2;

export function WorkflowCard() {
  const [doneCount, setDoneCount] = useState(START_DONE);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setDoneCount((count) => (count >= LABELS.length ? START_DONE : count + 1));
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const complete = doneCount >= LABELS.length;

  return (
    <div className={styles.wfCard}>
      <div className={styles.wfHead}>
        <span className={styles.wfRef}>SUB_8F21C4A0</span>
        <span className={`${styles.wfStatus} ${complete ? styles.approved : ""}`}>
          {complete ? "Approved" : "In progress"}
        </span>
      </div>
      <div className={styles.wfTitle}>Trading licence renewal</div>
      <div className={styles.wfDesc}>Licensing team &middot; Local authority</div>

      <div className={styles.wfSteps}>
        {LABELS.map((label, i) => {
          const state = i < doneCount ? "done" : i === doneCount ? "active" : "pending";
          return (
            <div key={label} className={`${styles.wfStep} ${styles[state]}`}>
              <span className={styles.wfStepIcon} />
              <span className={styles.wfStepLabel}>{label}</span>
              <span className={styles.wfStepTime}>
                {i < doneCount ? timeAt(OFFSETS_SECONDS[i]) : "-"}
              </span>
            </div>
          );
        })}
      </div>

      <div className={styles.wfJson}>
        {"{"}
        <br />
        &nbsp;&nbsp;<span className={styles.k}>&quot;submission_id&quot;</span>: <span className={styles.s}>&quot;sub_8f21c4a0&quot;</span>,
        <br />
        &nbsp;&nbsp;<span className={styles.k}>&quot;service&quot;</span>: <span className={styles.s}>&quot;licence_renewal&quot;</span>,
        <br />
        &nbsp;&nbsp;<span className={styles.k}>&quot;status&quot;</span>: <span className={styles.s}>&quot;{complete ? "approved" : "processing"}&quot;</span>,
        <br />
        &nbsp;&nbsp;<span className={styles.k}>&quot;automation_actions&quot;</span>: {doneCount >= 3 ? 1 : 0},
        <br />
        &nbsp;&nbsp;<span className={styles.k}>&quot;webhook_delivered&quot;</span>: <span className={styles.s}>{doneCount >= 3 ? "true" : "false"}</span>
        <br />
        {"}"}
      </div>
    </div>
  );
}
