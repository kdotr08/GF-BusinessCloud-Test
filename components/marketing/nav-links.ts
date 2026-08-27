import type { NavLink } from "@/components/marketing/Header";

// Single source of truth for the global site nav (logo row + Platform mega
// menu) so every page — not just the homepage — renders the same links.
export const MAIN_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "#product",
    label: "Platform",
    mega: {
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
          { label: "Security & compliance", href: "/security" },
        ],
      ],
      listTitle: "Explore",
      listItems: [
        { label: "Demo", href: "/demo" },
        { label: "Support", href: "/support" },
        { label: "Business Estate", href: "/pricing#estate" },
        { label: "Institutional & Central Government", href: "/pricing#institutional" },
      ],
      banner: {
        title: "See Darcy AI build a form live",
        cta: "Book a demo",
        href: "/demo",
      },
    },
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/successes", label: "Successes" },
  { href: "/resources", label: "Resources" },
];
