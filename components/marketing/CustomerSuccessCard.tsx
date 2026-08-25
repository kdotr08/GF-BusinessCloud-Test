import type { CSSProperties } from "react";
import type { CustomerSuccessStory } from "./customerSuccessData";
import styles from "./home.module.css";

type CustomerSuccessCardProps = {
  story: CustomerSuccessStory;
  index: number;
};

export function CustomerSuccessCard({ story, index }: CustomerSuccessCardProps) {
  const tabPositions = ["0%", "20%", "40%", "60%"];
  const cardsAfter = Math.max(0, 3 - index);
  const previousCardsAfter = Math.max(0, 4 - index);
  const defraOverlap = index === 3 ? 64 : 0;
  const defraOverlapCompact = index === 3 ? 44 : 0;
  const stackStyle = {
    "--success-stack-top": `${220 + index * 56 - defraOverlap}px`,
    "--success-stack-top-compact": `${168 + index * 38 - defraOverlapCompact}px`,
    "--success-stack-z": 10 + index,
    "--success-folder-tab-left": tabPositions[index] ?? "0%",
    "--success-stack-exit-gap": `${cardsAfter * 56 - 56}px`,
    "--success-stack-exit-gap-compact": `${cardsAfter * 38 - 38}px`,
    "--success-stack-entry-gap": `${index === 0 ? 0 : 94 - previousCardsAfter * 56}px`,
    "--success-stack-entry-gap-compact": `${index === 0 ? 0 : 76 - previousCardsAfter * 38}px`,
  } as CSSProperties;

  return (
    <article className={styles.successStackCard} style={stackStyle} aria-label={`${story.organisation}: ${story.title}`}>
      <div className={styles.successFolderTab}>{story.organisation}</div>
      <div className={styles.successCardPanel}>
        <div className={styles.successCardPanelClip}>
          <div className={styles.successCardContent}>
            <div className={styles.successStoryLead}>
              <div className={styles.successStoryCopy}>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
                <a className={styles.successSourceLink} href={story.source} target="_blank" rel="noreferrer">
                  View project <span aria-hidden="true">↗</span>
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
