import styles from "./home.module.css";

const STATS: [string, string][] = [
  ["12M+", "Forms submitted"],
  ["99.98%", "Platform uptime"],
  ["40+", "Organisations on the platform"],
  ["ISO 27001", "Information security certified"],
];

export function StatsBar() {
  return (
    <section className="border-y border-line bg-white py-9">
      <div className={`wrap ${styles.stats}`}>
        {STATS.map(([num, label]) => (
          <div key={label}>
            <div className={styles.statNum}>{num}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
