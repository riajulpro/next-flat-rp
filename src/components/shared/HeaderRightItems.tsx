import React from "react";
import ThemeToggler from "./ThemeToggler";
import { DownArrow, Home, IndianFlag } from "@/utils/icons/Icons";

const HeaderRightItems = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="mr-[18.33px]">
        <ThemeToggler />
      </div>
      <div className="relative mr-[15.49px]">
        <IndianFlag />
        <div className="absolute right-0 -bottom-[6px] bg-gray-300 rounded-full h-4 w-4 center-vnh">
          <DownArrow />
        </div>
      </div>
      <div>
        <button className="header-btn mr-[17.55px]">
          <Home /> <span>Create an Ad</span>
        </button>
      </div>
      <div>
        <button className="header-btn">Login/Sign up</button>
      </div>
    </section>
  );
};

export default HeaderRightItems;
