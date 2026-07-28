import { Header } from "@/components/marketing/Header";
import { WorkflowCard } from "@/components/marketing/WorkflowCard";
import shared from "./pricing.module.css";
import styles from "./home.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "#product",
    label: "Platform",
    mega: {
      gridTitle: "Platform",
      gridColumns: [
        [
          { label: "Server-side forms", href: "/#server-side-forms" },
          { label: "Automation & webhooks", href: "/#automation-webhooks" },
          { label: "Darcy AI", href: "/#darcy-ai" },
          { label: "Secure file handling & evidence", href: "/#malware-scanning" },
        ],
        [
          { label: "Accessible by default", href: "/#accessible-by-default" },
          { label: "Custom domains", href: "/#custom-domains" },
          { label: "Security & compliance", href: "/security" },
          { label: "Business Estate", href: "/pricing#estate" },
          { label: "Institutional & Central Government", href: "/pricing#institutional" },
        ],
      ],
      listTitle: "Explore",
      listItems: [
        { label: "Demo", href: "/demo" },
        { label: "Platform", href: "/platform" },
        { label: "Workflow", href: "/workflow" },
        { label: "Security", href: "/security" },
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
  { href: "/#contact", label: "Contact" },
];

export function HomeHero() {
  return (
    <header className={`${shared.hero} pt-14`}>
      <div className="wrap">
        <Header links={NAV_LINKS} cta={{ href: "/pricing#institutional", label: "Talk to us" }} />

        <div className={styles.heroGrid}>
          <div>
            <div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">
              Digital service forms platform
            </div>
            <h1 className="max-w-[16ch] text-[44px] leading-[1.08] text-white">
              Digital services built to withstand scrutiny.
            </h1>
            <p className="max-w-[48ch] text-[19px] text-white/75">
              Govform.com is server-side infrastructure for accessible, secure, production-grade
              forms for organisations that answer to regulators, auditors and the public
              they serve.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-secondary" href="/pricing#plans">
                Start building free
              </a>
              <a className="btn btn-ghost" href="/pricing#institutional">
                Talk to us
              </a>
            </div>
            <div className="mt-3.5 text-[12.5px] text-white/50">
              Free to build and test. Plans start at £75/month when you go live.
            </div>
          </div>

          <WorkflowCard />
        </div>
      </div>
    </header>
  );
}
