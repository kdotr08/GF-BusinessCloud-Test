"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

// Order is deliberate, not alphabetical/thematic: each image's baked-in
// border comes in one of three colors (blue: applications/onboarding/
// caseintake, teal: requests/compliance, navy: feedback), interleaved so
// no two adjacent cards share a border color.
const SOLUTIONS: [string, string, string][] = [
  ["Applications and registrations", "Guide people through eligibility, evidence collection and submission using clear, accessible journeys.", "/images/use-cases/applications.png"],
  ["Requests and approvals", "Route internal and external requests to the right teams, with clear statuses and audit history.", "/images/use-cases/requests.png"],
  ["Customer and employee onboarding", "Collect information, verify requirements and trigger the right next steps automatically.", "/images/use-cases/onboarding.png"],
  ["Compliance and assessments", "Run structured assessments with validation, supporting evidence and traceable outcomes.", "/images/use-cases/compliance.png"],
  ["Case intake and referrals", "Capture sensitive information securely and assign each response to the appropriate reviewer.", "/images/use-cases/caseintake.png"],
  ["Feedback and consultations", "Collect and organise responses from customers, employees, stakeholders or the public, then route them to the right teams for review.", "/images/use-cases/feedback.png"],
];

function SolutionCard({ title, body, image }: { title: string; body: string; image: string }) {
  return (
    <div className={styles.solutionCard}>
      <div className={styles.solutionGlowA} />
      <div className={styles.solutionMedia}>
        <img src={image} alt="" />
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
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
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
      { rootMargin: "0px 0px -40%", threshold: 0.08 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll-jacked horizontal reveal: .solutionsPin is given exactly enough
  // extra height (its natural content height + however far the track needs
  // to travel) that position: sticky on .solutionsSticky keeps it pinned
  // to the top of the viewport for precisely that many pixels of scroll —
  // no more, no less. Scrolling through that budget is mapped 1:1 onto the
  // track's translateX, so scroll speed and horizontal speed always match;
  // once the track reaches its final card, .solutionsPin runs out of extra
  // height and the page carries on scrolling into the next section on its
  // own, with no extra code needed to "release" the pin.
  useEffect(() => {
    const pin = pinRef.current;
    const sticky = stickyRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!pin || !sticky || !viewport || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let extra = 0;
    let rafId = 0;
    let queued = false;

    const measure = () => {
      extra = Math.max(0, track.scrollWidth - viewport.clientWidth);
      pin.style.height = `${sticky.offsetHeight + extra}px`;
      apply();
    };

    const apply = () => {
      const rect = pin.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), extra);
      track.style.transform = `translateX(-${scrolled}px)`;
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(() => {
        queued = false;
        apply();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`bg-panel-alt ${styles.solutionsSection}`} data-visible={visible || undefined}>
      <div ref={pinRef} className={styles.solutionsPin}>
        <div ref={stickyRef} className={styles.solutionsSticky}>
          <div className="wrap">
            <div className="section-intro section-intro--center">
              <TypingEyebrow
                className={`mx-auto border-[#00608e]/25 bg-[#00608e]/10 text-[#00608e] ${styles.solutionsReveal} ${styles.solutionsRevealEyebrow}`}
              >
                Use Cases
              </TypingEyebrow>
              <h2
                className={`section-heading ${styles.solutionsReveal} ${styles.solutionsRevealHeading}`}
              >
                Build complex processes into simple digital services.
              </h2>
              <p className={`muted ${styles.solutionsReveal} ${styles.solutionsRevealBody}`}>
                Every service has its own requirements. From a straightforward application to a
                connected operational workflow, Govform.com gives you the tools to collect
                information, make decisions and move work forward.
              </p>
            </div>
          </div>

          {/* Full-bleed (outside .wrap): .solutionsViewport just clips the
              track and carries the entrance slide-in
              (.solutionsMarqueeReveal); .solutionsTrack's own transform is
              driven entirely by the scroll effect above, so the two never
              fight over the same element. */}
          <div ref={viewportRef} className={`${styles.solutionsViewport} ${styles.solutionsMarqueeReveal}`}>
            <div ref={trackRef} className={styles.solutionsTrack}>
              {SOLUTIONS.map(([title, body, image]) => (
                <SolutionCard key={title} title={title} body={body} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
