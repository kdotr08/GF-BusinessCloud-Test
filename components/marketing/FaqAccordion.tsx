import styles from "./pricing.module.css";

const FAQS: [string, string][] = [
  [
    "What is a submission?",
    "One production journey instance after the user submits at least one page. Page-by-page server validation isn't counted separately. Draft, prototype and test traffic is excluded.",
  ],
  [
    "What is a standard automation action?",
    "One executed server-side integration step: an outbound API call, inbound API interaction, webhook delivery, Notify/email action, or standard mapping/transform step. A chain of three external calls counts as three actions.",
  ],
  [
    "What is a Darcy assist vs an AI form build?",
    "A Darcy assist is one request to ask a question, get guidance, draft content, or make a small/moderate change. An AI form build is creating a new form, generating a multi-page structure, or substantially rebuilding a service.",
  ],
  [
    "What happens if we exceed our included submissions or automation actions?",
    "Your service keeps running. Overage is charged at your plan's rate, or you can move to a higher plan or buy a volume pack.",
  ],
  [
    "What support is included in Business Cloud?",
    "Documentation, examples, standard evidence packs and email/ticket product support — covering use of the product, not service design, delivery, migration or bespoke integration work.",
  ],
  [
    "Can Govform.com build forms for us?",
    "Yes, as paid professional services. Business Cloud does not include hands-on build, UX/content design, migration factories or project delivery.",
  ],
  [
    "Do you offer charity or public-benefit discounts?",
    "Up to 20% off base plan fees only. No discount on usage overage, pass-through costs, sealed PDFs, professional services or institutional support.",
  ],
];

export function FaqAccordion() {
  return (
    <section id="faq" className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Questions</div>
          <h2 className="text-[30px]">FAQ &amp; definitions</h2>
        </div>
        {FAQS.map(([question, answer]) => (
          <details key={question} className={styles.faqItem}>
            <summary>{question}</summary>
            <div className="mt-2.5 text-[14.5px] text-muted">{answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
