import styles from "./home.module.css";

export function MediaPlaceholder({
  aspectClass = "aspect-video",
  compact = false,
}: {
  aspectClass?: string;
  compact?: boolean;
}) {
  return (
    <div className={`${styles.placeholder} ${compact ? styles.compact : ""} ${aspectClass}`}>
      <span className={styles.placeholderLabel}>Placeholder</span>
    </div>
  );
}
