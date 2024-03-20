import { DownArrow, Search } from "@/utils/icons/Icons";
import React from "react";

type InputType = { placeholder?: string; inputWidth?: string };

const SectionInput = ({ placeholder, inputWidth }: InputType) => {
  return (
    <div className="flex flex-col">
      <div
        className="relative"
        style={{ width: inputWidth ? inputWidth : "377px" }}
      >
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <Search />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <DownArrow />
        </div>
        <input
          type="text"
          className="border border-gray-300 h-[52px] rounded-[8px] py-[10px] px-[28px] focus:outline-none focus:border-blue-500 w-full"
          placeholder={placeholder}
        />
      </div>
      <p className="text-xs text-red-600 mx-3">Can not be empty</p>
    </div>
  );
};

export default SectionInput;
