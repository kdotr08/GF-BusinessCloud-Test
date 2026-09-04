"use client";

import { useEffect, useState, type FocusEvent } from "react";
import styles from "./content-page.module.css";
import { TemplatePreviewLink } from "./TemplatePreviewLink";

export function TemplateCard({
  title,
  body,
  image,
  previewHref,
  category,
}: {
  title: string;
  body: string;
  image: string;
  previewHref: string;
  category: string;
}) {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // The preview link opens in a new tab (target="_blank"), which steals
    // window focus without ever firing a mouseleave in this document. CSS
    // :hover would then stay frozen "on" in this now-backgrounded tab —
    // browsers don't clear it, just stop updating it — until a real
    // pointer move happens here again, which is why the mesh-gradient glow
    // was getting stuck on after clicking through. Driving the glow off a
    // JS-managed class instead means a window "blur" listener can force it
    // off the moment focus leaves, regardless of where the pointer
    // physically last was.
    const clearOnBlur = () => setHovering(false);
    window.addEventListener("blur", clearOnBlur);
    return () => window.removeEventListener("blur", clearOnBlur);
  }, []);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setHovering(false);
    }
  };

  return (
    <div
      className={`${styles.templateCard} ${hovering ? styles.templateCardHovering : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={handleBlur}
    >
      <div className={styles.templateCardMedia}>
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className={styles.templateCardBody}>
        <div className={`eyebrow ${styles.templateCardCategory}`}>{category}</div>
        <div className={styles.featureCardTitle}>{title}</div>
        <p className="text-[13.5px] text-muted">{body}</p>
        <TemplatePreviewLink
          href={previewHref}
          className={`btn-pill-secondary btn-hover-shrink ${styles.solidBlueCta} ${styles.templatePreviewCta} h-9 !px-4 text-[13px]`}
        >
          Preview template
        </TemplatePreviewLink>
      </div>
    </div>
  );
}
