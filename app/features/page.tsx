import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { FeatureShowcase } from "@/components/marketing/FeatureShowcase";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import styles from "@/components/marketing/content-page.module.css";

export const metadata: Metadata = {
  title: "Govform.com — Features",
};

const FEATURES: { title: string; body: string; bullets: string[] }[] = [
  {
    title: "Darcy AI assistant",
    body: "Generate a complete multi-page service from a plain-English prompt, then iterate on it by conversation.",
    bullets: [
      "Prompt-to-service in seconds, with iterative refinement",
      "Inspects and updates existing services, not just new ones",
      "Human approval and role-based permissions on every change",
    ],
  },
  {
    title: "Smart logic and workflow engine",
    body: "An intuitive rules editor drives page flow, validation and dynamic content — no code required.",
    bullets: [
      "Post-submission actions: API calls, notifications, approvals",
      "Dynamic templating and logic tags",
      "Data pre-population and transformation across services",
    ],
  },
  {
    title: "Rich component library",
    body: "Drop-in components for the complex parts of a service, all WCAG 2.2 compliant out of the box.",
    bullets: [
      "File uploads, postcode lookup, repeating data capture",
      "Shared component libraries across services",
      "Usable immediately on default settings, no configuration required",
    ],
  },
  {
    title: "Real-time analytics and auditability",
    body: "See 100% of user activity on a service, server-side, without cookies or a consent banner.",
    bullets: [
      "UK-based data storage, fully GDPR-compliant",
      "Separate QA and Production dashboards",
      "Page performance, device and browser breakdowns",
    ],
  },
  {
    title: "Secure document processing",
    body: "Every upload passes through Content Disarm & Reconstruction and antivirus scanning in isolated infrastructure.",
    bullets: [
      "URL inspection and link redaction",
      "Safe PDF reconstruction into image-only documents",
      "User review before submission",
    ],
  },
  {
    title: "Document generation and signing",
    body: "Map form answers straight onto a PDF template — text, dates, signatures and repeating data, filled automatically.",
    bullets: [
      "Typed or drawn signature capture with audit information",
      "Digital certificate signature application",
      "Consistent, ready-to-use PDF output",
    ],
  },
  {
    title: "Addresses, maps and geographic lookups",
    body: "Ordnance Survey maps with an OpenStreetMap fallback, plus UK and international address lookup.",
    bullets: [
      "Mobile-friendly map components for location selection",
      "UK postcode address lookup",
      "Customisable international address fields",
    ],
  },
  {
    title: "Custom branding and style control",
    body: "The award-winning UK Design System frontend, fully rebrandable to match your organisation.",
    bullets: [
      "Header, footer, colour and font adjustments",
      "CSS/SASS stylesheet override for full control",
      "Free brand customisation service from our team",
    ],
  },
  {
    title: "Authentication and access control",
    body: "Seven authentication methods, from fully anonymous public access to enterprise SSO.",
    bullets: [
      "GOV.UK Notify magic links, OIDC/OAuth 2.0, AWS Cognito with MFA",
      "Save-and-return with configurable draft modes",
      "Group-based sharing and read-only reviewer access",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital service platform"
        title="Build better public services, faster."
        subtitle="Design accessible journeys, automate complex workflows and manage every service securely—all from one flexible platform."
        primaryCta={{
          label: "Start building free",
          href: "/pricing/plans",
        }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
        reveal
      />

      <section className={styles.section}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item style={{ transitionDelay: "0ms" }}>
                <div className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Platform capabilities</div>
              </div>
              <h2 data-reveal-item style={{ transitionDelay: "160ms" }} className="section-heading">
                Everything your team needs, from first form to final submission.
              </h2>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup rootMargin="0px 0px -6%">
            <div
              data-reveal-item
              className={styles.featuresUxPlaceholder}
              role="img"
              aria-label="Placeholder for a Govform user experience screenshot"
            >
              <span>Image placeholder</span>
            </div>
          </ScrollRevealGroup>
          <FeatureShowcase features={FEATURES} />
        </div>
      </section>

      <ClosingCta
        eyebrow="Get started"
        title="Get started with smarter digital service delivery"
        body="Take the first step towards streamlined digital services with a personalised consultation from our expert team."
        primaryCta={{ label: "Start a free trial", href: "/pricing#plans" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />
    </>
  );
}
