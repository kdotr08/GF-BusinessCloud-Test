"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DIRECTORY_INTEGRATIONS,
  INTEGRATION_CATEGORIES,
  type DirectoryIntegration,
  type IntegrationCategory,
} from "./integration-directory-data";
import styles from "./integration-directory.module.css";

const categorySlug = (category: IntegrationCategory) =>
  category.toLowerCase().replaceAll(" and ", "-").replaceAll(" ", "-");

const CATEGORY_BY_SLUG = new Map(
  INTEGRATION_CATEGORIES.map((category) => [categorySlug(category), category]),
);

const CATEGORIES_WITH_COUNTS = INTEGRATION_CATEGORIES.map((category) => ({
  category,
  count: DIRECTORY_INTEGRATIONS.filter((item) => item.categories.includes(category)).length,
})).filter((item) => item.count > 0);

function readUrlFilters() {
  if (typeof window === "undefined") return { search: "", category: null as IntegrationCategory | null };
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("q") ?? "",
    category: CATEGORY_BY_SLUG.get(params.get("category") ?? "") ?? null,
  };
}

export function IntegrationLogo({ item }: { item: DirectoryIntegration }) {
  const { logo } = item;

  if (logo.kind === "icon") {
    return (
      <span className={styles.logo} style={{ background: logo.color }}>
        <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${logo.slug}.svg`} alt="" />
      </span>
    );
  }

  if (logo.kind === "asset") {
    return (
      <span className={styles.logo} style={{ background: logo.color }}>
        <img src={logo.src} alt="" />
      </span>
    );
  }

  return (
    <span className={styles.logo} style={{ background: logo.color }}>
      <span className={styles.logoMonogram}>{logo.text}</span>
    </span>
  );
}

export function IntegrationDirectory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<IntegrationCategory | null>(null);

  useEffect(() => {
    const syncFromUrl = () => {
      const filters = readUrlFilters();
      setSearch(filters.search);
      setCategory(filters.category);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const updateUrl = (nextSearch: string, nextCategory: IntegrationCategory | null) => {
    const url = new URL(window.location.href);
    const trimmedSearch = nextSearch.trim();

    if (trimmedSearch) url.searchParams.set("q", trimmedSearch);
    else url.searchParams.delete("q");

    if (nextCategory) url.searchParams.set("category", categorySlug(nextCategory));
    else url.searchParams.delete("category");

    window.history.replaceState({}, "", url);
  };

  const filteredIntegrations = useMemo(() => {
    const term = search.trim().toLowerCase();
    return DIRECTORY_INTEGRATIONS.filter((item) => {
      const matchesCategory = !category || item.categories.includes(category);
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        item.categories.some((c) => c.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const chooseCategory = (nextCategory: IntegrationCategory | null) => {
    setCategory(nextCategory);
    updateUrl(search, nextCategory);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    updateUrl(value, category);
  };

  const resetFilters = () => {
    setSearch("");
    setCategory(null);
    updateUrl("", null);
  };

  const hasActiveFilters = Boolean(search || category);

  return (
    <div className={styles.directory}>
      <div className={styles.filters} aria-label="Search and filter the integration directory">
        <div className={styles.searchField}>
          <label htmlFor="integration-directory-search">Search integrations</label>
          <input
            id="integration-directory-search"
            type="search"
            value={search}
            placeholder="Search integrations"
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>

        <div className={styles.categoryFilter}>
          <div className={styles.filterLabel} id="integration-category-label">
            Filter by category
          </div>

          <div className={styles.categoryButtons} role="group" aria-labelledby="integration-category-label">
            <button type="button" aria-pressed={category === null} onClick={() => chooseCategory(null)}>
              All integrations
            </button>
            {CATEGORIES_WITH_COUNTS.map((item) => (
              <button
                key={item.category}
                type="button"
                aria-pressed={category === item.category}
                onClick={() => chooseCategory(item.category)}
              >
                <span>{item.category}</span>
                <span className={styles.categoryCount} aria-label={`${item.count} integrations`}>
                  {item.count}
                </span>
              </button>
            ))}
          </div>

          <select
            className={styles.categorySelect}
            aria-labelledby="integration-category-label"
            value={category ?? ""}
            onChange={(event) => chooseCategory((event.target.value || null) as IntegrationCategory | null)}
          >
            <option value="">All integrations ({DIRECTORY_INTEGRATIONS.length})</option>
            {CATEGORIES_WITH_COUNTS.map((item) => (
              <option key={item.category} value={item.category}>
                {item.category} ({item.count})
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterSummary}>
          <p role="status" aria-live="polite">
            Showing {filteredIntegrations.length} of {DIRECTORY_INTEGRATIONS.length} integrations
          </p>
          <button type="button" className={styles.resetButton} onClick={resetFilters} disabled={!hasActiveFilters}>
            Reset filters
          </button>
        </div>
      </div>

      {filteredIntegrations.length > 0 ? (
        <ul className={styles.grid}>
          {filteredIntegrations.map((item) => (
            <li key={item.name} className={styles.card}>
              <div className={styles.cardHead}>
                <IntegrationLogo item={item} />
                <span className={styles.type}>{item.type}</span>
              </div>
              <h3 className={styles.cardName}>{item.name}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <p className={styles.cardCategories}>{item.categories.join(" · ")}</p>
              {item.learnMoreHref && (
                <a className={styles.learnMore} href={item.learnMoreHref}>
                  Learn more
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState} role="status">
          <h3>No integrations match your search</h3>
          <p>
            Try another term, reset the filters or{" "}
            <a href="/contact">contact us</a> to discuss a custom integration.
          </p>
          <button type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
