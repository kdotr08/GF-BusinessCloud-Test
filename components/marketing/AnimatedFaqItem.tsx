"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import styles from "./content-page.module.css";

const CLOSE_DURATION_MS = 360;

export function AnimatedFaqItem({
  question,
  answer,
  delayMs = 0,
}: {
  question: string;
  answer: string;
  delayMs?: number;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const closeTimerRef = useRef<number>();

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const handleSummaryClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const details = detailsRef.current;
    if (!details) return;

    if (details.dataset.closing === "true") {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      delete details.dataset.closing;
      return;
    }

    if (!details.open) {
      details.open = true;
      return;
    }

    details.dataset.closing = "true";
    closeTimerRef.current = window.setTimeout(() => {
      details.open = false;
      delete details.dataset.closing;
    }, CLOSE_DURATION_MS);
  };

  return (
    <details
      ref={detailsRef}
      className={styles.faqItem}
      data-reveal-item
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <summary onClick={handleSummaryClick}>{question}</summary>
      <div className={styles.faqAnswerReveal}>
        <div className={styles.faqAnswerInner}>
          <p>{answer}</p>
        </div>
      </div>
    </details>
  );
}
