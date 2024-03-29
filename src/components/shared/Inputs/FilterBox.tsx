"use client";

import GreyDoneIcon, { Search } from "@/utils/icons/Icons";
import React, { useState } from "react";
const FilterBox: React.FC<{
  optionArr: string[];
  placeholder: string;
  isApply?: boolean;
}> = ({ optionArr, placeholder, isApply }) => {
  const boxShadow = {
    boxShadow: "0px 1px 0px 0px rgba(208, 201, 214, 0.40) inset",
  };

  const [selected, setSelected] = useState(optionArr[0]);

  return (
    <div className="w-[325px] h-[308px] flex flex-col items-end justify-end gap-[14px]">
      <div className="w-full h-[50px] px-[20px] py-[16px] flex items-center justify-between rounded-[5px] border-[1px] border-[#F9F4F4]">
        <input
          type="text"
          className="outline-none w-full h-full"
          placeholder={placeholder}
        />
        <Search />
      </div>

      <div className="w-[305px] h-[125px] overflow-y-auto smoothBar flex items-start justify-center flex-col gap-[10px]">
        {optionArr.map((option, i) => (
          <div
            key={i + "ff"}
            className="flex items-center justify-start gap-[10px] cursor-pointer"
            onClick={() => setSelected(option)}
          >
            <div
              className="border-[2px] border-[#F9F4F4] w-[23px] h-[23px] rounded-sm center"
              style={boxShadow}
            >
              {selected === option ? <GreyDoneIcon /> : ""}
            </div>
            <p
              className={` ${
                selected === option ? "text-[#6979F8] italic" : ""
              }`}
            >
              {option}
            </p>
          </div>
        ))}
      </div>

      {isApply ? (
        <button className="w-full py-[13px] bg-[#6979F8] rounded-[4px] text-white mt-[19px]">
          Apply Filter
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterBox;
