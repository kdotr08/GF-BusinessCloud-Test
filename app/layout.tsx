import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/marketing/Footer";
import "./globals.css";

// Column's type system runs on Inter end to end (headings, body, prices) —
// the homepage hero H1 is the one exception. It's been through two
// attempts to match Column's actual (paid, unavailable here) SuisseIntl:
// Hanken Grotesk (self-hosted via next/font/google) and now Switzer
// (Fontshare's free alternative, explicitly designed as a modern
// Suisse-Int'l-style grotesque — closer to the original than Hanken).
// Switzer isn't on next/font/google, so it's loaded via the Fontshare
// <link> below rather than a font object here. Its font-family is
// referenced directly in .heroHeadingFont (home.module.css), falling back
// to --font-display (Inter) — the hero heading's original font, before
// any of this — if Switzer fails to load.
const displayFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Govform.com",
  description: "Accessible, secure, production-grade digital service forms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={displayFont.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@500,600,700&display=swap"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
