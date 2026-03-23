"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeft, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 -mx-4 px-4 py-3 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold lg:text-xl tracking-tight">Admin Panel</h2>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6 w-[250px]">
            <SheetHeader className="p-0 mb-6">
              <SheetTitle className="text-lg font-bold tracking-tight">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to Site
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-red-400 hover:bg-accent transition-colors w-full text-left"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
