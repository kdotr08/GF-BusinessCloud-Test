import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import styles from "./home.module.css";

const SOLUTIONS: [string, string, string][] = [
  ["Local & regional government", "Grants & applications", "Eligibility questions, file uploads and automated confirmation, without a delivery team."],
  ["Health & social care", "Case intake & referrals", "Sensitive submissions with malware-scanned uploads and controlled access."],
  ["Regulatory bodies", "Licensing & permits", "Structured applications, with a reviewer workflow when a case needs a closer look."],
  ["Public sector operations", "Internal service requests", "Approvals and internal workflows, built on the same platform as public-facing services."],
];

export function SolutionsGrid() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[62ch]">
          <div className="eyebrow border-plum/25 bg-plum/10 text-plum">What teams build</div>
          <h2 className="text-[30px]">Built for how public services actually run</h2>
          <p className="muted">
            Every service has its own requirements. Govform.com adapts to how yours works, not
            the other way round.
          </p>
        </div>
        <div className={styles.solutions}>
          {SOLUTIONS.map(([tag, title, body]) => (
            <div key={title} className={styles.solutionCard}>
              <MediaPlaceholder aspectClass="aspect-[16/10]" compact />
              <span className={styles.solutionTag}>{tag.toUpperCase()}</span>
              <div className={styles.solutionTitle}>{title}</div>
              <div className={styles.solutionDesc}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
