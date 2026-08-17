import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import styles from "./home.module.css";

const SOLUTIONS: [string, string][] = [
  ["Applications and registrations", "Guide people through eligibility, evidence collection and submission using clear, accessible journeys."],
  ["Customer and employee onboarding", "Collect information, verify requirements and trigger the right next steps automatically."],
  ["Requests and approvals", "Route internal and external requests to the right teams, with clear statuses and audit history."],
  ["Compliance and assessments", "Run structured assessments with validation, supporting evidence and traceable outcomes."],
  ["Case intake and referrals", "Capture sensitive information securely and assign each response to the appropriate reviewer."],
  ["Feedback and consultations", "Collect, organise and analyse responses from customers, employees, stakeholders or the public."],
];

export function SolutionsGrid() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[62ch]">
          <div className="eyebrow border-plum/25 bg-plum/10 text-plum">Use Cases</div>
          <h2 className="text-[30px]">Build complex processes into simple digital services.</h2>
          <p className="muted">
            Every service has its own requirements. From a straightforward application to a
            connected operational workflow, Govform.com gives you the tools to collect
            information, make decisions and move work forward.
          </p>
        </div>
        <div className={styles.solutions}>
          {SOLUTIONS.map(([title, body]) => (
            <div key={title} className={styles.solutionCard}>
              <MediaPlaceholder aspectClass="aspect-[16/10]" compact />
              <div className={styles.solutionTitle}>{title}</div>
              <div className={styles.solutionDesc}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
