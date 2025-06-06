import Link from "next/link";
import MenuButton from "./MenuButton";
import ToggleTheme from "./ToggleTheme";
import { Phone } from "lucide-react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  return (
    <nav className="p-2 border-b-1 pb-1 mb-2">
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-row gap-2 items-center justify-between lg:justify-start">
          <MenuButton />
          <Link href="/" className={`text-base font-bold  lg:text-[1.5rem]`}>
            Mani Sai Prasoon Bandi
          </Link>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <ResumeButton hideText={true} />

          <Link href="/contact">
            <Phone size={"18px"} />
          </Link>

          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
