import type { Metadata } from "next";
import { DocumentationCard } from "@/components/documentation/DocumentationCard";
import { DocumentationSearch } from "@/components/documentation/DocumentationSearch";
import { articleHref, documentationCategories } from "@/lib/documentation";
import styles from "@/components/documentation/documentation.module.css";

export const metadata: Metadata = {
  title: "Govform.com Documentation",
  description: "Guidance for designing, building, integrating, testing and publishing digital services with Govform.com.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const helpCentreCategories = documentationCategories.filter((category) =>
    category.slug.startsWith("help-centre-"),
  );
  const documentationTopicCategories = documentationCategories.filter(
    (category) => !category.slug.startsWith("help-centre-"),
  );
  const articles = documentationCategories.flatMap((category) =>
    category.articles.map((article) => ({
      title: article.title,
      category: category.title,
      href: articleHref(article),
    })),
  );

  return (
    <main className={styles.landingPage}>
      <section className={styles.hero}>
        <div className={`bg-dark-glow ${styles.heroBackground}`} aria-hidden="true" />
        <div className={`wrap subpage-hero-clearance ${styles.heroInner}`}>
          <div className="eyebrow border-[#88deeb]/30 bg-[#88deeb]/10 text-[#88deeb]">Documentation</div>
          <h1>How can we help you today?</h1>
          <p>Find guidance for building, configuring and operating digital services with Govform.com.</p>
          <DocumentationSearch articles={articles} />
        </div>
      </section>

      <section className={styles.helpCentreSection}>
        <div className="wrap">
          <div className={styles.catalogueIntro}>
            <div>
              <div className="eyebrow">Help Centre</div>
              <h2>Answers to common questions</h2>
            </div>
            <p>Find quick answers about Govform.com, its features, security, use cases, architecture and integrations.</p>
          </div>
          <div className={`${styles.categoryGrid} ${styles.helpCentreGrid}`}>
            {helpCentreCategories.map((category) => (
              <DocumentationCard
                key={category.slug}
                category={category}
                title={category.title.replace(/^Help Centre:\s*/, "")}
                maxArticles={
                  category.slug === "help-centre-security-compliance" ||
                  category.slug === "help-centre-architecture-integration"
                    ? 3
                    : 5
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.catalogue}>
        <div className="wrap">
          <div className={styles.catalogueIntro}>
            <div>
              <div className="eyebrow">Browse by topic</div>
              <h2>Explore the documentation</h2>
            </div>
            <p>Choose a topic to see its most-used guidance, or view the complete set of articles in that category.</p>
          </div>
          <div className={styles.categoryGrid}>
            {documentationTopicCategories.map((category) => (
              <DocumentationCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
