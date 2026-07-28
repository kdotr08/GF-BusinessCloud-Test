import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import styles from "./home.module.css";

export function PlatformShowcase() {
  return (
    <section className="bg-panel-alt py-16">
      <div className={`wrap ${styles.platformGrid}`}>
        <div>
          <div className="eyebrow border-plum/25 bg-plum/10 text-plum">The builder</div>
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
