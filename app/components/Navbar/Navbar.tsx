import Link from "next/link";
import styles from "./Navbar.module.css";
import MenuButton from "../MenuButton";
import { ROUTE_LINKS } from "@/app/utils/constants";

const Navbar = () => {
  return (
    <nav className="p-2 border-b-1">
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2 items-center justify-between lg:justify-start">
          <MenuButton />
          <Link href="/" className={styles.logo}>
            Mani Sai Prasoon Bandi
          </Link>
        </div>

        <div className="flex flex-row gap-2">
          {ROUTE_LINKS.map((routeLink) => {
            return (
              <Link
                key={routeLink.link}
                href={routeLink.link}
                className="text-sm font-light 
                    hover:font-medium
                  hover:text-indigo-800
                  "
              >
                {routeLink.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
