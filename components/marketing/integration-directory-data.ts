export const INTEGRATION_CATEGORIES = [
  "Microsoft ecosystem",
  "CRM and case management",
  "File storage and cloud platforms",
  "Developer tools and APIs",
  "Identity and authentication",
  "Payments",
  "Documents and e-signatures",
  "Data management",
  "Email and notifications",
  "Analytics and reporting",
  "Address and location services",
  "Public-sector platforms",
] as const;

export type IntegrationCategory = (typeof INTEGRATION_CATEGORIES)[number];

export const INTEGRATION_TYPES = [
  "Built-in connector",
  "Configurable integration",
  "API integration",
  "Open standard",
  "Developer capability",
  "Platform capability",
  "Data feed",
  "Export format",
  "Design system support",
] as const;

export type IntegrationType = (typeof INTEGRATION_TYPES)[number];

// Three logo treatments: a verified simple-icons slug (only used where this
// exact icon is already proven live elsewhere on the site — the homepage's
// integration marquee), a locally hosted SVG for brands missing from that
// CDN set, and a plain monogram badge for standards/capabilities/smaller
// platforms that have no reliable brand icon to hang off. Monogram is the
// safe default: it never 404s.
export type IntegrationLogo =
  | { kind: "icon"; slug: string; color: string }
  | { kind: "asset"; src: string; color: string }
  | { kind: "monogram"; text: string; color: string };

const icon = (slug: string, color: string): IntegrationLogo => ({ kind: "icon", slug, color });
const asset = (src: string, color: string): IntegrationLogo => ({ kind: "asset", src, color });
const mono = (text: string, color: string): IntegrationLogo => ({ kind: "monogram", text, color });

const MS_BLUE = "#0078d4";
const AWS_ORANGE = "#e98200";
const GOVUK_BLACK = "#0b0c0c";
const NAVY = "#001f3f";

export type DirectoryIntegration = {
  name: string;
  description: string;
  categories: IntegrationCategory[];
  type: IntegrationType;
  logo: IntegrationLogo;
  learnMoreHref?: string;
};

export const DIRECTORY_INTEGRATIONS: DirectoryIntegration[] = [
  // Microsoft ecosystem
  {
    name: "Microsoft SharePoint",
    description:
      "Store submission data, uploaded files and generated PDFs in your organisation's SharePoint environment.",
    categories: ["Microsoft ecosystem"],
    type: "Built-in connector",
    logo: icon("microsoftsharepoint", "#038387"),
  },
  {
    name: "Microsoft Power Automate",
    description: "Trigger automated workflows using Govform submissions, APIs, webhooks or SharePoint events.",
    categories: ["Microsoft ecosystem"],
    type: "Configurable integration",
    logo: icon("powerautomate", "#0066ff"),
  },
  {
    name: "Microsoft Power Apps",
    description: "Use accessible Govform services to collect structured data for Power Apps and wider Power Platform workflows.",
    categories: ["Microsoft ecosystem"],
    type: "Configurable integration",
    logo: icon("powerapps", "#742774"),
  },
  {
    name: "Microsoft Power BI",
    description: "Use Govform data and analytics exports in Power BI dashboards, operational reports and management reporting.",
    categories: ["Microsoft ecosystem", "Analytics and reporting"],
    type: "Configurable integration",
    logo: icon("powerbi", "#d7a900"),
  },
  {
    name: "Microsoft Dataverse",
    description: "Transfer structured Govform data into Dataverse tables through APIs or Power Platform workflows.",
    categories: ["Microsoft ecosystem"],
    type: "Configurable integration",
    logo: mono("DV", MS_BLUE),
  },
  {
    name: "Microsoft Azure Blob Storage",
    description: "Store uploaded files, generated documents and service outputs in Azure Blob Storage.",
    categories: ["Microsoft ecosystem"],
    type: "Configurable integration",
    logo: icon("microsoftazure", "#0078d4"),
  },
  {
    name: "Azure DevOps",
    description: "Create or update Azure DevOps work items using data captured through Govform services.",
    categories: ["Microsoft ecosystem"],
    type: "API integration",
    logo: mono("DO", MS_BLUE),
  },

  // CRM and case management
  {
    name: "Salesforce",
    description: "Send Govform data to Salesforce or retrieve existing records through secure API-based workflows.",
    categories: ["CRM and case management"],
    type: "API integration",
    logo: icon("salesforce", "#00a1e0"),
  },
  {
    name: "ServiceNow",
    description: "Create cases, incidents or service requests from Govform submissions.",
    categories: ["CRM and case management"],
    type: "API integration",
    logo: asset("/icons/integrations/servicenow.svg", "#4f8f78"),
  },
  {
    name: "Microsoft Dynamics 365",
    description: "Transfer service data into Dynamics 365 or use existing customer and case data in Govform journeys.",
    categories: ["CRM and case management"],
    type: "Configurable integration",
    logo: mono("D365", MS_BLUE),
  },
  {
    name: "Jira",
    description: "Create or update Jira issues using information captured through Govform.",
    categories: ["CRM and case management"],
    type: "API integration",
    logo: icon("jira", "#2684ff"),
  },
  {
    name: "HubSpot",
    description: "Create or update contacts, tickets and other HubSpot records from Govform submissions.",
    categories: ["CRM and case management"],
    type: "API integration",
    logo: icon("hubspot", "#ff7a59"),
  },
  {
    name: "Zendesk",
    description: "Create support tickets or update customer service records using Govform submission data.",
    categories: ["CRM and case management"],
    type: "API integration",
    logo: icon("zendesk", "#03363d"),
  },

  // File storage and cloud platforms
  {
    name: "AWS S3",
    description: "Store uploaded files, generated documents and exports in environment-specific AWS S3 buckets.",
    categories: ["File storage and cloud platforms"],
    type: "Configurable integration",
    logo: icon("amazons3", AWS_ORANGE),
  },
  {
    name: "Google Cloud Storage",
    description: "Transfer Govform uploads and generated outputs into Google Cloud Storage.",
    categories: ["File storage and cloud platforms"],
    type: "Configurable integration",
    logo: icon("googlecloud", "#4285f4"),
  },
  {
    name: "Google Drive",
    description: "Send generated files and structured exports to Google Drive through supported APIs and automation tools.",
    categories: ["File storage and cloud platforms"],
    type: "API integration",
    logo: icon("googledrive", "#00ac47"),
  },
  {
    name: "Dropbox",
    description: "Transfer uploaded files or generated service outputs to Dropbox using API-based workflows.",
    categories: ["File storage and cloud platforms"],
    type: "API integration",
    logo: icon("dropbox", "#0061ff"),
  },
  {
    name: "Box",
    description: "Store service documents and uploaded files in Box through secure API integration.",
    categories: ["File storage and cloud platforms"],
    type: "API integration",
    logo: icon("box", "#0061d5"),
  },
  {
    name: "Microsoft OneDrive",
    description: "Move Govform-generated files and service outputs into OneDrive using Microsoft automation or APIs.",
    categories: ["File storage and cloud platforms"],
    type: "Configurable integration",
    logo: icon("microsoftonedrive", "#0078d4"),
  },

  // Developer tools and APIs
  {
    name: "REST API",
    description: "Connect Govform to internal and third-party systems using configurable methods, headers, request bodies and response handling.",
    categories: ["Developer tools and APIs"],
    type: "Developer capability",
    logo: mono("API", NAVY),
  },
  {
    name: "Webhooks",
    description: "Trigger downstream workflows by sending service events and structured Govform data to external endpoints.",
    categories: ["Developer tools and APIs"],
    type: "Developer capability",
    logo: mono("WH", NAVY),
  },
  {
    name: "Mutual TLS",
    description: "Connect to high-assurance APIs using client certificates, private keys and trusted certificate authorities.",
    categories: ["Developer tools and APIs"],
    type: "Open standard",
    logo: mono("TLS", NAVY),
  },
  {
    name: "Govform API",
    description: "Retrieve service data securely and connect Govform with external applications and reporting systems.",
    categories: ["Developer tools and APIs"],
    type: "Developer capability",
    logo: mono("GF", NAVY),
  },

  // Identity and authentication
  {
    name: "Microsoft Entra ID",
    description: "Authenticate staff or service users using Microsoft Entra ID and supported enterprise identity patterns.",
    categories: ["Identity and authentication"],
    type: "Configurable integration",
    logo: mono("ID", MS_BLUE),
  },
  {
    name: "AWS Cognito",
    description: "Connect Govform journeys to AWS Cognito user pools and MFA-enabled sign-in.",
    categories: ["Identity and authentication"],
    type: "Configurable integration",
    logo: mono("AWS", AWS_ORANGE),
  },
  {
    name: "OAuth 2.0",
    description: "Connect Govform with identity providers and protected APIs using OAuth 2.0.",
    categories: ["Identity and authentication"],
    type: "Open standard",
    logo: mono("OA", NAVY),
  },
  {
    name: "OpenID Connect",
    description: "Enable federated sign-in using identity providers that support OpenID Connect.",
    categories: ["Identity and authentication"],
    type: "Open standard",
    logo: mono("OID", NAVY),
  },

  // Payments
  {
    name: "Stripe",
    description: "Connect Govform services with Stripe-supported payment journeys and downstream payment workflows.",
    categories: ["Payments"],
    type: "Configurable integration",
    logo: icon("stripe", "#635bff"),
  },
  {
    name: "PayPal",
    description: "Connect service journeys with supported PayPal payment flows.",
    categories: ["Payments"],
    type: "Configurable integration",
    logo: icon("paypal", "#003087"),
  },
  {
    name: "Worldpay",
    description: "Add Worldpay payment steps to Govform services through a supported integration approach.",
    categories: ["Payments"],
    type: "Configurable integration",
    logo: asset("/icons/integrations/worldpay.svg", "#d71920"),
  },
  {
    name: "Opayo",
    description: "Connect Govform journeys with supported Opayo payment processes.",
    categories: ["Payments"],
    type: "Configurable integration",
    logo: mono("OP", NAVY),
  },
  {
    name: "GOV.UK Pay",
    description: "Take payments through GOV.UK Pay and use payment outcomes within Govform service workflows.",
    categories: ["Payments", "Public-sector platforms"],
    type: "Configurable integration",
    logo: mono("GOV", GOVUK_BLACK),
  },

  // Documents and e-signatures
  {
    name: "DocuSign",
    description: "Send generated documents and submission data into DocuSign signature workflows.",
    categories: ["Documents and e-signatures"],
    type: "API integration",
    logo: icon("docusign", "#ffcc22"),
  },
  {
    name: "Adobe Acrobat Sign",
    description: "Connect Govform documents with Adobe Acrobat Sign approval and signature journeys.",
    categories: ["Documents and e-signatures"],
    type: "API integration",
    logo: icon("adobeacrobatreader", "#ec1c24"),
  },
  {
    name: "PDF generation",
    description: "Generate PDF copies of submitted answers for applicants, reviewers, case files and connected document stores.",
    categories: ["Documents and e-signatures"],
    type: "Platform capability",
    logo: mono("PDF", NAVY),
  },

  // Data management
  {
    name: "CSV data feeds",
    description: "Use CSV files as reference data for lookups, validation, dynamic choices and service routing.",
    categories: ["Data management"],
    type: "Data feed",
    logo: mono("CSV", NAVY),
  },
  {
    name: "Excel data feeds",
    description: "Use Excel workbooks as managed data sources for validation, lookups and workflow rules.",
    categories: ["Data management"],
    type: "Data feed",
    logo: mono("XLS", "#217346"),
  },
  {
    name: "JSON data feeds",
    description: "Use structured JSON data from APIs or managed feeds to control content and service behaviour.",
    categories: ["Data management"],
    type: "Data feed",
    logo: mono("JSON", NAVY),
  },
  {
    name: "Google Sheets",
    description: "Send Govform data to Google Sheets or use spreadsheet data in connected service workflows.",
    categories: ["Data management"],
    type: "API integration",
    logo: icon("googlesheets", "#0f9d58"),
  },

  // Email and notifications
  {
    name: "GOV.UK Notify",
    description: "Send confirmation emails, staff alerts and SMS updates using GOV.UK Notify templates.",
    categories: ["Email and notifications", "Public-sector platforms"],
    type: "Configurable integration",
    logo: mono("GOV", GOVUK_BLACK),
  },
  {
    name: "SendGrid",
    description: "Connect Govform with SendGrid for email delivery and communication workflows.",
    categories: ["Email and notifications"],
    type: "API integration",
    logo: asset("/icons/integrations/sendgrid.svg", "#1a82e2"),
  },
  {
    name: "Mailchimp",
    description: "Add or update Mailchimp contacts using preferences and information collected through Govform services.",
    categories: ["Email and notifications"],
    type: "API integration",
    logo: icon("mailchimp", "#241c15"),
  },
  {
    name: "Campaign Monitor",
    description: "Transfer contact preferences and subscription information to Campaign Monitor.",
    categories: ["Email and notifications"],
    type: "API integration",
    logo: mono("CM", NAVY),
  },

  // Analytics and reporting
  {
    name: "Google Analytics",
    description: "Send appropriate service events into Google Analytics where permitted by privacy and consent requirements.",
    categories: ["Analytics and reporting"],
    type: "Configurable integration",
    logo: icon("googleanalytics", "#e37400"),
  },
  {
    name: "CSV export",
    description: "Export structured analytics and service data for reporting and business intelligence tools.",
    categories: ["Analytics and reporting"],
    type: "Export format",
    logo: mono("CSV", NAVY),
  },
  {
    name: "JSON export",
    description: "Retrieve structured analytics and service data for reporting pipelines and connected applications.",
    categories: ["Analytics and reporting"],
    type: "Export format",
    logo: mono("JSON", NAVY),
  },

  // Address and location services
  {
    name: "OpenStreetMap",
    description: "Use OpenStreetMap data for map-based location selection and related service journeys.",
    categories: ["Address and location services"],
    type: "Configurable integration",
    logo: icon("openstreetmap", "#7ebc6f"),
  },
  {
    name: "International address entry",
    description: "Capture addresses from users around the world using configurable address fields and validation options.",
    categories: ["Address and location services"],
    type: "Platform capability",
    logo: mono("INT", NAVY),
  },
  {
    name: "UK postcode lookup",
    description: "Help users find UK addresses by postcode, with a manual entry option where required.",
    categories: ["Address and location services"],
    type: "Configurable integration",
    logo: mono("PC", NAVY),
  },
  {
    name: "Ordnance Survey",
    description: "Use Ordnance Survey services to search for UK places, addresses and geographic names.",
    categories: ["Address and location services"],
    type: "Configurable integration",
    logo: mono("OS", NAVY),
  },

  // Public-sector platforms
  {
    name: "GOV.UK Design System",
    description: "Build accessible UK public services using familiar GOV.UK patterns and components.",
    categories: ["Public-sector platforms"],
    type: "Design system support",
    logo: mono("GDS", GOVUK_BLACK),
  },
  {
    name: "AWS SES",
    description: "Send transactional service emails using Amazon Simple Email Service.",
    categories: ["Public-sector platforms"],
    type: "API integration",
    logo: mono("SES", AWS_ORANGE),
  },
];
