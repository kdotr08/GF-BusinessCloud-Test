import shared from "./pricing.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

type Track = {
  name: string;
  audience: string;
  price: string;
  bullets: string[];
  cta: string;
  href: string;
  ctaVariant: "primary" | "secondary";
};

const TRACKS: Track[] = [
  {
    name: "Business Cloud",
    audience: "For teams that configure and manage their own services",
    price: "From £75/mo",
    bullets: ["Self-serve build & launch", "Docs and examples, self-service first", "Ticket-based product support"],
    cta: "See Business Cloud pricing",
    href: "/pricing#plans",
    ctaVariant: "secondary",
  },
  {
    name: "Business Estate",
    audience: "For organisations running a large form estate",
    price: "From £18,000/yr",
    bullets: ["100+ live services", "Portfolio economics", "Light-touch product support"],
    cta: "See Estate pricing",
    href: "/pricing#estate",
    ctaVariant: "secondary",
  },
  {
    name: "Institutional & Central Government",
    audience: "For programmes that need us involved",
    price: "Custom",
    bullets: ["Dedicated support & SLAs", "Delivery and migration help", "Security assurance workshops"],
    cta: "Talk to us",
    href: "/pricing#institutional",
    ctaVariant: "primary",
  },
];

export function AudienceTracks() {
  return (
    <section className="py-16">
      <div className="wrap">
        <div className="mb-8 max-w-[62ch]">
          <TypingEyebrow className="border-[#00b4d8]/25 bg-[#00b4d8]/10 text-[#00b4d8]">
            Choose your route
          </TypingEyebrow>
          <h2 className="text-[30px]">One platform, three ways to work with it.</h2>
          <p className="muted">
            Most organisations start on Business Cloud and self-serve. Larger estates and central
            government programmes work with us directly.
          </p>
        </div>

        <div className={shared.plans}>
          {TRACKS.map((track) => (
            <div key={track.name} className={shared.planCard}>
              <div className="font-serif text-[22px]">{track.name}</div>
              <div className="mb-[18px] min-h-[32px] text-[13px] text-muted">{track.audience}</div>
              <div className="font-serif text-[28px] text-navy">{track.price}</div>
              <ul className="my-[18px] flex-grow space-y-2 text-[14px] text-muted">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-brand-blue">&bull;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                className={`btn w-full ${track.ctaVariant === "primary" ? "btn-primary" : "btn-secondary"}`}
                href={track.href}
              >
                {track.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
