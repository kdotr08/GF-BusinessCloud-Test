"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./documentation.module.css";

type SearchArticle = { title: string; href: string; category: string };

export function DocumentationSearch({ articles }: { articles: SearchArticle[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (term.length < 2) return [];
    return articles.filter((article) => `${article.title} ${article.category}`.toLocaleLowerCase().includes(term)).slice(0, 8);
  }, [articles, query]);

  return (
    <div className={styles.searchWrap}>
      <label className="sr-only" htmlFor="documentation-search">Search documentation</label>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
        <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
      <input
        id="documentation-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search documentation"
        autoComplete="off"
      />
      {query.trim().length >= 2 && (
        <div className={styles.searchResults}>
          {results.length ? results.map((article) => (
            <Link key={article.href} href={article.href}>
              <span>{article.title}</span>
              <small>{article.category}</small>
            </Link>
          )) : <p>No matching articles found.</p>}
        </div>
      )}
    </div>
  );
}

