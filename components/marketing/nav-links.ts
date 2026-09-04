import type { NavLink } from "@/components/marketing/Header";

// Single source of truth for the global site nav (logo row + Platform mega
// menu) so every page — not just the homepage — renders the same links.
export const MAIN_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "#product",
    label: "Platform",
    mega: {
      compact: true,
      slimExplore: true,
      gridTitle: "Platform",
      gridColumns: [
        [
          { label: "Features", href: "/features" },
          { label: "Templates", href: "/templates" },
          { label: "Workflow", href: "/workflow" },
        ],
        [
          { label: "Analytics", href: "/analytics" },
          { label: "Integrations", href: "/integrations" },
          { label: "Security & Compliance", href: "/security" },
        ],
      ],
      listTitle: "Explore",
      listItems: [
        { label: "Demo", href: "/demo" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Support", href: "/support" },
      ],
      banner: {
        title: "See Darcy AI build a form live",
        cta: "Book a demo",
        href: "/contact",
      },
    },
  },
  {
    href: "/pricing",
    label: "Pricing",
    mega: {
      compact: true,
      narrow: true,
      gridTitle: "Pricing",
      gridColumns: [
        [
          { label: "Business Cloud Plans", href: "/pricing#plans" },
          { label: "Pricing Calculator", href: "/pricing#calculator" },
        ],
      ],
      listTitle: "For larger organisations",
      listItems: [
        { label: "Business Estate", href: "/business-estate" },
        { label: "Institutional & Central Government", href: "/institutional" },
      ],
      banner: {
        title: "Find the right plan for your organisation",
        cta: "Compare Pricing",
        href: "/pricing",
      },
    },
  },
  { href: "/successes", label: "Successes" },
  { href: "/resources", label: "Resources" },
];
