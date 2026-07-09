import type { Config } from "tailwindcss";

// Theme tokens mirror the HumbleOps-style visual system (dark ink, single
// orange accent, Bricolage Grotesque display / Geist body). Component code
// references these names, not hex values, so a rebrand is a one-file change.
// Some keys keep their original (GOV.UK-era) names — navy, brand.blue,
// panel, line, muted — because pricing.module.css and several marketing
// components still reference them; only the values changed.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1c1c1c",
        "navy-2": "#0a0a0a",
        brand: {
          blue: "#1d70b8",
          "blue-deep": "#1d70b8",
        },
        paper: "#fafafa",
        panel: "#f3f6f9",
        "panel-alt": "#e8eef4",
        line: "rgba(0, 0, 0, 0.15)",
        ink: "#1c1c1c",
        muted: "rgba(0, 0, 0, 0.56)",
        amber: {
          bg: "#daecff",
          ink: "#1d70b8",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Bricolage Grotesque", "Georgia", "serif"],
        sans: [
          "Geist",
          "Geist Placeholder",
          "var(--font-sans-fallback)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "24px",
        xl: "30px",
        "2xl": "40px",
      },
      boxShadow: {
        // Layered elevation shadow pulled from the Framer export's card component.
        soft: "0 0.7px 0.7px -0.4px rgba(0,0,0,0.03), 0 1.8px 1.8px -0.8px rgba(0,0,0,0.03), 0 3.6px 3.6px -1.3px rgba(0,0,0,0.03), 0 6.9px 6.9px -1.7px rgba(0,0,0,0.03), 0 13.6px 13.6px -2.1px rgba(0,0,0,0.03), 0 30px 30px -2.5px rgba(0,0,0,0.03)",
      },
      maxWidth: {
        wrap: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
