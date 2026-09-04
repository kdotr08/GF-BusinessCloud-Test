import Link from "next/link";
import { ArticleIcon } from "./ArticleIcon";
import { DocumentationCard } from "./DocumentationCard";
import {
  articleHref,
  categoryHref,
  documentationCategories,
  type DocumentationArticle,
  type DocumentationCategory,
} from "@/lib/documentation";
import styles from "./documentation.module.css";

export function DocumentationArticleLayout({
  article,
  category,
}: {
  article: DocumentationArticle;
  category: DocumentationCategory;
}) {
  const related = documentationCategories.filter((candidate) => candidate.slug !== category.slug).slice(0, 3);
  const isHelpCentreCategory = category.slug.startsWith("help-centre-");
  const helpCentreTopic = category.title.replace(/^Help Centre:\s*/, "");
  const categoryDescription = isHelpCentreCategory
    ? category.slug === "help-centre-general"
      ? "Answers to common questions about Govform.com."
      : `Answers to common questions about ${helpCentreTopic.toLocaleLowerCase()}.`
    : `Explore Govform.com guidance, configuration details and practical steps for ${category.title.toLocaleLowerCase()}.`;

  return (
    <main className={styles.innerPage}>
      <div className="wrap">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/resources">Resources</Link><span aria-hidden="true">/</span>
          <Link href="/resources">Documentation</Link><span aria-hidden="true">/</span>
          <Link href={categoryHref(category)}>{category.title}</Link>
        </nav>

        <header className={styles.categoryHeader}>
          <div className="eyebrow">Documentation</div>
          <h1>{category.title}</h1>
          <p>{categoryDescription}</p>
        </header>

        <div className={styles.articleLayout}>
          <aside className={styles.articleNav} aria-label={`${category.title} articles`}>
            <p>{category.articles.length} {category.articles.length === 1 ? "article" : "articles"}</p>
            <ul>
              {category.articles.map((item) => (
                <li key={item.slug}>
                  <ArticleIcon />
                  <Link href={articleHref(item)} aria-current={item.slug === article.slug ? "page" : undefined}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <article className={styles.articlePanel}>
            <h1>{article.title}</h1>
            <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        </div>

        <section className={styles.exploreMore}>
          <div className={styles.exploreHeading}>
            <div>
              <div className="eyebrow">Keep exploring</div>
              <h2>Explore more documentation</h2>
            </div>
            <Link href="/resources">View all categories →</Link>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => <DocumentationCard key={item.slug} category={item} compact />)}
          </div>
        </section>
      </div>
    </main>
  );
}
