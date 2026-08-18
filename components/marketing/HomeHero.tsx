import { Header } from "@/components/marketing/Header";
import { OrganisationLogoMarquee } from "@/components/marketing/OrganisationLogoMarquee";
import { TypingEyebrow } from "@/components/marketing/TypingEyebrow";
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
      <div className={`wrap relative z-10 ${styles.heroContent}`}>
        <Header
          links={NAV_LINKS}
          cta={{ href: "/pricing#institutional", label: "Talk to us" }}
          variant="light"
        />

        <div className={styles.heroGrid}>
          <TypingEyebrow
            className={`${styles.heroReveal} ${styles.heroRevealEyebrow} xl:mb-5 2xl:mb-6`}
            eager
          >
            SECURE DIGITAL SERVICE PLATFORM
          </TypingEyebrow>
          <h1
            className={`${styles.heroReveal} ${styles.heroRevealHeading} max-w-[26ch] text-[34px] font-semibold leading-[1.08] text-navy sm:text-[38px] lg:m-0 lg:text-[44px] xl:max-w-none xl:whitespace-nowrap xl:text-[52px] 2xl:text-[64px]`}
          >
            Digital services built for
            <br className="hidden lg:block" /> serious organisations.
          </h1>
          <p
            className={`${styles.heroReveal} ${styles.heroRevealBody} max-w-[738px] text-sm text-navy/75 sm:text-[15px] lg:mt-4 lg:text-base xl:mb-0 xl:max-w-[860px] xl:text-lg 2xl:mt-5 2xl:max-w-[980px] 2xl:text-xl 2xl:leading-[1.45]`}
          >
            Build accessible forms and services, automate workflows, and manage sensitive
            information on a secure platform trusted in UK public services. Now available to
            organisations everywhere.
          </p>

          <div
            className={`${styles.heroReveal} ${styles.heroRevealButtons} mt-3.5 flex flex-wrap justify-center gap-3 xl:mt-8 2xl:mt-9 2xl:gap-4`}
          >
            <a
              className="btn-pill-secondary btn-hover-shrink bg-white shadow-sm 2xl:h-14 2xl:px-7 2xl:text-[17px]"
              href="/pricing#institutional"
            >
              Talk to us
            </a>
            <a
              className={`btn-pill-primary ${styles.heroPrimaryCta} 2xl:h-14 2xl:pl-7 2xl:text-[17px]`}
              href="/pricing#plans"
            >
              <span className={styles.heroCtaLabel}>Start building free</span>
              <span className={`btn-pill-icon ${styles.heroCtaIcon} 2xl:h-11 2xl:w-11`}>
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
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
        </div>
      </div>

      <video className={styles.heroVideo} autoPlay muted loop playsInline poster="/videos/hero-poster.jpg">
        <source src="/videos/hero_bg1.mp4" type="video/mp4" />
      </video>

      <OrganisationLogoMarquee />
    </header>
  );
}
