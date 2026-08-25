import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import { TypingEyebrow } from "@/components/marketing/TypingEyebrow";

export function ProductTour() {
  return (
    <section className="bg-panel-alt py-16">
      <ScrollRevealGroup className="wrap">
        <div className="section-intro section-intro--center">
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="mx-auto border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Product tour</TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">See it in action</h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
            See how teams create accessible journeys, connect data, test each step and publish
            secure digital services without rebuilding their existing systems.
          </p>
        </div>
        <div data-reveal-item style={{ transitionDelay: "500ms" }} className="mx-auto max-w-[880px]">
          <MediaPlaceholder aspectClass="aspect-video" />
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
