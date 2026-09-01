"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { HomeFinalCta } from "./HomeFinalCta";
import { MAIN_NAV_LINKS } from "./nav-links";

export function SubpageHeader() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const hasDarkHero = [
    "/analytics",
    "/demo",
    "/features",
    "/integrations",
    "/pricing",
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

  return <HomeFinalCta />;
}
