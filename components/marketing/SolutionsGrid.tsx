"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

// Order is deliberate, not alphabetical/thematic: each image's baked-in
// border comes in one of three colors (blue: applications/onboarding/
// caseintake, teal: requests/compliance, navy: feedback), and cards are
// interleaved so no two adjacent cards — including the marquee's loop
// seam, last back to first — share a border color.
const SOLUTIONS: [string, string, string][] = [
  ["Applications and registrations", "Guide people through eligibility, evidence collection and submission using clear, accessible journeys.", "/images/use-cases/applications.png"],
  ["Requests and approvals", "Route internal and external requests to the right teams, with clear statuses and audit history.", "/images/use-cases/requests.png"],
  ["Customer and employee onboarding", "Collect information, verify requirements and trigger the right next steps automatically.", "/images/use-cases/onboarding.png"],
  ["Compliance and assessments", "Run structured assessments with validation, supporting evidence and traceable outcomes.", "/images/use-cases/compliance.png"],
  ["Case intake and referrals", "Capture sensitive information securely and assign each response to the appropriate reviewer.", "/images/use-cases/caseintake.png"],
  ["Feedback and consultations", "Collect, organise and analyse responses from customers, employees, stakeholders or the public.", "/images/use-cases/feedback.png"],
];

function SolutionCard({ title, body, image }: { title: string; body: string; image: string }) {
  return (
    <div className={styles.solutionCard}>
      <div className={styles.solutionGlowA} />
      <div className={styles.solutionGlowB} />
      <div className={styles.solutionMedia}>
        <img src={image} alt="" />
        <div className={styles.solutionFade} />
      </div>
      <div className={styles.solutionBody}>
        <div className={styles.solutionTitle}>{title}</div>
        <div className={styles.solutionDesc}>{body}</div>
      </div>
    </div>
  );
}

export function SolutionsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10%", threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`py-16 ${styles.solutionsSection}`} data-visible={visible || undefined}>
      <div className="wrap">
        <div className="mx-auto mb-8 text-center">
          <TypingEyebrow
            className={`mx-auto border-plum/25 bg-plum/10 text-plum ${styles.solutionsReveal} ${styles.solutionsRevealEyebrow}`}
          >
            Use Cases
          </TypingEyebrow>
          <h2
            className={`text-[30px] whitespace-normal xl:whitespace-nowrap ${styles.solutionsReveal} ${styles.solutionsRevealHeading}`}
          >
            Build complex processes into simple digital services.
          </h2>
          <p className={`muted mx-auto max-w-[62ch] ${styles.solutionsReveal} ${styles.solutionsRevealBody}`}>
            Every service has its own requirements. From a straightforward application to a
            connected operational workflow, Govform.com gives you the tools to collect
            information, make decisions and move work forward.
          </p>
        </div>
      </div>

      {/* Full-bleed (outside .wrap) continuous marquee — same technique as
          OrganisationLogoMarquee: a duplicated set scrolled via one CSS
          keyframe animation, paused on hover/focus. */}
      <div className={`${styles.solutionsViewport} ${styles.solutionsMarqueeReveal}`}>
        <div className={styles.solutionsTrack}>
          {[0, 1].map((setIndex) => (
            <div className={styles.solutionSet} key={setIndex} aria-hidden={setIndex === 1 || undefined}>
              {SOLUTIONS.map(([title, body, image]) => (
                <SolutionCard key={`${setIndex}-${title}`} title={title} body={body} image={image} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
