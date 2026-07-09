import styles from "./pricing.module.css";

export function FinalCta() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className={styles.finalCta}>
          <div className="eyebrow mb-1.5 text-[#8eb8dc]">
            Central government, regulated programmes, custom SLA
          </div>
          <h2 className="text-white">Need dedicated delivery support?</h2>
          <p className="mx-auto mb-6 max-w-[56ch] text-[#d9e6f0]">
            Institutional &amp; Central Government pricing covers dedicated support, custom SLAs,
            security assurance, delivery help and bespoke procurement &mdash; the way Govform.com
            works with high-touch public-sector organisations.
          </p>
          <div className={styles.finalCtaButtons}>
            <a className="btn btn-primary" href="#">
              Talk to us
            </a>
            <a className="btn btn-ghost" href="#plans">
              Back to Business Cloud plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
