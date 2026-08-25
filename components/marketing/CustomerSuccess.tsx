import { CustomerSuccessOrganiser } from "./CustomerSuccessOrganiser";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { TypingEyebrow } from "./TypingEyebrow";
import styles from "./home.module.css";

export function CustomerSuccess() {
  return (
    <section className={styles.customerSuccessSection}>
      <ScrollRevealGroup className={`wrap ${styles.customerSuccessLayout}`}>
        <div className={`section-intro ${styles.customerSuccessIntro}`}>
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
              Customer success
            </TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
            Open the stories behind services delivered at pace.
          </h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }}>
            Scroll through each organisation to see what its team delivered and the result.
          </p>
        </div>

        <CustomerSuccessOrganiser />
      </ScrollRevealGroup>
    </section>
  );
}
