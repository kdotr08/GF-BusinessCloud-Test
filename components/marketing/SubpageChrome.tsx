"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { HomeFinalCta } from "./HomeFinalCta";
import { MAIN_NAV_LINKS } from "./nav-links";

export function SubpageHeader() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const isDocumentationInnerPage = pathname.startsWith("/resources/documentation/");
  const hasDarkHero = pathname === "/resources" || pathname.startsWith("/pricing") || [
    "/analytics",
    "/business-estate",
    "/contact",
    "/demo",
    "/features",
    "/integrations",
    "/institutional",
    "/security",
    "/support",
    "/templates",
    "/use-cases",
    "/workflow",
  ].includes(pathname);
  const hasAutoHideNav = hasDarkHero || isDocumentationInnerPage;

  return (
    <div
      className={
        hasDarkHero
          ? "subpage-nav-overlay"
          : isDocumentationInnerPage
            ? "bg-[#f6f8fa] pt-4"
            : "bg-white pt-4"
      }
    >
      <div className="wrap">
        <Header
          key={isDocumentationInnerPage ? pathname : "subpage-header"}
          links={MAIN_NAV_LINKS}
          cta={{ href: "/contact", label: "Talk to us" }}
          variant={hasDarkHero ? "dark" : "light"}
          invertedCta={hasDarkHero}
          mobileAutoHide={hasAutoHideNav}
          containedAutoHide={hasAutoHideNav}
        />
      </div>
    </div>
  );
}

export function SubpageFinalCta() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/features" || pathname.startsWith("/resources")) return null;

  if (pathname === "/analytics") {
    return (
      <HomeFinalCta
        eyebrow="Ready when you are"
        title="Build your next digital service with confidence"
        body="Create an accessible, secure and production-ready digital service. Use real service data to keep improving it."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />
    );
  }

  if (pathname === "/integrations") {
    return (
      <HomeFinalCta
        eyebrow="Ready when you are"
        title="Build a connected digital service"
        body="Connect Govform with the tools, data and processes your organisation already uses. Start building independently or talk to our team about a more complex integration."
        primaryCta={{ label: "Start building free", href: "/pricing#plans" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />
    );
  }

  if (pathname === "/business-estate" || pathname === "/institutional") return null;

  return <HomeFinalCta />;
}
