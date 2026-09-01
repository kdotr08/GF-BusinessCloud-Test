/**
 * Compatibility shim for existing subpage call sites. The canonical
 * homepage CTA is injected once per non-home route by SubpageChrome,
 * immediately before the shared footer.
 */
export function ClosingCta({
  eyebrow: _,
  title: __,
  body: ___,
  primaryCta: ____,
  secondaryCta: _____,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return null;
}
