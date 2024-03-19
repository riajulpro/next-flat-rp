import { Question } from "@/utils/icons/Icons";
import React from "react";
import StarsRating from "./StarsRating";

const RatingRightInfo = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 justify-between">
          <div className="text-[10px]">Apartment Experience(22)</div>
          <Question />
        </div>
        <div className="flex items-center gap-1 justify-between">
          <StarsRating />
          <div className="text-xl font-bold">3.5</div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <div className="text-[10px]">Location (21)</div>
          <Question />
        </div>
        <div className="flex items-center gap-1">
          <StarsRating />
          <div className="text-xl font-bold">3.5</div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <div className="text-[10px]">Cleanliness (21)</div>
          <Question />
        </div>
        <div className="flex items-center gap-1">
          <StarsRating />
          <span className="text-xl font-bold">3.5</span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <div className="text-[10px]">Condition, Comfort, Amenities(22)</div>
          <Question />
        </div>
        <div className="flex items-center gap-1">
          <StarsRating />
          <div className="text-xl font-bold">3.5</div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <div className="text-[10px]">Building (21)</div>
          <Question />
        </div>
        <div className="flex items-center gap-1">
          <StarsRating />
          <div className="text-xl font-bold">3.5</div>
        </div>
      </div>
    </>
  );
};

export default RatingRightInfo;
