import shared from "./pricing.module.css";
import styles from "./home.module.css";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MarketingPillButton } from "./MarketingPillButton";
import { TypingEyebrow } from "./TypingEyebrow";

type Track = {
  name: string;
  audience: string;
  price: string;
  bullets: string[];
  cta: string;
  href: string;
  ctaVariant: "primary" | "secondary" | "white-icon";
  ctaClassName?: string;
  emphasized?: boolean;
  icon: React.ReactNode;
};

const CloudIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18a4.5 4.5 0 0 1-.5-8.98 5.5 5.5 0 0 1 10.78-1.7A4 4 0 0 1 17 18H7Z" />
  </svg>
);

const EstateIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="6" height="10" />
    <rect x="14" y="6" width="6" height="14" />
    <path d="M4 20h16" />
  </svg>
);

const InstitutionalIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10.5 12 5l8 5.5" />
    <path d="M5 10.5V19M9.5 10.5V19M14.5 10.5V19M19 10.5V19" />
    <path d="M3.5 19h17" />
  </svg>
);

const TRACKS: Track[] = [
  {
    name: "Business Cloud",
    audience: "For teams that want to create, test and publish their own digital services.",
    price: "From £75/mo",
    bullets: ["Self-serve build & launch", "Docs and examples, self-service first", "Ticket-based product support"],
    cta: "See Business Cloud pricing",
    href: "/pricing#plans",
    ctaVariant: "secondary",
    icon: CloudIcon,
  },
  {
    name: "Business Estate",
    audience: "For organisations managing multiple services, teams and environments with additional oversight and governance.",
    price: "From £18,000/yr",
    bullets: ["100+ live services", "Portfolio economics", "Light-touch product support"],
    cta: "See Estate pricing",
    href: "/business-estate#pricing",
    ctaVariant: "secondary",
    icon: EstateIcon,
  },
  {
    name: "Enterprise",
    audience: "For organisations requiring advanced integrations, security controls, support and scalable platform management.",
    price: "Custom pricing",
    bullets: ["Dedicated support & SLAs", "Delivery and migration help", "Security assurance workshops"],
    cta: "Talk to us",
    href: "/contact",
    ctaVariant: "white-icon",
    ctaClassName: `${styles.pillIconSolidDark} ${styles.pillEnterpriseCta}`,
    emphasized: true,
    icon: InstitutionalIcon,
  },
];

export function AudienceTracks() {
  return (
    <section className={`bg-panel-alt ${styles.audienceTracksSection}`}>
      <ScrollRevealGroup className={`wrap ${styles.audienceTracksLayout}`}>
        <div className="section-intro">
          <div data-reveal-item style={{ transitionDelay: "0ms" }}>
            <TypingEyebrow className="border-[#00b4d8]/25 bg-[#00b4d8]/10 text-[#00b4d8]">
              Choose your route
            </TypingEyebrow>
          </div>
          <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">One platform, three ways to work with it.</h2>
          <p data-reveal-item style={{ transitionDelay: "320ms" }} className="muted">
            Start with the level of support you need.
          </p>
        </div>

        <div className={shared.plans}>
          {TRACKS.map((track, index) => (
            <div
              key={track.name}
              data-reveal-item
              style={{ transitionDelay: `${500 + index * 170}ms` }}
              className={`${shared.planCard} ${shared.trackCard} ${track.emphasized ? shared.trackCardEmphasized : ""}`}
            >
              <div className={shared.trackIconRow}>
                <span className={shared.trackIcon}>{track.icon}</span>
                <span className={shared.trackName}>{track.name}</span>
              </div>
              <div className={shared.trackDesc}>{track.audience}</div>
              <div className={shared.trackPrice}>{track.price}</div>
              <ul className={shared.trackList}>
                {track.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className={shared.trackCheck}>&#10003;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <MarketingPillButton
                href={track.href}
                variant={track.ctaVariant}
                className={`${shared.trackCta} w-full ${track.ctaVariant === "secondary" ? "justify-center" : "justify-between"} ${track.ctaClassName ?? ""}`}
              >
                {track.cta}
              </MarketingPillButton>
            </div>
          ))}
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
