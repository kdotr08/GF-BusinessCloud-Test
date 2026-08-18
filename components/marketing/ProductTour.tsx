import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import { TypingEyebrow } from "@/components/marketing/TypingEyebrow";

export function ProductTour() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className="mx-auto mb-8 max-w-[62ch] text-center">
          <TypingEyebrow className="mx-auto border-plum/25 bg-plum/10 text-plum">Product tour</TypingEyebrow>
          <h2 className="text-[30px]">See it in action</h2>
          <p className="muted mx-auto">
            A walkthrough of a submission moving from build to production &mdash; from a blank
            form to a completed, automated journey.
          </p>
        </div>
        <div className="mx-auto max-w-[880px]">
          <MediaPlaceholder aspectClass="aspect-video" />
        </div>
      </div>
    </section>
  );
}
