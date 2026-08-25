"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: string;
  className?: string;
  duration?: number;
};

// Splits "12M+" -> {target:12, decimals:0, suffix:"M+"}, "99.98%" ->
// {target:99.98, decimals:2, suffix:"%"}. Values with no leading number
// ("ISO 27001") return null and render statically, uncounted.
function parseValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { target: parseFloat(numStr), decimals, suffix };
}

export function CountUpStat({ value, className = "", duration = 1800 }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!parsed || started) return;
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10%", threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (!started || !parsed) return;
    const { target, decimals, suffix } = parsed;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
