import { Search } from "@/utils/icons/Icons";
import HeaderRightItems from "../shared/HeaderRightItems";
import Logo from "../shared/Logo";

const Header = () => {
  return (
    <header className="h-[76px]">
      <article className="flex justify-between items-center">
        <Logo />
        <section className="lg:ml-[33.56px] lg:mr-auto flex items-center gap-[19.34px]">
          <Search />
          <input
            type="text"
            className="w-56"
            placeholder="Type to search a localization..."
          />
        </section>
        <HeaderRightItems />
      </article>
    </header>
  );
};

export default Header;
