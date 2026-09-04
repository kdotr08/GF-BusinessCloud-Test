import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /platform only — orphaned, unlinked from nav, and duplicates
      // FeatureGrid/PlatformShowcase content that already lives on
      // /features. Any remaining "coming soon" pages carry their own
      // noindex,follow metadata rather than being blocked here.
      disallow: "/platform",
    },
    sitemap: "https://govform.com/sitemap.xml",
  };
}
