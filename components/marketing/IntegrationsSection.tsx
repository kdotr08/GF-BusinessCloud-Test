import type { CSSProperties } from "react";
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
  { name: "ServiceNow", icon: "servicenow", color: "#4f8f78" },
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
  { name: "SendGrid", icon: "sendgrid", color: "#1a82e2" },
  { name: "Freshdesk", icon: "freshworks", color: "#25c16f" },
  { name: "Worldpay", icon: "worldpay", color: "#d71920" },
];

const CONNECTION_ACTIONS = [
  {
    label: "Exchange data",
    title: "APIs",
    body: "Call existing platforms mid-journey and securely exchange the data each step needs.",
  },
  {
    label: "Send events",
    title: "Webhooks",
    body: "Send signed events as submissions progress so downstream systems stay in sync.",
  },
  {
    label: "Keep people updated",
    title: "Notify & email",
    body: "Trigger confirmations, reminders and status updates without creating manual hand-offs.",
  },
  {
    label: "Shape every payload",
    title: "Map & transform",
    body: "Reshape validated form data into the format required by each destination.",
  },
];

type OrbitStyle = CSSProperties & {
  "--integration-angle": string;
  "--integration-counter-angle": string;
  "--integration-color": string;
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className={styles.integrationsSection}>
      <ScrollRevealGroup className={`wrap ${styles.integrationsLayout}`}>
        <div className={styles.integrationOrbit}>
          <div className={`section-intro section-intro--center ${styles.integrationsIntro}`}>
            <div data-reveal-item style={{ transitionDelay: "0ms" }}>
              <TypingEyebrow className="mx-auto border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">
                Integrations
              </TypingEyebrow>
            </div>
            <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
              Connect every service to the tools behind it.
            </h2>
            <p data-reveal-item style={{ transitionDelay: "320ms" }}>
              Use ready-made connections or secure APIs to move validated data through the systems
              your teams already rely on.
            </p>
            <div data-reveal-item style={{ transitionDelay: "480ms" }} className={styles.integrationsCta}>
              <MarketingPillButton href="/integrations" variant="secondary">
                Explore integrations
              </MarketingPillButton>
            </div>
          </div>

          <div data-reveal-item className={styles.integrationCarousel} aria-label="Supported integration platforms">
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
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${platform.icon}.svg`}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div data-reveal-item style={{ transitionDelay: "760ms" }} className={styles.integrationPanel}>
          <div className={styles.integrationActionsGrid}>
            {CONNECTION_ACTIONS.map((action) => (
              <article key={action.title} className={styles.integrationAction}>
                <div className={styles.integrationLabel}>{action.label}</div>
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
