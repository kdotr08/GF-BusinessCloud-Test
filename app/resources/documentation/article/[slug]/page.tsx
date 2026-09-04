import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentationArticleLayout } from "@/components/documentation/DocumentationArticleLayout";
import { documentationCategories, getDocumentationArticle } from "@/lib/documentation";

export function generateStaticParams() {
  return documentationCategories.flatMap((category) => category.articles.map((article) => ({ slug: article.slug })));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const result = getDocumentationArticle(params.slug);
  if (!result) return {};
  return {
    title: result.article.title,
    description: `${result.article.title} guidance for the Govform.com digital service builder.`,
  };
}

export default function DocumentationArticlePage({ params }: { params: { slug: string } }) {
  const result = getDocumentationArticle(params.slug);
  if (!result) notFound();
  return <DocumentationArticleLayout article={result.article} category={result.category} />;
}

