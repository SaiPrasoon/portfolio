"use client";

import { ROUTE_LINKS } from "@/app/utils/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuButton = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open menu" className="p-2 -mr-2 text-ink-black">
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-vellum p-10 w-[260px] border-ash">
        <SheetHeader className="p-0 mb-10">
          <SheetTitle className="font-degular text-body font-medium text-ink-black text-left">
            Mani Sai Prasoon Bandi
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-3">
          {ROUTE_LINKS.map((routeLink) => (
            <SheetClose asChild key={routeLink.link}>
              <Link
                href={routeLink.link}
                className={`font-degular text-body font-medium transition-colors ${
                  pathname === routeLink.link ? "text-ink-black" : "text-stone"
                }`}
              >
                {routeLink.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
