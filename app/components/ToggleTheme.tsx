"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isLightTheme = () => {
    return theme === "light";
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button onClick={toggleTheme} variant={"ghost"}>
              {isLightTheme() ? (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {isLightTheme() ? (
              <p>Toggle to Dark Theme</p>
            ) : (
              <p>Toggle to Light Theme</p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ToggleTheme;
