import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/marketing/Footer";
import { SubpageFinalCta, SubpageHeader } from "@/components/marketing/SubpageChrome";
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
const displayFont = localFont({
  src: [
    { path: "../public/fonts/inter-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/inter-700.ttf", weight: "700", style: "normal" },
  ],
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
        {/* Some browsers (Chrome/Firefox) restore the previous scroll
            position on a plain page refresh, not just back/forward
            navigation — so a reload could land mid-page instead of at the
            hero. Disabling scrollRestoration and forcing scrollTo(0, 0)
            here (in <head>, so it runs before paint) makes every refresh
            start at the top regardless of where the user was scrolled to.
            This only runs on a real page load, not client-side route
            changes, since the root layout's <head> isn't re-executed on
            in-app navigation. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);",
          }}
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@500,600,700&display=swap"
        />
      </head>
      <body>
        <SubpageHeader />
        {children}
        <SubpageFinalCta />
        <Footer />
      </body>
    </html>
  );
}
