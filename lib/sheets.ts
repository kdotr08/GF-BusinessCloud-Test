// Maps each editable table to its tab name in the shared Google Sheet, so
// lib/content.ts knows which tab to fetch for which table. Tab names aren't
// secret, so they're safe to check in — only the spreadsheet id itself
// (PRICING_SHEET_ID) lives in env vars.
//
// Leave a value empty ("") until that tab exists; lib/content.ts falls back
// to the matching file in /data for any table without a configured tab.
export const SHEET_TABS: Record<string, string> = {
  "plans.csv": "plans",
  "plan-cards.csv": "plan-cards",
  "plan-features.csv": "plan-features",
  "plan-comparison.csv": "plan-comparison",
  "addons.csv": "addons",
  "go-live.csv": "go-live",
  "estate-bands.csv": "estate-bands",
  "scenarios.csv": "scenarios",
  "institutional-comparison.csv": "institutional-comparison",
  "hero-rungs.csv": "hero-rungs",
};
