import documentationData from "@/data/documentation.json";

export type DocumentationArticle = {
  slug: string;
  title: string;
  content: string;
};

export type DocumentationCategory = {
  title: string;
  slug: string;
  articles: DocumentationArticle[];
};

export const documentationCategories = documentationData.categories as DocumentationCategory[];

export function articleHref(article: DocumentationArticle) {
  return `/resources/documentation/article/${article.slug}`;
}

export function categoryHref(category: DocumentationCategory) {
  return `/resources/documentation/category/${category.slug}`;
}

export function getDocumentationCategory(slug: string) {
  return documentationCategories.find((category) => category.slug === slug);
}

export function getDocumentationArticle(slug: string) {
  for (const category of documentationCategories) {
    const article = category.articles.find((candidate) => candidate.slug === slug);
    if (article) return { article, category };
  }
  return undefined;
}

