"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { ScrollRevealGroup } from "./ScrollRevealGroup";
import { MarketingPillButton } from "./MarketingPillButton";
import styles from "./home.module.css";
import { TypingEyebrow } from "./TypingEyebrow";

const INTEGRATION_PLATFORMS = [
  { name: "Microsoft SharePoint", icon: "microsoftsharepoint", color: "#038387" },
  { name: "Power Automate", icon: "powerautomate", color: "#0066ff" },
  { name: "Power Apps", icon: "powerapps", color: "#742774" },
  { name: "Power BI", icon: "powerbi", color: "#d7a900" },
  { name: "Salesforce", icon: "salesforce", color: "#00a1e0" },
  { name: "Jira", icon: "jira", color: "#2684ff" },
  { name: "ServiceNow", icon: "servicenow", color: "#4f8f78", asset: "/icons/integrations/servicenow.svg" },
  { name: "HubSpot", icon: "hubspot", color: "#ff7a59" },
  { name: "Microsoft Azure", icon: "microsoftazure", color: "#0078d4" },
  { name: "AWS S3", icon: "amazons3", color: "#e98200" },
  { name: "Google Cloud", icon: "googlecloud", color: "#4285f4" },
  { name: "Stripe", icon: "stripe", color: "#635bff" },
  { name: "PayPal", icon: "paypal", color: "#003087" },
  { name: "Box", icon: "box", color: "#0061d5" },
  { name: "OneDrive", icon: "microsoftonedrive", color: "#0078d4" },
  { name: "DocuSign", icon: "docusign", color: "#ffcc22" },
  { name: "Adobe Acrobat Sign", icon: "adobeacrobatreader", color: "#ec1c24" },
  { name: "Mailchimp", icon: "mailchimp", color: "#241c15" },
  { name: "Zendesk", icon: "zendesk", color: "#03363d" },
  { name: "Auth0", icon: "auth0", color: "#eb5424" },
  { name: "Google Analytics", icon: "googleanalytics", color: "#e37400" },
  { name: "SendGrid", icon: "sendgrid", color: "#1a82e2", asset: "/icons/integrations/sendgrid.svg" },
  { name: "Freshdesk", icon: "freshworks", color: "#25c16f", asset: "/icons/integrations/freshdesk.svg" },
  { name: "Worldpay", icon: "worldpay", color: "#d71920", asset: "/icons/integrations/worldpay.svg" },
];

const CONNECTION_ACTIONS = [
  {
    title: "APIs",
    body: "Call existing platforms mid-journey and securely exchange the data each step needs.",
  },
  {
    title: "Webhooks",
    body: "Send signed events as submissions progress so downstream systems stay in sync.",
  },
  {
    title: "Notify & email",
    body: "Trigger confirmations, reminders and status updates without creating manual hand-offs.",
  },
  {
    title: "Map & transform",
    body: "Reshape validated form data into the format required by each destination.",
  },
];

type OrbitStyle = CSSProperties & {
  "--integration-angle": string;
  "--integration-counter-angle": string;
  "--integration-color": string;
};

type RevealDurationStyle = CSSProperties & {
  "--reveal-duration": string;
};

type MobileLogoStyle = CSSProperties & {
  "--integration-color": string;
};

export function IntegrationsSection() {
  const mobileMarqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = mobileMarqueeRef.current;
    if (!marquee) return;

    let frame = 0;
    let resumeTimer = 0;
    let paused = false;

    const groupWidth = () => marquee.scrollWidth / 3;
    const keepInMiddleCopy = () => {
      const width = groupWidth();
      if (!width) return;
      if (marquee.scrollLeft >= width * 2) marquee.scrollLeft -= width;
      if (marquee.scrollLeft <= 1) marquee.scrollLeft += width;
    };
    const pause = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };
    const resume = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        keepInMiddleCopy();
        paused = false;
      }, 900);
    };

    marquee.scrollLeft = groupWidth();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const tick = () => {
        if (!paused) {
          marquee.scrollLeft += 0.35;
          keepInMiddleCopy();
        }
        frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }

    marquee.addEventListener("pointerdown", pause);
    marquee.addEventListener("pointerup", resume);
    marquee.addEventListener("pointercancel", resume);
    marquee.addEventListener("wheel", pause, { passive: true });
    marquee.addEventListener("wheel", resume, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      marquee.removeEventListener("pointerdown", pause);
      marquee.removeEventListener("pointerup", resume);
      marquee.removeEventListener("pointercancel", resume);
      marquee.removeEventListener("wheel", pause);
      marquee.removeEventListener("wheel", resume);
    };
  }, []);

  return (
    <section
      id="integrations"
      className={styles.integrationsSection}
      // Slower than the site's default 2200ms reveal — this section's
      // orbit + panel felt like it snapped into place too quickly at the
      // default pace.
      style={{ "--reveal-duration": "3400ms" } as RevealDurationStyle}
    >
      {/* This section is min-height: 100vh with its content centered, so
          the default trigger (8% of the content peeking in) fires while
          the content is still well below a comfortable viewing position —
          by the time it actually scrolls into view the reveal has long
          since finished. Delaying until the content is within the middle
          band of the viewport keeps the animation visible. */}
      <ScrollRevealGroup
        className={`wrap ${styles.integrationsLayout}`}
        rootMargin="-30% 0px -30% 0px"
        threshold={0}
      >
        <div className={styles.integrationOrbit}>
          <div className={`section-intro section-intro--center ${styles.integrationsIntro}`}>
            <div data-reveal-item style={{ transitionDelay: "0ms" }}>
              <TypingEyebrow className="mx-auto border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                Integrations
              </TypingEyebrow>
            </div>
            <h2 data-reveal-item style={{ transitionDelay: "200ms" }} className="section-heading">
              Connect every service to the tools behind it.
            </h2>
            <p data-reveal-item style={{ transitionDelay: "400ms" }}>
              Use ready-made connections or secure APIs to move validated data through the systems
              your teams already rely on.
            </p>
            <div data-reveal-item style={{ transitionDelay: "600ms" }} className={styles.integrationsCta}>
              <MarketingPillButton href="/integrations" variant="secondary">
                Explore integrations
              </MarketingPillButton>
            </div>
          </div>

          <div data-reveal-item style={{ transitionDelay: "600ms" }} className={styles.integrationCarousel} aria-label="Supported integration platforms">
            <div className={styles.integrationCarouselTrack}>
              {INTEGRATION_PLATFORMS.map((platform, index) => {
                const angle = (index * 360) / INTEGRATION_PLATFORMS.length;
                const nodeStyle = {
                  "--integration-angle": `${angle}deg`,
                  "--integration-counter-angle": `${-angle}deg`,
                  "--integration-color": platform.color,
                } as OrbitStyle;

                return (
                  <div key={platform.name} className={styles.integrationCarouselItem} style={nodeStyle}>
                    <div className={styles.integrationLogoDisc} title={platform.name} aria-label={platform.name}>
                      <img
                        src={platform.asset ?? `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${platform.icon}.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={mobileMarqueeRef}
            data-reveal-item
            style={{ transitionDelay: "600ms" }}
            className={styles.integrationMobileMarquee}
            aria-label="Supported integration platforms. Swipe to explore."
          >
            <div className={styles.integrationMobileMarqueeTrack}>
              {[0, 1, 2].map((copy) => (
                <div
                  key={copy}
                  className={styles.integrationMobileMarqueeGroup}
                  aria-hidden={copy === 1 ? undefined : "true"}
                >
                  {INTEGRATION_PLATFORMS.map((platform) => (
                    <div
                      key={`${copy}-${platform.name}`}
                      className={styles.integrationMobileMarqueeItem}
                      style={{ "--integration-color": platform.color } as MobileLogoStyle}
                    >
                      <div
                        className={styles.integrationLogoDisc}
                        title={copy === 1 ? platform.name : undefined}
                        aria-label={copy === 1 ? platform.name : undefined}
                      >
                        <img
                          src={platform.asset ?? `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${platform.icon}.svg`}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal-item style={{ transitionDelay: "1000ms" }} className={styles.integrationPanel}>
          <div className={styles.integrationActionsGrid}>
            {CONNECTION_ACTIONS.map((action) => (
              <article key={action.title} className={styles.integrationAction}>
                <h3>{action.title}</h3>
                <p>{action.body}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollRevealGroup>
    </section>
  );
}
