import type { Metadata } from "next";
import { Footer } from "@/components/marketing/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Govform.com",
  description: "Accessible, secure, production-grade digital service forms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
