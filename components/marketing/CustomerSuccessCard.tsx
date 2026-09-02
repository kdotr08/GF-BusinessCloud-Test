import type { CSSProperties } from "react";
import type { CustomerSuccessStory } from "./customerSuccessData";
import styles from "./home.module.css";

type CustomerSuccessCardProps = {
  story: CustomerSuccessStory;
  index: number;
};

export function CustomerSuccessCard({ story, index }: CustomerSuccessCardProps) {
  const tabPositions = ["0%", "20%", "40%", "60%"];
  const stackStyle = {
    // Each card stops one visible tab-height below the previous card.
    // DEFRA follows the same linear offset so it completes layer four.
    "--success-stack-index": index,
    "--success-stack-z": 10 + index,
    "--success-folder-tab-left": tabPositions[index] ?? "0%",
  } as CSSProperties;

  // Only the front card is guaranteed visible when this section's reveal
  // fires, so only it gets the fade/slide-up entrance — later cards are
  // hidden behind it until their own sticky offset brings them forward.
  const isFront = index === 0;

  return (
    <article
      className={`${styles.successStackCard} ${isFront ? styles.successCardEnter : ""}`}
      style={isFront ? { ...stackStyle, transitionDelay: "480ms" } : stackStyle}
      aria-label={`${story.organisation}: ${story.title}`}
    >
      <div className={styles.successFolderTab}>
        {story.organisation}
        <span className={styles.successFolderTabSeamMask} aria-hidden="true" />
      </div>
      <div className={styles.successCardPanel}>
        <div className={styles.successCardPanelClip}>
          <div className={styles.successCardContent}>
            <div className={styles.successStoryLead}>
              <div className={styles.successStoryCopy}>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
                <a
                  className={`btn-pill-secondary btn-hover-shrink ${styles.darkPillSecondary} ${styles.successSourceLink}`}
                  href={story.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              </div>
              <div className={styles.successStoryImage}>
                <img src={story.image} alt={`${story.organisation} success story`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
