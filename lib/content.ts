import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";
import type { Plan } from "@/lib/pricing";

// Server-only: reads the editable spreadsheets in /data. Never import this
// file from a "use client" component — pass the loaded data down as props
// instead (see app/pricing/page.tsx).
function readCsv<T extends Record<string, string>>(filename: string): T[] {
  const filePath = path.join(process.cwd(), "data", filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return parse(raw, { columns: true, skip_empty_lines: true, trim: true }) as T[];
}

export function loadPlans(): Plan[] {
  return readCsv<Record<string, string>>("plans.csv").map((r) => ({
    name: r.name,
    base: Number(r.base),
    services: Number(r.services),
    subs: Number(r.subs),
    actions: Number(r.actions),
    extraService: Number(r.extraService),
    subRate: Number(r.subRate),
    actionRate: Number(r.actionRate),
  }));
}

export type PlanCardData = {
  name: string;
  audience: string;
  price: string;
  sub: string;
  popular?: boolean;
  rows: [string, string][];
  cta: string;
  ctaVariant: "primary" | "secondary";
};

export function loadPlanCards(): PlanCardData[] {
  const cards = readCsv<Record<string, string>>("plan-cards.csv");
  const features = readCsv<{ plan: string; label: string; value: string }>("plan-features.csv");
  return cards.map((c) => ({
    name: c.name,
    audience: c.audience,
    price: c.price,
    sub: c.sub,
    popular: c.popular === "true",
    cta: c.cta,
    ctaVariant: c.ctaVariant as "primary" | "secondary",
    rows: features.filter((f) => f.plan === c.name).map((f) => [f.label, f.value] as [string, string]),
  }));
}

export function loadPlanComparison(): [string, string][] {
  return readCsv<{ old_way: string; new_way: string }>("plan-comparison.csv").map((r) => [
    r.old_way,
    r.new_way,
  ]);
}

export type Addon = { title: string; price: string; description: string };
export function loadAddons(): Addon[] {
  return readCsv<Addon>("addons.csv");
}

export type GoLiveRow = { name: string; price: string; use_when: string };
export function loadGoLive(): GoLiveRow[] {
  return readCsv<GoLiveRow>("go-live.csv");
}

export type EstateBand = {
  plan: string;
  annual_price: string;
  live_services: string;
  annual_submissions: string;
  annual_actions: string;
  darcy_assists: string;
  ai_form_builds: string;
};
export function loadEstateBands(): EstateBand[] {
  return readCsv<EstateBand>("estate-bands.csv");
}

export type Scenario = { title: string; price: string; description: string };
export function loadScenarios(): Scenario[] {
  return readCsv<Scenario>("scenarios.csv");
}

export function loadInstitutionalComparison(): [string, string][] {
  return readCsv<{ business_cloud: string; institutional: string }>(
    "institutional-comparison.csv"
  ).map((r) => [r.business_cloud, r.institutional]);
}

export type HeroRung = { name: string; price: string; note: string; active: boolean };
export function loadHeroRungs(): HeroRung[] {
  return readCsv<Record<string, string>>("hero-rungs.csv").map((r) => ({
    name: r.name,
    price: r.price,
    note: r.note,
    active: r.active === "true",
  }));
}
