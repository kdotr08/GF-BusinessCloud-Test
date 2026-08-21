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

// Autoplay pace, expressed the same way the old CSS keyframe was (a full
// loop — one set's width — every DURATION_S seconds) so swapping the
// scroll-driven marquee in didn't change how fast it reads.
const DURATION_S = 70;

export function SolutionsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
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

  // Auto-scroll + drag-to-scroll. The viewport is a real horizontal
  // scroller (home.module.css .solutionsViewport), so mobile swipe is
  // free via native touch scrolling — this effect only adds the desktop
  // mouse-drag handling, the autoplay nudge, and the seamless wrap-around
  // between the two duplicated card sets.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let rafId = 0;

    const tick = () => {
      if (!paused && !dragging && !reduceMotion) {
        const halfWidth = viewport.scrollWidth / 2;
        viewport.scrollLeft += halfWidth / (DURATION_S * 60);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onScroll = () => {
      if (reduceMotion) return;
      const halfWidth = viewport.scrollWidth / 2;
      if (viewport.scrollLeft >= halfWidth) viewport.scrollLeft -= halfWidth;
      else if (viewport.scrollLeft < 0) viewport.scrollLeft += halfWidth;
    };

    const onMouseEnter = () => {
      paused = true;
    };
    const onMouseLeave = () => {
      paused = false;
    };
    const onTouchStart = () => {
      paused = true;
    };
    const onTouchEnd = () => {
      paused = false;
    };

    // Mouse only — touch already gets native swipe scrolling for free,
    // and hijacking it here would fight the browser's own momentum.
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      dragging = true;
      startX = e.clientX;
      startScrollLeft = viewport.scrollLeft;
      viewport.classList.add(styles.dragging);
      viewport.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      viewport.scrollLeft = startScrollLeft - (e.clientX - startX);
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove(styles.dragging);
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture already released (e.g. pointercancel)
      }
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    viewport.addEventListener("mouseenter", onMouseEnter);
    viewport.addEventListener("mouseleave", onMouseLeave);
    viewport.addEventListener("touchstart", onTouchStart, { passive: true });
    viewport.addEventListener("touchend", onTouchEnd, { passive: true });
    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    return () => {
      cancelAnimationFrame(rafId);
      viewport.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("mouseenter", onMouseEnter);
      viewport.removeEventListener("mouseleave", onMouseLeave);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchend", onTouchEnd);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", endDrag);
      viewport.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-16 ${styles.solutionsSection}`} data-visible={visible || undefined}>
      <div className="wrap">
        <div className="mx-auto mb-8 text-center">
          <TypingEyebrow
            className={`mx-auto border-[#00608e]/25 bg-[#00608e]/10 text-[#00608e] ${styles.solutionsReveal} ${styles.solutionsRevealEyebrow}`}
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

      {/* Full-bleed (outside .wrap) continuous marquee — a native
          horizontal scroller, auto-scrolled and drag/swipe-able (see the
          effect above and .solutionsViewport in home.module.css). */}
      <div ref={viewportRef} className={`${styles.solutionsViewport} ${styles.solutionsMarqueeReveal}`}>
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
