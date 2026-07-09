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

export const PLANS: Plan[] = [
  { name: "Launch", base: 75, services: 2, subs: 2500, actions: 10000, extraService: 10, subRate: 0.08, actionRate: 0.006 },
  { name: "Portfolio", base: 195, services: 12, subs: 15000, actions: 75000, extraService: 9, subRate: 0.035, actionRate: 0.0035 },
  { name: "Scale", base: 595, services: 50, subs: 75000, actions: 300000, extraService: 8.5, subRate: 0.018, actionRate: 0.0015 },
];

export function recommendPlan(services: number, subs: number, actions: number): Plan {
  for (const plan of PLANS) {
    if (services <= plan.services && subs <= plan.subs && actions <= plan.actions) {
      return plan;
    }
  }
  return PLANS[PLANS.length - 1];
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
  services: number,
  subs: number,
  actions: number,
  needsComplexFeatures: boolean,
  needsInstitutionalSupport: boolean
): PricingEstimate {
  const plan = recommendPlan(services, subs, actions);
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
