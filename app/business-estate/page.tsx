import type { Metadata } from "next";
import { AnimatedFaqItem } from "@/components/marketing/AnimatedFaqItem";
import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
import { PageHero } from "@/components/marketing/PageHero";
import { ScrollRevealGroup } from "@/components/marketing/ScrollRevealGroup";
import contentStyles from "@/components/marketing/content-page.module.css";
import styles from "./business-estate.module.css";

export const metadata: Metadata = {
  title: "Business Estate Digital Service Platform",
  description:
    "Run 100 to 2,000+ accessible digital services on one AI-powered Digital Service Builder. Business Estate gives large organisations portfolio pricing, central governance, integrations and self-service delivery at scale.",
  alternates: { canonical: "https://govform.com/business-estate" },
};

const SERVICE_TYPES = [
  "Applications and registrations",
  "Renewals and record updates",
  "Surveys and consultations",
  "Recurring returns and data collections",
  "Evidence and document collection",
  "Eligibility and calculation services",
  "Staff workflows and approvals",
  "Authenticated user journeys",
  "Case and record management frontends",
  "Search, filter and update services",
];

const BENEFITS = [
  {
    number: "01",
    title: "Build faster",
    body: "Turn requirements into working digital services using drag-and-drop components, reusable patterns and AI-assisted service building.",
    detail: "Prototype and test before going live. Change services without commissioning a new software project.",
  },
  {
    number: "02",
    title: "Standardise your estate",
    body: "Bring services spread across PDFs, spreadsheets, legacy form tools and bespoke applications onto a consistent platform.",
    detail: "Create common patterns for identity, evidence, validation, notifications, approvals and integrations.",
  },
  {
    number: "03",
    title: "Govern centrally",
    body: "Organise services into libraries with controlled user access, shared configuration and reusable patterns.",
    detail: "Maintain revision history, environment separation and controlled deployment from Prototype through QA to Production.",
  },
  {
    number: "04",
    title: "Integrate instead of replace",
    body: "Put Govforms in front of the systems you already operate, using standard integration patterns to connect each journey.",
    detail: "Validate data, retrieve records, trigger actions and pass completed information downstream.",
  },
  {
    number: "05",
    title: "Accessible by default",
    body: "Create responsive, accessible journeys from structured components instead of rebuilding basic interaction patterns.",
    detail: "Brand services for your organisation while maintaining a consistent interaction model across the estate.",
  },
  {
    number: "06",
    title: "AI with human control",
    body: "Use Darcy AI inside the Builder to create services, generate content and logic, and make targeted changes.",
    detail: "AI-assisted updates stay within your governance model, with permissions, version history and human review.",
  },
];

const CAPABILITIES = [
  ["Conditional journeys", "Adapt pages, questions and workflows to previous answers, roles and system results."],
  ["Authentication and saved journeys", "Create signed-in, save-and-return services where users can manage multiple submissions."],
  ["Workflow and approvals", "Route completed services through review, approval and return-for-changes processes."],
  ["API automation", "Call external systems, transform data and use trusted results to control what happens next."],
  ["Repeating and structured data", "Collect lists, records and complex datasets rather than flattening every interaction."],
  ["Files and evidence", "Collect documents and images with configurable security and privacy processing."],
  ["Documents and signatures", "Generate documents from submitted information and support signing patterns where configured."],
  ["Multilingual services", "Support multiple languages while retaining one underlying journey and workflow."],
  ["Notifications and communications", "Trigger emails, messages and downstream actions at the right point in a service."],
  ["Reporting and operational data", "Capture structured information your operational systems can use directly."],
] as const;

const PLANS = [
  { name: "Estate 100", price: "£18,000", description: "For organisations running up to 100 live services.", featured: false, items: ["100 live services", "750,000 submissions", "2 million automation actions", "5,000 Darcy AI assists / month", "150 AI service builds / month"] },
  { name: "Estate 250", price: "£36,000", description: "For larger multi-team portfolios.", featured: false, items: ["250 live services", "1.5 million submissions", "4 million automation actions", "10,000 Darcy AI assists / month", "300 AI service builds / month"] },
  { name: "Estate 1000", price: "£60,000", description: "For organisation-wide digitisation programmes.", featured: true, items: ["1,000 live services", "3 million submissions", "8 million automation actions", "20,000 Darcy AI assists / month", "500 AI service builds / month"] },
  { name: "Estate 2000", price: "£96,000", description: "For very large digital service estates.", featured: false, items: ["2,000 live services", "6 million submissions", "15 million automation actions", "30,000 Darcy AI assists / month", "1,000 AI service builds / month"] },
];

const FAQS = [
  { question: "Is Business Estate only for government?", answer: "No. Business Estate is for any organisation with a sufficiently large digital service portfolio. That can include public bodies, universities, healthcare organisations, charities, regulated organisations and commercial businesses." },
  { question: "Is Business Estate an enterprise plan?", answer: "It provides enterprise-scale platform capacity, but it is deliberately not a high-touch enterprise services contract. Business Estate is designed for organisations that can run Govforms themselves. If you need dedicated support, bespoke assurance, custom commercial terms or significant Govforms delivery involvement, choose Institutional." },
  { question: "Can different teams build their own services?", answer: "Yes. Govforms is designed around libraries, user access and shared platform configuration, allowing organisations to separate service ownership while maintaining central governance." },
  { question: "Do we have to use Govforms to store uploaded files?", answer: "Govforms supports Govforms-managed and customer-controlled storage patterns, depending on your configuration and requirements." },
  { question: "Can our services connect to our existing systems?", answer: "Yes. Govforms supports server-side integrations and standard patterns for APIs, data sources, storage, notifications and back-office workflows. Bespoke integration architecture or customer-specific connector development may require professional services or Institutional pricing." },
  { question: "Can Govforms migrate our existing services?", answer: "Yes. Simple services can often be recreated by your own teams, including with Darcy AI assistance. A structured migration programme, conversion factory or redesign exercise sits outside the Business Estate subscription and can be scoped separately." },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function Tick() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3.2 3.2L15.5 6" /></svg>;
}

export default function BusinessEstatePage() {
  return (
    <>
      <PageHero
        eyebrow="Business Estate"
        title="Run hundreds of digital services without enterprise overhead"
        subtitle="One Digital Service Builder for your entire service estate."
        supportingText="Build and maintain hundreds or thousands of accessible services, give teams controlled access to a shared platform and connect every journey to your existing systems."
        note="For organisations running 100+ live services."
        primaryCta={{ label: "Talk to us about Business Estate", href: "/contact" }}
        secondaryCta={{ label: "View pricing", href: "#pricing", scrollDurationMs: 1200 }}
        reveal
      />

      <section className={styles.economics}>
        <div className="wrap">
          <div className={styles.economicsGrid}>
            <ScrollRevealGroup className={styles.economicsCopy}>
              <div data-reveal-item className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Portfolio economics</div>
              <h2 data-reveal-item className="section-heading">One platform. Many teams. Hundreds of services.</h2>
              <p data-reveal-item>Once an organisation has dozens or hundreds of services, per-form software stops making sense. Business Estate moves Govforms to an estate model.</p>
              <p data-reveal-item>Instead of treating every application, return, registration or workflow as a separate software purchase, you license capacity across your organisation and use it where you need it.</p>
              <div data-reveal-item className={styles.callout}>Create new services as demand changes—without starting another technology procurement.</div>
            </ScrollRevealGroup>
            <ScrollRevealGroup className={styles.servicePanel} motion="scale">
              <div data-reveal-item className={styles.servicePanelHeader}><span>Use Govforms for</span><strong>10 service patterns</strong></div>
              <ul>{SERVICE_TYPES.map((item) => <li data-reveal-item key={item}><Tick />{item}</li>)}</ul>
            </ScrollRevealGroup>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Operate it yourself</div>
              <h2 data-reveal-item className="section-heading">Delivery speed without losing control</h2>
              <p data-reveal-item>Your teams build with the visual Digital Service Builder, accelerate work with Darcy AI, reuse patterns and connect journeys to existing systems.</p>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup className={styles.benefitGrid} rootMargin="0px 0px -5%">
            {BENEFITS.map((item, index) => <article data-reveal-item style={{ transitionDelay: `${index * 65}ms` }} className={styles.benefitCard} key={item.title}><span className={styles.cardNumber}>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p><p className={styles.cardDetail}>{item.detail}</p></article>)}
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className="wrap">
          <ScrollRevealGroup className={styles.capabilitiesIntro}>
            <div data-reveal-item className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Beyond basic forms</div>
            <h2 data-reveal-item className="section-heading">A Digital Service Builder, not a collection of forms</h2>
            <p data-reveal-item>The value of an estate platform is what happens between the questions. Build complex, server-side journeys where answers control what happens next, data is validated against other systems and actions run throughout the journey.</p>
          </ScrollRevealGroup>
          <ScrollRevealGroup className={styles.capabilityGrid}>
            {CAPABILITIES.map(([title, body], index) => <article data-reveal-item style={{ transitionDelay: `${(index % 5) * 55}ms` }} key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={styles.operatingSection}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro section-intro--center">
              <div data-reveal-item className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Operating model</div>
              <h2 data-reveal-item className="section-heading">Decentralised delivery. Central control.</h2>
              <p data-reveal-item>A central digital function provides the platform, standards and reusable patterns while individual teams create and maintain the services they understand.</p>
            </div>
          </ScrollRevealGroup>
          <div className={styles.controlGrid}>
            <ScrollRevealGroup className={styles.controlCard}><div data-reveal-item className={styles.controlLabel}>Central teams control</div><ul>{["Platform access", "Shared configuration", "Governance and environments", "Security patterns", "Reusable components and patterns"].map(x => <li data-reveal-item key={x}><Tick />{x}</li>)}</ul></ScrollRevealGroup>
            <div className={styles.connector} aria-hidden="true"><span>One shared platform</span></div>
            <ScrollRevealGroup className={`${styles.controlCard} ${styles.controlCardAccent}`}><div data-reveal-item className={styles.controlLabel}>Service teams control</div><ul>{["Service content", "Questions and data", "Journey logic", "Routine changes", "Testing and iteration"].map(x => <li data-reveal-item key={x}><Tick />{x}</li>)}</ul></ScrollRevealGroup>
          </div>
          <p className={styles.operatingNote}>Increase delivery capacity without requiring a central development team to build every service.</p>
        </div>
      </section>

      <section id="pricing" className={styles.pricingSection}>
        <div className="wrap">
          <ScrollRevealGroup>
            <div className="section-intro">
              <div data-reveal-item className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Business Estate pricing</div>
              <h2 data-reveal-item className="section-heading">Choose capacity for your live service estate</h2>
              <p data-reveal-item>Annual capacity bands are based primarily on the size of your portfolio. Every plan gives your teams the same powerful platform.</p>
            </div>
          </ScrollRevealGroup>
          <ScrollRevealGroup className={styles.planGrid} rootMargin="0px 0px -4%">
            {PLANS.map((plan, index) => <article data-reveal-item style={{ transitionDelay: `${index * 80}ms` }} className={`${styles.planCard} ${plan.featured ? styles.planFeatured : ""}`} key={plan.name}>{plan.featured && <div className={styles.popular}>Organisation-wide</div>}<h3>{plan.name}</h3><div className={styles.price}>{plan.price}<span>/year</span></div><p className={styles.planDescription}>{plan.description}</p><div className={styles.planRule} /><ul>{plan.items.map(item => <li key={item}><Tick />{item}</li>)}</ul><MarketingPillButton href="/contact" variant={plan.featured ? "primary" : "secondary"} className={plan.featured ? "" : styles.planButton}>Talk to us</MarketingPillButton></article>)}
          </ScrollRevealGroup>
          <div className={styles.pricingFoot}><strong>Need a different capacity profile?</strong> <a href="/contact">Talk to us.</a><span>Usage allowances and optional premium capabilities are subject to current Business Estate pricing terms.</span></div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className="wrap">
          <div className={styles.fitGrid}>
            <ScrollRevealGroup className={styles.fitGood}>
              <div data-reveal-item className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">What is included</div>
              <h2 data-reveal-item>Product-led by design</h2>
              <p data-reveal-item>Business Estate includes the Govforms platform, estate capacity and light-touch product support so capable organisations can operate a large portfolio economically.</p>
              <h3 data-reveal-item>It is a good fit when:</h3>
              <ul>{["Your own teams will design and manage services", "You want reusable organisation-wide patterns", "You can use documented integrations and platform features", "Ticket or email product support meets your needs", "Standard security and compliance evidence meets your assurance process"].map(x => <li data-reveal-item key={x}><Tick />{x}</li>)}</ul>
            </ScrollRevealGroup>
            <ScrollRevealGroup className={styles.fitInstitutional}>
              <div data-reveal-item className={styles.fitLabel}>When Business Estate is not the right model</div>
              <h2 data-reveal-item>Choose Institutional for a high-touch relationship</h2>
              <p data-reveal-item>The number of services does not make you Institutional. The operating relationship does.</p>
              <ul>{["Dedicated account or service management", "Custom SLAs or governance meetings", "Bespoke solution, identity or integration architecture", "Customer-specific security assurance", "Migration programmes or managed delivery"].map(x => <li data-reveal-item key={x}>{x}</li>)}</ul>
              <MarketingPillButton href="/pricing#institutional" variant="white-icon">Explore Institutional</MarketingPillButton>
            </ScrollRevealGroup>
          </div>
        </div>
      </section>

      <section className={styles.migrationSection}>
        <div className="wrap">
          <ScrollRevealGroup className={styles.migrationCard} motion="scale">
            <div data-reveal-item><div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Move at your pace</div><h2>Move an existing form estate to Govforms</h2></div>
            <div data-reveal-item><p>You do not have to migrate everything at once. Start with a new programme, a business unit or a group of ageing services and expand from there.</p><p>Govforms can coexist with existing platforms while your teams establish common service patterns. If you need a migration factory or managed redesign programme, we can scope that through Institutional and professional services.</p></div>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className={`${contentStyles.section} ${contentStyles.featuresFaqSection}`}>
        <div className="wrap">
          <ScrollRevealGroup><div className="section-intro"><div data-reveal-item className="eyebrow border-[#0087b0]/25 bg-[#0087b0]/10 text-[#0087b0]">Frequently asked questions</div><h2 data-reveal-item className="section-heading">Business Estate questions</h2></div></ScrollRevealGroup>
          <ScrollRevealGroup className={contentStyles.featuresFaqList}>{FAQS.map((faq, index) => <AnimatedFaqItem key={faq.question} question={faq.question} answer={faq.answer} delayMs={index * 70} />)}</ScrollRevealGroup>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="wrap"><ScrollRevealGroup className={styles.finalCtaInner} motion="scale"><div data-reveal-item className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Build for change</div><h2 data-reveal-item>Put your entire service estate on one platform</h2><p data-reveal-item>Stop buying, maintaining and governing every digital interaction as a separate application. Give teams one controlled platform for the services you need today—and the ones you will need next.</p><div data-reveal-item className={styles.finalButtons}><MarketingPillButton href="/contact" variant="white-icon">Talk to us about Business Estate</MarketingPillButton><MarketingPillButton href="#pricing" variant="dark-secondary" scrollDurationMs={1000}>View Business Estate pricing</MarketingPillButton></div></ScrollRevealGroup></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    </>
  );
}
