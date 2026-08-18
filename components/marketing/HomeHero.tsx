import { Header } from "@/components/marketing/Header";
import { OrganisationLogoMarquee } from "@/components/marketing/OrganisationLogoMarquee";
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
];

export function HomeHero() {
  return (
    <header className={`${styles.heroSection} pt-4`}>
      <div className="wrap relative z-10">
        <Header
          links={NAV_LINKS}
          cta={{ href: "/pricing#institutional", label: "Talk to us" }}
          variant="light"
        />

        <div className={styles.heroGrid}>
          <div className="eyebrow">SECURE DIGITAL SERVICE PLATFORM</div>
          <h1 className="max-w-[26ch] text-[34px] leading-[1.08] text-navy sm:text-[38px] lg:text-[44px] xl:max-w-none xl:whitespace-nowrap">
            Digital services built for serious organisations.
          </h1>
          <p className="max-w-[738px] text-sm text-navy/75 sm:text-[15px] lg:text-base">
            Build accessible forms and services, automate workflows, and manage sensitive
            information on a secure platform trusted in UK public services. Now available to
            organisations everywhere.
          </p>

          <div className="mt-3.5 flex flex-wrap justify-center gap-3">
            <a className="btn-pill-secondary" href="/pricing#institutional">
              Talk to us
            </a>
            <a className="btn-pill-primary" href="/pricing#plans">
              Start building free
              <span className="btn-pill-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M4 10L10 4M10 4H5M10 4V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-3.5 text-[12.5px] text-navy/50">
            Free to build and test. Plans start at £75/month when you go live.
          </div>
        </div>
      </div>

      <video className={styles.heroVideo} autoPlay muted loop playsInline poster="/videos/hero-poster.jpg">
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>

      <OrganisationLogoMarquee />
    </header>
  );
}
