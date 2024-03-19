import React from "react";
import ThemeToggler from "./ThemeToggler";
import FlagDrop from "./FlagDrop";
import CreateAd from "./CreateAd";

const HeaderRightItems = () => {
  return (
    <section className="hidden lg:flex justify-between items-center">
      <div className="mr-[18.33px]">
        <ThemeToggler />
      </div>
      <FlagDrop />
      <CreateAd />
      <div>
        <button className="header-btn">Login/Sign up</button>
      </div>
    </section>
  );
};

export default HeaderRightItems;
