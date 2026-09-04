import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPillButton } from "@/components/marketing/MarketingPillButton";
import styles from "./institutional.module.css";

export const metadata: Metadata = {
  title: "Institutional Digital Service Builder",
  description: "Govforms Institutional combines an AI-powered Digital Service Builder with dedicated support, assurance, integration, migration and delivery for governments, public institutions and regulated organisations.",
  alternates: { canonical: "https://govform.com/institutional" },
};

const organisations = ["Central, federal and national government", "Government agencies and regulators", "Regional and local public authorities", "Health and public-service organisations", "Universities and research institutions", "Public corporations", "Justice and regulatory bodies", "Highly regulated organisations"];
const partnership = [
  ["Dedicated support", "Named contacts, agreed escalation routes and customer-specific service levels where required."],
  ["Architecture and integration", "Complex integrations, identity architecture and service patterns spanning multiple systems."],
  ["Security and assurance", "Questionnaires, technical workshops, evidence requests and resilience discussions."],
  ["Delivery and migration", "Service design, implementation, service builds, migration programmes and estate conversion."],
  ["Governance and operations", "Regular governance and account-level engagement for broader delivery programmes."],
  ["Bespoke procurement", "Formal procurement, negotiated contracts, tailored packaging and contractual review."],
];
const useCases = [
  ["Applications and registrations", "Branching journeys with validation, evidence, saved progress and authentication."],
  ["Regulatory returns", "Structured datasets, calculations, validation and operational-system integration."],
  ["Case management frontends", "Find, view and update records held in another system."],
  ["Portals and multi-stage services", "Homepages, multiple journeys, task lists and saved work."],
  ["Reviews and approvals", "Review, approval, return-for-changes and multi-party authorisation."],
  ["Eligibility and decisioning", "Trusted APIs, rules and server-side results that control the journey."],
  ["Evidence-heavy services", "Secure documents, privacy processing and configurable validation."],
  ["Operational workflows", "Notifications, APIs, assignment, document generation and downstream actions."],
];
const integrations = [
  ["Lookup and validate", "Check information against authoritative data before a user proceeds."],
  ["Retrieve and update", "Fetch an existing record and send authorised changes back."],
  ["Submit to case management", "Transform service data for a downstream operational system."],
  ["Notify multiple parties", "Trigger messages and actions for applicants, staff and systems."],
  ["Store evidence where needed", "Use Govforms-managed or customer-controlled storage patterns."],
  ["Orchestrate journeys", "Call systems in sequence and route users using the resulting status."],
];
const identity = ["Save and return", "Multiple concurrent applications", "Role-based journeys", "Group access", "Reviewer access", "Record management", "Internal staff services", "Shared submissions"];
const security = ["Rebuild supported Office files without unsupported active components", "Rasterise PDFs into controlled image-only representations", "Inspect links in supported Office documents", "Let users review reconstructed documents", "Strip image metadata, resize images and blur detected faces where configured"];
const estate = ["Build and maintain your own services", "Use documented capabilities and standard integrations", "Work with standard security evidence", "Use ticket-based product support", "Purchase against published commercial terms"];
const institutional = ["Dedicated support and custom service levels", "Account management and regular governance", "Delivery resources or a migration programme", "Bespoke integration and identity architecture", "Customer-specific assurance and resilience work", "Negotiated procurement and tailored commercial packaging"];
const transformation = ["Platform governance", "Reusable service patterns", "Integration conventions", "Common identity approaches", "Migration prioritisation", "Delivery standards", "Service templates", "Training and enablement"];
const commercial = ["Service estate size", "Production usage", "Support model and SLAs", "Delivery involvement", "Migration requirements", "Integration complexity", "Assurance requirements", "Identity and infrastructure", "Procurement obligations"];
const faqs = [
  ["Is Institutional only for central government?", "No. It is for any institution whose support, assurance, procurement or delivery requirements go beyond Business Cloud and Business Estate, including universities, healthcare organisations and regulators."],
  ["Does Institutional include unlimited professional services?", "No. Delivery, migration, bespoke development and other professional services are scoped according to the engagement."],
  ["Can our internal teams still build services?", "Yes. Your teams can continue building and operating services. Govforms involvement can be as focused or extensive as the agreed model requires."],
  ["Can our systems integrator use Govforms?", "Yes. Govforms can support a delivery model involving your internal teams and delivery partners."],
  ["Can you complete our security questionnaire?", "Customer-specific assurance activity can be included or separately scoped under an Institutional engagement."],
  ["Can we agree a custom SLA?", "Yes. Custom service arrangements are a principal reason to choose Institutional."],
  ["Can Govforms help migrate an existing estate?", "Yes. Planning, service conversion, redesign and large-scale migration can be scoped as part of the engagement."],
  ["What if we have hundreds of services but do not need dedicated support?", "Choose Business Estate. It provides portfolio economics without an enterprise services relationship you do not need."],
] as const;

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

function CheckList({ items }: { items: readonly string[] }) {
  return <ul className={styles.checkList}>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export default function InstitutionalPage() {
  return <>
    <header className={`bg-dark-glow ${styles.hero}`}><div className="wrap"><div className={`subpage-hero-clearance ${styles.heroGrid}`}>
      <div className={styles.heroCopy}><div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Institutional</div><h1>Digital service transformation with Govforms behind you</h1><p className={styles.heroLead}>For governments, public institutions and regulated organisations that need more than access to software.</p><p>Combine the Govforms Digital Service Builder with the support, assurance, delivery and commercial relationship needed for complex or mission-critical services.</p><div className={styles.buttons}><MarketingPillButton href="/contact" variant="white-icon" className={styles.primary}>Talk to our Institutional team</MarketingPillButton><MarketingPillButton href="/features" variant="dark-secondary">Explore the platform</MarketingPillButton></div></div>
      <div className={styles.heroVisual} aria-label="Govforms Institutional partnership model"><div className={styles.visualMeta}><span>Institutional</span><span>Operating model</span></div><div className={styles.visualCore}>Govforms<small>Digital Service Builder</small></div><div className={styles.orbit}>{["Support","Assurance","Architecture","Delivery"].map(x=><span key={x}>{x}</span>)}</div><div className={styles.status}><i/> Partnership active</div></div>
    </div></div></header>

    <main>
      <section className={styles.section}><div className="wrap"><div className={styles.intro}><div><div className="eyebrow">The operating model</div><h2>When the service matters, the operating model matters too.</h2></div><div><p>Some organisations simply need a powerful platform. Others need the platform provider to participate in delivery.</p><p><strong>Institutional is for the second group.</strong> It creates a contracted relationship around Govforms that can include dedicated support, tailored service levels, assurance, implementation, migration and bespoke technical requirements.</p></div></div><div className={styles.organisations}>{organisations.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}</div></div></section>

      <section className={`${styles.section} ${styles.tint}`}><div className="wrap"><div className={styles.centerIntro}><div className="eyebrow">A deeper partnership</div><h2>The same powerful Digital Service Builder. A different level of partnership.</h2><p>Your teams use the same platform for accessible applications, portals, data collections, workflows and transactional services. What changes is the relationship around it.</p></div><div className={styles.cardGrid}>{partnership.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className={styles.section}><div className="wrap"><div className={styles.splitHeading}><div><div className="eyebrow">Complete journeys</div><h2>Build more than forms</h2></div><p>Citizen-facing, business-facing and internal services where a basic form-and-email tool is not enough.</p></div><div className={styles.useCases}>{useCases.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.dark}`}><div className="wrap"><div className={styles.architecture}><div><div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Connected architecture</div><h2>Integrate Govforms into your existing technology estate</h2><p>Use Govforms as the user-facing service layer while retaining authoritative data and business processes in the platforms you already operate.</p><p>Institutional engagements can include solution design for patterns beyond documented standard integration.</p></div><div className={styles.systemMap}><div><span>People</span><span>Staff</span><span>Partners</span></div><strong>Govforms<small>Service layer</small></strong><div><span>Identity</span><span>Case data</span><span>Evidence</span></div></div></div><div className={styles.integrationGrid}>{integrations.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className={styles.section}><div className="wrap"><div className={styles.capabilities}><article><span className={styles.kicker}>Identity</span><h2>Know who the user is, when the service needs to</h2><p>Build authenticated journeys for known users, staff and organisational accounts. For complex identity models, work directly with Govforms on the architecture.</p><CheckList items={identity}/></article><article className={styles.security}><span className={styles.kicker}>Secure content</span><h2>Uploaded content is part of the threat model</h2><p>Alongside validation and antivirus processing, Content Disarm and Reconstruction creates controlled representations of supported uploads.</p><CheckList items={security}/></article></div></div></section>

      <section className={styles.panelSection}><div className="wrap"><div className={styles.aiPanel}><div className={styles.aiMark}>D<span>AI</span></div><div><div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Darcy AI</div><h2>AI-assisted delivery with human governance</h2><p>Darcy can create pages, draft accessible content, construct logic and make targeted changes. In institutional environments, it works within Govforms access and change-management mechanisms, with human control and version history.</p></div></div></div></section>

      <section className={styles.section}><div className="wrap"><div className={styles.splitHeading}><div><div className="eyebrow">Controlled delivery</div><h2>From prototype to production</h2></div><p>Separate experimentation from production, then add the assurance and release processes your organisation requires.</p></div><div className={styles.flow}>{[["Prototype","Design services, test journeys and validate ideas."],["QA","Test integrations, permissions and release candidates."],["Production","Promote approved versions through controlled release."]].map(([t,b],i)=><article key={t}><span>{i+1}</span><h3>{t}</h3><p>{b}</p></article>)}</div><div className={styles.pills}>{["Technical design reviews","Security evidence","Go-live assurance","Operational readiness","Resilience discussions","Release planning"].map(x=><span key={x}>{x}</span>)}</div></div></section>

      <section className={`${styles.section} ${styles.tint}`}><div className="wrap"><div className={styles.centerIntro}><div className="eyebrow">Choosing the right route</div><h2>Business Estate or Institutional?</h2><p>The distinction is intentionally simple.</p></div><div className={styles.choiceGrid}><article><span className={styles.kicker}>Business Estate</span><h3>Operate the platform yourself</h3><p>For organisations with significant capacity needs and the capability to run the platform.</p><CheckList items={estate}/><Link href="/business-estate">Explore Business Estate →</Link></article><article className={styles.featured}><span className={styles.kicker}>Institutional</span><h3>Bring Govforms into delivery</h3><p>For organisations that need Govforms to participate in how services are delivered or operated.</p><CheckList items={institutional}/><Link href="/contact">Talk to our Institutional team →</Link></article></div></div></section>

      <section className={styles.section}><div className="wrap"><div className={styles.transformation}><div><div className="eyebrow">Scale deliberately</div><h2>Support for transformation, not just implementation</h2><p>Start with a handful of legacy services, establish a reusable architecture and prove the operating model. Then expand across programmes or the wider institution.</p><p>Internal teams, systems integrators and delivery partners can build on Govforms while we provide the product, enablement and agreed support.</p></div><div className={styles.transformGrid}>{transformation.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}</div></div></div></section>

      <section className={styles.panelSection}><div className="wrap"><div className={styles.commercial}><div><div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Commercial model</div><h2>Arrangements built around the institution</h2><p>Pricing is bespoke because cost is determined by more than service or submission counts. We agree the appropriate platform capacity and service relationship with you.</p><MarketingPillButton href="/contact" variant="white-icon" className={styles.primary}>Discuss your requirements</MarketingPillButton></div><div className={styles.factors}>{commercial.map(x=><span key={x}>{x}</span>)}</div></div></div></section>

      <section className={`${styles.section} ${styles.tint}`}><div className="wrap"><div className={styles.faq}><div><div className="eyebrow">Questions</div><h2>Institutional FAQ</h2><p>Practical answers about support, delivery and the right commercial route.</p></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></div></section>

      <section className={styles.final}><div className="wrap"><div><div className="eyebrow border-white/25 bg-white/10 text-[var(--hero-accent)]">Build institutional capability</div><h2>One platform for rapid service delivery.<br/>An institutional relationship when the mission requires it.</h2><p>Give teams and partners a platform they can use repeatedly, with deeper support, assurance and delivery when the work demands it.</p><div className={styles.buttons}><MarketingPillButton href="/contact" variant="white-icon" className={styles.primary}>Talk to our Institutional team</MarketingPillButton><MarketingPillButton href="/business-estate" variant="dark-secondary">Explore Business Estate</MarketingPillButton></div></div></div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </>;
}
