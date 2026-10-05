"use client";

import { ROUTE_LINKS } from "@/app/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

/**
 * Fixed left rail: wordmark at top, nav links at the bottom.
 * No background, no border — it floats on the vellum field.
 */
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[180px] flex-col justify-between py-16 pl-10">
      <Link
        href="/"
        className="font-degular text-body font-medium text-ink-black leading-snug"
      >
        Mani Sai
        <br />
        Prasoon Bandi
      </Link>

      <div className="flex flex-col gap-6">
        <nav className="flex flex-col gap-3">
          {ROUTE_LINKS.map((routeLink) => (
            <Link
              key={routeLink.link}
              href={routeLink.link}
              className={`font-degular text-body font-medium transition-colors hover:text-ink-black ${
                pathname === routeLink.link ? "text-ink-black" : "text-stone"
              }`}
            >
              {routeLink.label}
            </Link>
          ))}
        </nav>

        <div className="pt-6 border-t border-ash w-fit pr-8">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
