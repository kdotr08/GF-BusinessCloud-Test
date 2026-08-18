import shared from "./pricing.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

export function HomeFinalCta() {
  return (
    <section id="contact" className="py-16">
      <div className="wrap">
        <div className={shared.finalCta}>
          <TypingEyebrow className="border-white/25 bg-white/10 text-[var(--hero-accent)]">
            Ready when you are
          </TypingEyebrow>
          <h2 className="text-white">Start building, or talk to us first.</h2>
          <p className="mx-auto mb-6 max-w-[56ch] text-white/75">
            Build and test for free on Business Cloud. Talk to us if you&apos;re running a large
            estate, or need us involved in delivery.
          </p>
          <div className={shared.finalCtaButtons}>
            <a className="btn btn-secondary" href="/pricing#plans">
              Start building free
            </a>
            <a className="btn btn-ghost" href="/pricing#institutional">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
