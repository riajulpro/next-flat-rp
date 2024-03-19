import HeaderRightItems from "../shared/HeaderRightItems";
import Logo from "../shared/Logo";
import HeaderSearch from "../shared/HeaderSearch";

const Header = () => {
  return (
    <header className="h-[76px]">
      <article className="flex justify-between items-center">
        <Logo />
        <HeaderSearch />
        <HeaderRightItems />
      </article>
    </header>
  );
};

export default Header;
