import Link from "next/link";
import MenuButton from "./MenuButton";
import { Phone } from "lucide-react";
import ResumeButton from "./ResumeButton";
import { fetchProfileData } from "../lib/data";

const Navbar = async () => {
  const profileData = await fetchProfileData();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 -mx-4 px-4 py-3 mb-4">
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-row gap-2 items-center justify-between lg:justify-start">
          <MenuButton />
          <Link
            href="/"
            className="text-base font-bold lg:text-xl tracking-tight hover:text-primary transition-colors"
          >
            Prasoon Bandi
          </Link>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <ResumeButton hideText={true} resumeUrl={profileData.resumeUrl} />

          <Link
            href="/contact"
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Phone size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
