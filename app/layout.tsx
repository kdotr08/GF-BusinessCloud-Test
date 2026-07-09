import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Footer } from "@/components/marketing/Footer";
import "./globals.css";

// Bricolage Grotesque backs the "serif"-named display token (headings,
// wordmark, plan prices). Inter is the fallback for the "sans" body token —
// Geist itself is self-hosted via @font-face in globals.css since this
// Next.js version's next/font/google catalog doesn't include it yet.
const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const sansFallback = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Govform.com",
  description: "Accessible, secure, production-grade digital service forms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFallback.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
