import { DownArrow } from "@/utils/icons/Icons";
import React from "react";

type InputType = {
  label?: string;
  placeholder?: string;
  inputWidth?: string;
  isDown?: boolean;
  isOverlay?: boolean;
  overlayRight?: string;
  isRed?: boolean;
};

const LabelTopInput = ({
  label,
  placeholder,
  inputWidth,
  isDown,
  isOverlay,
  overlayRight,
  isRed,
}: InputType) => {
  return (
    <div className={`relative ${inputWidth ? inputWidth : "w-full"}`}>
      <input
        id="input"
        type="text"
        className="border border-gray-300 h-[52px] rounded-[8px] focus:outline-none focus:border-blue-500 w-full p-[10px]"
        placeholder={placeholder}
      />
      <label
        htmlFor="input"
        className="text-[14px] font-light absolute top-0 left-3 -mt-2 bg-white text-[#868686] px-1"
      >
        {label}
      </label>
      <div
        className={`${
          isDown ? "block" : "hidden"
        } absolute top-1/2 -translate-y-1/2 right-2`}
      >
        <DownArrow />
      </div>
      <div
        className={`${
          isOverlay ? "block" : "hidden"
        } absolute right-2 top-1/2 -translate-y-1/2 text-sm ${
          isRed ? "text-red-600" : "text-[#868686]"
        }`}
      >
        {overlayRight}
      </div>
    </div>
  );
};

export default LabelTopInput;
