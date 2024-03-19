"use client";
import HeaderRightItems from "../shared/HeaderRightItems";
import Logo from "../shared/Logo";
import HeaderSearch from "../shared/HeaderSearch";

const Header = () => {
  return (
    <header className="h-[76px] bg-white fixed w-full top-0 left-0 z-40 md:static">
      <article className="flex justify-between items-center">
        <Logo />
        <HeaderSearch />
        <HeaderRightItems />
      </article>
    </header>
  );
};

export default Header;
