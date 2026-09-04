import Link from "next/link";
import { ArticleIcon } from "./ArticleIcon";
import { articleHref, categoryHref, type DocumentationCategory } from "@/lib/documentation";
import styles from "./documentation.module.css";

export function DocumentationCard({
  category,
  compact = false,
  title = category.title,
  maxArticles = 5,
}: {
  category: DocumentationCategory;
  compact?: boolean;
  title?: string;
  maxArticles?: number;
}) {
  return (
    <article className={`${styles.categoryCard} ${compact ? styles.categoryCardCompact : ""}`}>
      <div>
        <h2>{title}</h2>
        <p className={styles.articleCount}>{category.articles.length} {category.articles.length === 1 ? "article" : "articles"}</p>
      </div>
      <ul className={styles.cardLinks}>
        {category.articles.slice(0, maxArticles).map((article) => (
          <li key={article.slug}>
            <ArticleIcon />
            <Link href={articleHref(article)}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link className={styles.viewAll} href={categoryHref(category)}>
        View all <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
