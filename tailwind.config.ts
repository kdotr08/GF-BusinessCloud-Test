import type { Config } from "tailwindcss";

// Theme tokens follow Column's (fintech) visual language — Indigo Navy/
// Seafoam/Signal Orange palette, Inter throughout, flat 8px radius. Component
// code references these names, not hex values, so a rebrand is a one-file
// change. Some keys keep their original (GOV.UK-era) names — navy, brand.blue,
// panel, line, muted — because pricing.module.css and several marketing
// components still reference them; only the values changed.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#111a4a",
        brand: {
          blue: "#111a4a",
          "blue-deep": "#011821",
        },
        paper: "#fafafa",
        panel: "#fafafa",
        "panel-alt": "#ffffff",
        line: "#e3e4e8",
        ink: "#3b3e47",
        muted: "#7c7f88",
        amber: {
          bg: "rgba(17, 26, 74, 0.08)",
          ink: "#111a4a",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "var(--font-display)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
      },
      boxShadow: {
        // Column's hairline + whisper shadow (--shadow-sm).
        soft: "rgba(18,22,30,0.024) 0px 1px 4px 0px, rgba(18,22,30,0.05) 0px 1px 0px 0px, rgba(18,22,30,0.024) 0px 0px 0px 1px",
      },
      maxWidth: {
        wrap: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
