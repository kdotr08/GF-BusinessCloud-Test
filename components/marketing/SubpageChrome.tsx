"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { HomeFinalCta } from "./HomeFinalCta";
import { MAIN_NAV_LINKS } from "./nav-links";

export function SubpageHeader() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const hasDarkHero = pathname.startsWith("/pricing") || [
    "/analytics",
    "/demo",
    "/features",
    "/integrations",
    "/security",
    "/support",
    "/templates",
    "/workflow",
  ].includes(pathname);

  return (
    <div className={hasDarkHero ? "subpage-nav-overlay" : "bg-white pt-4"}>
      <div className="wrap">
        <Header
          links={MAIN_NAV_LINKS}
          cta={{ href: "/pricing#institutional", label: "Talk to us" }}
          variant={hasDarkHero ? "dark" : "light"}
          invertedCta={hasDarkHero}
        />
      </div>
    </div>
  );
}

export function SubpageFinalCta() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  if (pathname === "/analytics") {
    return (
      <HomeFinalCta
        eyebrow="Ready when you are"
        title="Build your next digital service with confidence"
        body="Create an accessible, secure and production-ready digital service—and use real service data to keep improving it."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "Talk to a digital services expert", href: "/contact" }}
      />
    );
  }

  return <HomeFinalCta />;
}
