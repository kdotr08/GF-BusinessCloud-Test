import styles from "./pricing.module.css";

const INCLUDES: [string, string][] = [
  ["Hosting & reliability", "Monitoring, maintenance, backups, product updates."],
  ["Docs & templates", "Help centre, API documentation, examples, self-service first."],
  ["Product support", "Ticket/email support for product usage and defects."],
  ["Security evidence", "Standard, reusable compliance evidence pack."],
  ["Custom domains", "Standard documented domain configuration."],
  ["Malware & privacy processing", "Scanning, EXIF removal, resizing, face blurring on uploads."],
];

export function IncludesGrid() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Every plan includes</div>
          <h2 className="text-[30px]">The platform, secured and supported</h2>
        </div>
        <div className={styles.includes}>
          {INCLUDES.map(([title, body]) => (
            <div key={title} className={styles.incItem}>
              <strong>{title}</strong>
              {body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
