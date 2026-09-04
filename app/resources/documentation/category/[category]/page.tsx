import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentationArticleLayout } from "@/components/documentation/DocumentationArticleLayout";
import { documentationCategories, getDocumentationCategory } from "@/lib/documentation";

export function generateStaticParams() {
  return documentationCategories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getDocumentationCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.title} documentation`,
    description: `Explore ${category.articles.length} Govform.com articles about ${category.title.toLocaleLowerCase()}.`,
  };
}

export default function DocumentationCategoryPage({ params }: { params: { category: string } }) {
  const category = getDocumentationCategory(params.category);
  if (!category || !category.articles[0]) notFound();
  return <DocumentationArticleLayout article={category.articles[0]} category={category} />;
}

