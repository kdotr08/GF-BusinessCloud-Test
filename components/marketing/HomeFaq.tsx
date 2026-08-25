import { ScrollRevealGroup } from "./ScrollRevealGroup";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

const FAQS = [
  {
    question: "Can I try Govform before purchasing?",
    answer:
      "Yes. You can create and test services for free and select a paid plan when you are ready to publish.",
  },
  {
    question: "Is Govform only for government organisations?",
    answer:
      "No. Govform is proven in UK public services, but the platform is available to businesses, charities, healthcare providers, education organisations and other teams handling complex or sensitive processes.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No coding is required for most services. Developers can also use APIs, webhooks and integrations for more advanced requirements.",
  },
  {
    question: "Can Govform connect with our existing systems?",
    answer:
      "Yes. Govform can connect with storage, identity, messaging and operational systems through supported integrations, APIs and webhooks.",
  },
  {
    question: "Can Govform support complex workflows?",
    answer:
      "Yes. Services can include conditional journeys, document collection, internal review, approvals, notifications and case-management processes.",
  },
  {
    question: "How does Govform support accessibility and security?",
    answer:
      "Govform provides accessible components, configurable controls and security features designed for organisations managing important or sensitive information.",
  },
];

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
            <details
              key={faq.question}
              data-reveal-item
              style={{ transitionDelay: `${240 + index * 130}ms` }}
              className={styles.homeFaqItem}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
