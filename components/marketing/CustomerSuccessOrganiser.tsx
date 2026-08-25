import { CustomerSuccessCard } from "./CustomerSuccessCard";
import { CUSTOMER_SUCCESS_STORIES } from "./customerSuccessData";
import styles from "./home.module.css";

export function CustomerSuccessOrganiser() {
  return (
    <div className={styles.successStack}>
      {CUSTOMER_SUCCESS_STORIES.map((story, index) => (
        <CustomerSuccessCard key={story.slug} story={story} index={index} />
      ))}
    </div>
  );
}
