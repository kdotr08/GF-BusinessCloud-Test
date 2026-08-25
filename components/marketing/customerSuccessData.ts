export type CustomerSuccessStory = {
  slug: string;
  organisation: string;
  title: string;
  summary: string;
  image: string;
  source: string;
  challenge: string[];
  solution: string[];
  outcome: string[];
};

export const CUSTOMER_SUCCESS_STORIES: CustomerSuccessStory[] = [
  {
    slug: "research-england",
    organisation: "Research England",
    title: "Five GDS-compliant surveys delivered in weeks",
    summary: "Research England delivered thousands of survey responses at 17 times less cost than its incumbent supplier.",
    image: "/images/success-stories/research-england.png",
    source: "https://govforms.co.uk/use-cases/research-england",
    challenge: [
      "Launch five complex university surveys at short notice.",
      "Work within a budget of only a few thousand pounds.",
      "Connect submissions to the Freshdesk ticketing system.",
    ],
    solution: [
      "Two policy and engineering colleagues were trained to use Govforms.",
      "Reusable GDS components accelerated survey assembly.",
      "A configured REST API connected submissions to Freshdesk.",
    ],
    outcome: [
      "Delivered within weeks at 17 times less cost.",
      "Five secure surveys handled 4,028 returning journeys and 943 completions.",
      "Govforms became an approved technology for wider use across UKRI.",
    ],
  },
  {
    slug: "dluhc",
    organisation: "DLUHC",
    title: "Levelling Up Fund 2 digital application service",
    summary: "A complex, UK-wide funding application and assessment service was delivered rapidly for local authorities and caseworkers.",
    image: "/images/success-stories/dluhc.png",
    source: "https://govforms.co.uk/use-cases/dluhc",
    challenge: [
      "Turn a rough workflow into a live service within a month.",
      "Support complex business cases from authorities across all four UK nations.",
      "Give more than 30 caseworkers structured information for assessment.",
    ],
    solution: [
      "A 256-page accessible service was assembled without custom coding.",
      "Authentication, branching, validation, uploads and save-and-return were configured.",
      "Submissions were transmitted into a DLUHC-controlled SharePoint repository.",
    ],
    outcome: [
      "The capability was delivered in two weeks and ran without unplanned downtime.",
      "Several hundred applications supported allocation of £1bn in funding.",
      "Delivery was eight times more cost-effective than a traditional bespoke build.",
    ],
  },
  {
    slug: "scottish-government",
    organisation: "Scottish Government",
    title: "A secure Covid grant service delivered in two weeks",
    summary: "A 12-page gov.scot-branded journey routed eligible citizens to grant support across every Scottish local authority.",
    image: "/images/success-stories/scottish-government.png",
    source: "https://govforms.co.uk/use-cases/the-scottish-government",
    challenge: [
      "Create a grant journey for citizens affected by a positive Covid test.",
      "Serve communities across all 32 Scottish local authorities.",
      "Give operations teams timely visibility of eligible applicants.",
    ],
    solution: [
      "An accessible journey used Scottish Design System components.",
      "Validation and branching matched each citizen to the correct authority.",
      "Reviewer reporting and spreadsheet exports supported downstream operations.",
    ],
    outcome: [
      "Several thousand citizens were directed to the right grant support.",
      "The service was delivered in two weeks and ran without unplanned downtime.",
      "The reusable approach cost eight times less than a bespoke build.",
    ],
  },
  {
    slug: "defra",
    organisation: "DEFRA",
    title: "Award-winning dead wild bird reporting service",
    summary: "DEFRA moved public reporting online to improve disease surveillance while reducing pressure on its contact centre.",
    image: "/images/success-stories/defra.png",
    source: "https://govforms.co.uk/use-cases/defra",
    challenge: [
      "Respond quickly to rising reports during the avian flu outbreak.",
      "Replace an inefficient telephone reporting process.",
      "Capture locations accurately and integrate with a system of record.",
    ],
    solution: [
      "Govforms and Kainos designed a mobile-friendly public journey.",
      "Ordnance Survey mapping captured coordinates and nearest addresses.",
      "Microsoft Dataverse received structured submission data.",
    ],
    outcome: [
      "DEFRA's fastest digital delivery was completed within six weeks.",
      "The service received more than 60,000 submissions, with 51% on mobile.",
      "It achieved supplier savings and won a DEFRA Group Award for innovation.",
    ],
  },
];
