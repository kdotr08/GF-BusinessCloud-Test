import styles from "./pricing.module.css";

const ADDONS: [string, string, string][] = [
  [
    "Darcy AI Capacity Pack",
    "£99/month",
    "Adds 1,000 Darcy assists and 25 AI form builds/month. Unlocks Darcy Pro on Launch and Portfolio. Stackable, no rollover.",
  ],
  [
    "Document Assurance Pack",
    "£49/month",
    "1,000 sealed PDFs/month included, then £0.05 each. For regular signed/sealed answer PDF use.",
  ],
  [
    "Govforms CDR Capacity Pack",
    "£99/month",
    "Adds 10,000 protected files/month — safe read-only rendering for uploaded DOCX, XLSX and PDF files.",
  ],
  [
    "Automation volume packs",
    "from £250/month",
    "100,000 actions/month for £250, or 1,000,000 actions/month for £1,500 — for integration-heavy services.",
  ],
  [
    "Advanced sealed PDF",
    "£0.12 per PDF",
    "Signed and sealed answer PDFs using Govform.com's verified organisation seal. Legal terminology varies by jurisdiction.",
  ],
  [
    "Extra storage & processing",
    "from £0.03/GB",
    "£0.10/GB/month hosted storage overage · £0.03/GB processing (no scan) · £0.10/GB processing (malware-scanned).",
  ],
];

export function AddonsGrid() {
  return (
    <section id="addons" className="bg-panel py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[60ch]">
          <div className="eyebrow">Pay only for what scales</div>
          <h2 className="text-[30px]">Add capacity and premium capabilities when you need them</h2>
          <p className="muted">
            Darcy AI is included on every plan, with clear monthly limits. Use Darcy Fast for
            quick help and routine building; use Darcy Pro for complex, higher-stakes reasoning
            and generation.
          </p>
        </div>

        <div className={styles.addons}>
          {ADDONS.map(([title, price, body]) => (
            <div key={title} className={styles.addonCard}>
              <h4 className="mb-1 font-sans text-[15px] text-navy">{title}</h4>
              <div className={styles.addonPrice}>{price}</div>
              <p className="text-[13.5px] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
