"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DIRECTORY_FEATURES,
  FEATURE_CATEGORIES,
  type DirectoryFeature,
  type FeatureCategory,
} from "./feature-directory-data";
import styles from "./feature-directory.module.css";

const categorySlug = (category: FeatureCategory) =>
  category.toLowerCase().replaceAll(" and ", "-").replaceAll(" ", "-");

const CATEGORY_BY_SLUG = new Map(
  FEATURE_CATEGORIES.map((category) => [categorySlug(category), category]),
);

const CATEGORIES_WITH_COUNTS = FEATURE_CATEGORIES.map((category) => ({
  category,
  count: DIRECTORY_FEATURES.filter((feature) => feature.category === category).length,
})).filter((item) => item.count > 0);

function readUrlFilters() {
  if (typeof window === "undefined") return { search: "", category: null };
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("q") ?? "",
    category: CATEGORY_BY_SLUG.get(params.get("category") ?? "") ?? null,
  };
}

function PlanStatus({
  feature,
  plan,
  included,
}: {
  feature: DirectoryFeature;
  plan: string;
  included: boolean;
}) {
  return (
    <span
      className={included ? styles.included : styles.notIncluded}
      aria-label={`${feature.name} is ${included ? "included" : "not included"} in ${plan}`}
    >
      <span className={styles.statusDot} aria-hidden="true" />
      {included ? "Included" : "Not included"}
    </span>
  );
}

export function FeatureDirectory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<FeatureCategory | null>(null);

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

  const updateUrl = (nextSearch: string, nextCategory: FeatureCategory | null) => {
    const url = new URL(window.location.href);
    const trimmedSearch = nextSearch.trim();

    if (trimmedSearch) url.searchParams.set("q", trimmedSearch);
    else url.searchParams.delete("q");

    if (nextCategory) url.searchParams.set("category", categorySlug(nextCategory));
    else url.searchParams.delete("category");

    window.history.replaceState({}, "", url);
  };

  const filteredFeatures = useMemo(() => {
    const term = search.trim().toLowerCase();
    return DIRECTORY_FEATURES.filter((item) => {
      const matchesCategory = !category || item.category === category;
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const chooseCategory = (nextCategory: FeatureCategory | null) => {
    setSearch("");
    setCategory(nextCategory);
    updateUrl("", nextCategory);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory(null);
    updateUrl("", null);
  };

  return (
    <div className={styles.directory}>
      <div className={styles.filters} aria-label="Filter the full feature directory">
        <div className={styles.searchField}>
          <label htmlFor="feature-directory-search">Search features</label>
          <input
            id="feature-directory-search"
            type="search"
            value={search}
            placeholder="Search by feature, description or category"
            onChange={(event) => {
              setSearch(event.target.value);
              updateUrl(event.target.value, category);
            }}
          />
        </div>

        <div className={styles.categoryFilter}>
          <div className={styles.filterLabel}>Filter by category</div>
          <div className={styles.categoryButtons}>
            <button
              type="button"
              aria-pressed={category === null}
              onClick={() => chooseCategory(null)}
            >
              All capabilities
            </button>
            {CATEGORIES_WITH_COUNTS.map((item) => (
              <button
                key={item.category}
                type="button"
                aria-pressed={category === item.category}
                onClick={() => chooseCategory(item.category)}
              >
                <span>{item.category}</span>
                <span className={styles.categoryCount} aria-label={`${item.count} capabilities`}>
                  {item.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterSummary}>
          <p role="status" aria-live="polite">
            Showing {filteredFeatures.length} of {DIRECTORY_FEATURES.length} capabilities
          </p>
          {(search || category) && (
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div
        className={styles.tableWrap}
        role="region"
        aria-label="Govform.com feature and plan comparison"
        tabIndex={0}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Business Cloud</th>
              <th scope="col">Business Estate</th>
              <th scope="col">Institutional and Central Government</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeatures.map((item) => (
              <tr key={item.name}>
                <th scope="row">
                  <span className={styles.featureName}>{item.name}</span>
                  <span className={styles.featureDescription}>{item.description}</span>
                  <span className={styles.featureCategory}>{item.category}</span>
                </th>
                <td>
                  <PlanStatus
                    feature={item}
                    plan="Business Cloud"
                    included={item.plans.businessCloud}
                  />
                </td>
                <td>
                  <PlanStatus
                    feature={item}
                    plan="Business Estate"
                    included={item.plans.businessEstate}
                  />
                </td>
                <td>
                  <PlanStatus
                    feature={item}
                    plan="Institutional and Central Government"
                    included={item.plans.institutional}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredFeatures.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No matching capabilities</h3>
            <p>Try a different search term or clear the active category filter.</p>
            <button type="button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
