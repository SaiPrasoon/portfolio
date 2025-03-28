import MenuButton from "./MenuButton";
import ToggleTheme from "./ToggleTheme";
import TransitionLink from "./TransitionLink";

const Navbar = () => {
  return (
    <nav className="p-2 border-b-1 pb-1 mb-2">
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-row gap-2 items-center justify-between lg:justify-start">
          <MenuButton />
          <TransitionLink
            href="/"
            className={`text-base font-bold  lg:text-[1.5rem]`}
          >
            Mani Sai Prasoon Bandi
          </TransitionLink>
        </div>

        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
