// Plain data module, deliberately not exported from HomeFaq.tsx itself:
// that file is "use client" (it needs useState for the accordion), and a
// server component (app/page.tsx) can't call .map() on a value exported
// from a client module — the RSC bundler treats every export of a "use
// client" file as a client boundary, even a plain array with no
// component/hook in sight. Living here instead lets both HomeFaq.tsx (the
// visible accordion) and app/page.tsx (FAQPage structured data) import the
// same content without crossing that boundary.
export const FAQS = [
  {
    question: "Can I try Govform before purchasing?",
    answer:
      "Yes. You can create and test services for free and select a paid plan when you are ready to publish.",
  },
  {
    question: "Is Govform only for government organisations?",
    answer:
      "No. Govform is proven in UK public services, but the platform is available to businesses, charities, healthcare providers, education organisations and other teams handling complex or sensitive processes.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No coding is required for most services. Developers can also use APIs, webhooks and integrations for more advanced requirements.",
  },
  {
    question: "Can Govform connect with our existing systems?",
    answer:
      "Yes. Govform can connect with storage, identity, messaging and operational systems through supported integrations, APIs and webhooks.",
  },
  {
    question: "Can Govform support complex workflows?",
    answer:
      "Yes. Services can include conditional journeys, document collection, internal review, approvals, notifications and case-management processes.",
  },
  {
    question: "How does Govform support accessibility?",
    answer:
      "Govform provides accessible components and patterns from the start. Your team remains responsible for the accessibility of its questions, guidance and uploaded content, while Govform supports the underlying service experience.",
  },
  {
    question: "How is our information protected?",
    answer:
      "Govform uses server-side validation, encryption, access controls and independently certified information-security processes. More detailed assurance documentation is available for procurement and security teams.",
  },
];
