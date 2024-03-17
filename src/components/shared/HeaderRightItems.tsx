import React from "react";
import ThemeToggler from "./ThemeToggler";

const HeaderRightItems = () => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <ThemeToggler />
      </div>
      <div>Dropdown</div>
      <div>Button one</div>
      <div>Button two</div>
    </section>
  );
};

export default HeaderRightItems;
