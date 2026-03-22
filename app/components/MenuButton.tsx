"use client";

import { ROUTE_LINKS } from "@/app/utils/constants";
import { Button } from "@/components/ui/button";
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
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 w-[280px]">
        <SheetHeader className="p-0 mb-6">
          <SheetTitle className="text-lg font-bold tracking-tight">
            Prasoon Bandi
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1">
          {ROUTE_LINKS.map((routeLink) => (
            <SheetClose asChild key={routeLink.link}>
              <Link
                href={routeLink.link}
                className={`text-sm px-3 py-2 rounded-lg transition-colors ${
                  pathname === routeLink.link
                    ? "font-semibold bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
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
