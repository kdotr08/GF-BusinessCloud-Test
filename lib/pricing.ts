export type Plan = {
  name: string;
  base: number;
  services: number;
  subs: number;
  actions: number;
  extraService: number;
  subRate: number;
  actionRate: number;
};

// Plan data itself now lives in data/plans.csv (see lib/content.ts's loadPlans,
// server-only) so it can be edited without touching code. These functions stay
// pure and plan-agnostic so they're safe to import from client components too.
export function recommendPlan(plans: Plan[], services: number, subs: number, actions: number): Plan {
  for (const plan of plans) {
    if (services <= plan.services && subs <= plan.subs && actions <= plan.actions) {
      return plan;
    }
  }
  return plans[plans.length - 1];
}

export type PricingEstimate = {
  plan: Plan;
  serviceCost: number;
  subCost: number;
  actionCost: number;
  total: number;
  needsInstitutionalReview: boolean;
};

export function estimateCost(
  plans: Plan[],
  services: number,
  subs: number,
  actions: number,
  needsComplexFeatures: boolean,
  needsInstitutionalSupport: boolean
): PricingEstimate {
  const plan = recommendPlan(plans, services, subs, actions);
  const extraServices = Math.max(0, services - plan.services);
  const extraSubs = Math.max(0, subs - plan.subs);
  const extraActions = Math.max(0, actions - plan.actions);

  const serviceCost = extraServices * plan.extraService;
  const subCost = extraSubs * plan.subRate;
  const actionCost = extraActions * plan.actionRate;
  const total = plan.base + serviceCost + subCost + actionCost;

  const needsInstitutionalReview =
    needsInstitutionalSupport || (needsComplexFeatures && services > 20);

  return { plan, serviceCost, subCost, actionCost, total, needsInstitutionalReview };
}

export function formatGbp(n: number): string {
  return "£" + Math.round(n).toLocaleString("en-GB", { maximumFractionDigits: 0 });
}

export function formatInt(n: number): string {
  return n.toLocaleString("en-GB");
}
