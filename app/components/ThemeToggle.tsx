"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Dark is the default (:root). Light is an opt-in `.light` class on <html>,
 * applied before paint by the inline script in app/layout.tsx so there is no
 * flash. This component only reflects and flips that class.
 */
const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Read the real theme after hydration — the server can't know localStorage,
  // so first render must match the server's assumption (dark) and correct here.
  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // Private mode / storage disabled — the toggle still works for this page.
    }
    setIsLight(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      className="inline-flex items-center gap-2 font-degular text-caption text-stone hover:text-ink-black transition-colors"
    >
      <span aria-hidden className="inline-flex" suppressHydrationWarning>
        {isLight ? <Sun size={14} /> : <Moon size={14} />}
      </span>
      <span suppressHydrationWarning>
        {/* Before mount we render the default-theme label; it settles instantly. */}
        {mounted && isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default ThemeToggle;
