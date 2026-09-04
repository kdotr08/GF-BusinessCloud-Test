"use client";

import type { MouseEvent, ReactNode } from "react";

export function TemplatePreviewLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // target="_blank" opens the preview in a new tab without moving focus
    // away from this link in the original one — so .templateCard's
    // :focus-within hover-glow (content-page.module.css) stays visually
    // "stuck on" after the click, even once the pointer is no longer over
    // the card. Blurring right after the click clears it.
    event.currentTarget.blur();
  };

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
