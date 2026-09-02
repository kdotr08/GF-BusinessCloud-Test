"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./scroll-reveal.module.css";

export function ScrollRevealGroup({
  children,
  className = "",
  rootMargin = "0px 0px -8%",
  threshold = 0.08,
  motion = "scale",
}: {
  children: ReactNode;
  className?: string;
  // Lets a section override when its reveal fires — e.g. a full-viewport-
  // height section needs a later (more negative) rootMargin so it doesn't
  // trigger while it's still mostly off-screen and finish animating
  // before the user actually scrolls it into a comfortable view.
  rootMargin?: string;
  threshold?: number;
  motion?: "scale" | "rise";
}) {
  const groupRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

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
      { rootMargin, threshold },
    );

    observer.observe(group);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={groupRef}
      className={`${styles.group} ${motion === "rise" ? styles.rise : ""} ${className}`}
      data-visible={visible || undefined}
    >
      {children}
    </div>
  );
}
