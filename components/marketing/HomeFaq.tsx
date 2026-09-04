"use client";

import { useState } from "react";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";
import { FAQS } from "./home-faq-data";

function HomeFaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className={`${styles.homeFaqItem} ${isOpen ? styles.homeFaqItemOpen : ""}`}>
      <button
        type="button"
        className={styles.homeFaqQuestion}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{question}</span>
        <span className={styles.homeFaqToggle} aria-hidden="true" />
      </button>
      <div id={answerId} className={styles.homeFaqAnswer} aria-hidden={!isOpen}>
        <div className={styles.homeFaqAnswerInner}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function HomeFaq() {
  return (
    <section id="faq" className={styles.homeFaqSection}>
      <ScrollRevealGroup className={`wrap ${styles.homeFaqLayout}`}>
        <div className={`section-intro ${styles.homeFaqIntro}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
              Frequently asked questions
            </TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
            What teams ask before they start.
          </h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }}>
            The essentials about getting started, connecting existing systems and running secure,
            accessible digital services.
          </p>
        </div>

        <div className={styles.homeFaqList}>
          {FAQS.map((faq, index) => (
            <div
              key={faq.question}
              data-reveal-item
              style={{ transitionDelay: `${240 + index * 130}ms` }}
            >
              <HomeFaqItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
