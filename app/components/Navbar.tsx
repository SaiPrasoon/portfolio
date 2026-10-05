import Link from "next/link";
import MenuButton from "./MenuButton";
import ThemeToggle from "./ThemeToggle";

/** Mobile-only top bar. On lg+ the fixed Sidebar rail replaces this entirely. */
const Navbar = () => {
  return (
    <nav className="lg:hidden flex items-center justify-between py-6">
      <Link
        href="/"
        className="font-degular text-body font-medium text-ink-black"
      >
        Prasoon Bandi
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <MenuButton />
      </div>
    </nav>
  );
};

export default Navbar;
