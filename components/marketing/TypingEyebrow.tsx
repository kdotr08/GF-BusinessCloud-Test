"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type TypingEyebrowProps = {
  children: string;
  className?: string;
  eager?: boolean;
};

type EyebrowStyle = CSSProperties & {
  "--eyebrow-characters": number;
  "--eyebrow-duration": string;
};

export function TypingEyebrow({
  children,
  className = "",
  eager = false,
}: TypingEyebrowProps) {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(eager);
  const characterCount = children.length;
  const duration = Math.min(1900, Math.max(800, characterCount * 55));

  useEffect(() => {
    if (eager || isVisible) return;

    const eyebrow = eyebrowRef.current;
    if (!eyebrow) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%", threshold: 0.35 },
    );

    observer.observe(eyebrow);
    return () => observer.disconnect();
  }, [eager, isVisible]);

  const style: EyebrowStyle = {
    "--eyebrow-characters": characterCount,
    "--eyebrow-duration": `${duration}ms`,
  };

  return (
    <div
      ref={eyebrowRef}
      className={`eyebrow eyebrow-typing ${className}`.trim()}
      data-visible={isVisible || undefined}
      style={style}
    >
      <span className="eyebrow-typing-text">{children}</span>
      <span className="eyebrow-typing-cursor" aria-hidden="true" />
    </div>
  );
}
