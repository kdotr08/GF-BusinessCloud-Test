import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

export function PlatformShowcase() {
  return (
    <section className="bg-panel-alt py-16">
      <div className={`wrap ${styles.platformGrid}`}>
        <div>
          <TypingEyebrow className="border-[#00608e]/25 bg-[#00608e]/10 text-[#00608e]">The builder</TypingEyebrow>
          <h2 className="text-[30px]">Build, preview and publish from one dashboard</h2>
          <p className="muted">
            Configure pages, validation and automation without touching infrastructure.
            Darcy is there when you want a second pair of hands, and everything ships with
            production monitoring already switched on.
          </p>
          <a className="btn btn-secondary" href="/pricing#plans">
            Start building free
          </a>
        </div>
        <MediaPlaceholder aspectClass="aspect-[4/3]" />
      </div>
    </section>
  );
}
