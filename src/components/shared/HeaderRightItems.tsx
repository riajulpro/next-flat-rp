import React from "react";
import ThemeToggler from "./ThemeToggler";
import FlagDrop from "./FlagDrop";
import CreateAd from "./CreateAd";
import Link from "next/link";

const HeaderRightItems = () => {
  return (
    <section className="hidden lg:flex justify-between items-center">
      <div className="mr-[18.33px]">
        <ThemeToggler />
      </div>
      <FlagDrop />
      <Link href="/create-an-ad">
        <CreateAd />
      </Link>
      <div>
        <button className="header-btn">Login/Sign up</button>
      </div>
    </section>
  );
};

export default HeaderRightItems;
