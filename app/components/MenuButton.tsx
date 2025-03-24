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
import { CircleUser, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const MenuButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 w-[300px]">
        <SheetHeader className="p-0">
          <SheetTitle className="flex flex-row gap-1">
            <CircleUser />
            <span>Mani Sai Prasoon</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2">
          {ROUTE_LINKS.map((routeLink) => {
            return (
              <SheetClose asChild key={routeLink.link}>
                <Link
                  href={routeLink.link}
                  className="text-sm font-light 
                    hover:font-medium
                  hover:text-indigo-800
                  "
                >
                  {routeLink.label}
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
