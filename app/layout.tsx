import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/marketing/Footer";
import "./globals.css";

// Column's type system runs on Inter end to end (headings, body, prices) —
// no separate display face, no self-hosted Geist.
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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
