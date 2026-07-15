import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";
import type { Plan } from "@/lib/pricing";
import { SHEET_TABS } from "@/lib/sheets";

// Server-only: reads the editable pricing tables, preferring the live
// Google Sheet (PRICING_SHEET_ID + a tab name configured in lib/sheets.ts)
// and falling back to the matching file in /data if the sheet id/tab isn't
// set yet or the fetch fails. Never import this file from a "use client"
// component — pass the loaded data down as props instead (see
// app/pricing/page.tsx).
//
// Uses the gviz/tq endpoint (queries by tab NAME, not the numeric gid) —
// works for any sheet shared as "Anyone with the link" (Viewer), no
// "Publish to web" step needed. Google renders booleans as "TRUE"/"FALSE"
// here, so loaders below compare case-insensitively.
async function readCsvRaw(filename: string): Promise<string> {
  const sheetId = process.env.PRICING_SHEET_ID;
  const tabName = SHEET_TABS[filename];

  if (sheetId && tabName) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`;
    try {
      // Revalidate every 60s (ISR-style) so sheet edits show up without a
      // full redeploy, without hitting Google on every single request.
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (res.ok) return await res.text();
      console.warn(
        `[content] Sheet fetch for ${filename} returned ${res.status}, falling back to local CSV`
      );
    } catch (err) {
      console.warn(`[content] Sheet fetch for ${filename} failed, falling back to local CSV`, err);
    }
  }

  const filePath = path.join(process.cwd(), "data", filename);
  return fs.readFileSync(filePath, "utf-8");
}

async function readCsv<T extends Record<string, string>>(filename: string): Promise<T[]> {
  const raw = await readCsvRaw(filename);
  return parse(raw, { columns: true, skip_empty_lines: true, trim: true }) as T[];
}

export async function loadPlans(): Promise<Plan[]> {
  const rows = await readCsv<Record<string, string>>("plans.csv");
  return rows.map((r) => ({
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

export async function loadPlanCards(): Promise<PlanCardData[]> {
  const [cards, features] = await Promise.all([
    readCsv<Record<string, string>>("plan-cards.csv"),
    readCsv<{ plan: string; label: string; value: string }>("plan-features.csv"),
  ]);
  return cards.map((c) => ({
    name: c.name,
    audience: c.audience,
    price: c.price,
    sub: c.sub,
    popular: c.popular?.toLowerCase() === "true",
    cta: c.cta,
    ctaVariant: c.ctaVariant as "primary" | "secondary",
    rows: features.filter((f) => f.plan === c.name).map((f) => [f.label, f.value] as [string, string]),
  }));
}

export async function loadPlanComparison(): Promise<[string, string][]> {
  const rows = await readCsv<{ old_way: string; new_way: string }>("plan-comparison.csv");
  return rows.map((r) => [r.old_way, r.new_way]);
}

export type Addon = { title: string; price: string; description: string };
export async function loadAddons(): Promise<Addon[]> {
  return readCsv<Addon>("addons.csv");
}

export type GoLiveRow = { name: string; price: string; use_when: string };
export async function loadGoLive(): Promise<GoLiveRow[]> {
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
export async function loadEstateBands(): Promise<EstateBand[]> {
  return readCsv<EstateBand>("estate-bands.csv");
}

export type Scenario = { title: string; price: string; description: string };
export async function loadScenarios(): Promise<Scenario[]> {
  return readCsv<Scenario>("scenarios.csv");
}

export async function loadInstitutionalComparison(): Promise<[string, string][]> {
  const rows = await readCsv<{ business_cloud: string; institutional: string }>(
    "institutional-comparison.csv"
  );
  return rows.map((r) => [r.business_cloud, r.institutional]);
}

export type HeroRung = { name: string; price: string; note: string; active: boolean };
export async function loadHeroRungs(): Promise<HeroRung[]> {
  const rows = await readCsv<Record<string, string>>("hero-rungs.csv");
  return rows.map((r) => ({
    name: r.name,
    price: r.price,
    note: r.note,
    active: r.active?.toLowerCase() === "true",
  }));
}
