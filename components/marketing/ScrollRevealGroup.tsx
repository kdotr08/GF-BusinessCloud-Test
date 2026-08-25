"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./scroll-reveal.module.css";

export function ScrollRevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
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
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={groupRef}
      className={`${styles.group} ${className}`}
      data-visible={visible || undefined}
    >
      {children}
    </div>
  );
}
