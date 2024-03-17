import HeaderRightItems from "../shared/HeaderRightItems";
import Logo from "../shared/Logo";

const Header = () => {
  return (
    <header>
      <article className="flex justify-between items-center">
        <Logo />
        <section className="lg:ml-[33.56px] lg:mr-auto">Search</section>
        <HeaderRightItems />
      </article>
    </header>
  );
};

export default Header;
