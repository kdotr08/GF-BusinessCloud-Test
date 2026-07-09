import type { Config } from "tailwindcss";

// Theme tokens mirror the current draft branding (GOV.UK-style navy/blue/green).
// Swap the values here when the new-market branding lands — component code
// should reference these names, not hex values, so a rebrand is a one-file change.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b1f33",
        "navy-2": "#122c47",
        brand: {
          blue: "#1d70b8",
          "blue-deep": "#124d80",
          green: "#00703c",
        },
        paper: "#fbfaf7",
        panel: "#f4f8fb",
        "panel-alt": "#f3f2f1",
        line: "#d8dadc",
        "line-soft": "#dfe6ec",
        ink: "#0b1f33",
        muted: "#505a5f",
        amber: {
          bg: "#fef9c3",
          ink: "#7a6400",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"],
        sans: [
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
        DEFAULT: "4px",
      },
      maxWidth: {
        wrap: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
