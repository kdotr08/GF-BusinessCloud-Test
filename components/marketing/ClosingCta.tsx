import Link from "next/link";
import styles from "./content-page.module.css";

export function ClosingCta({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.closingCta}>
          <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className={styles.closingCtaButtons}>
            <Link href={primaryCta.href} className="btn-pill-primary btn-hover-shrink !px-6">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className={`${styles.pillGhost} btn-hover-shrink`}>
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
