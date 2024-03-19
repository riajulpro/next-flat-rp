import { Question } from "@/utils/icons/Icons";
import React from "react";
import StarsRating from "./StarsRating";

const RatingRightInfo = () => {
  return (
    <>
      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <span className="text-xs">Apartment Experience (22)</span>
          <Question />
        </p>
        <div className="flex items-center gap-1">
          <span className="h-6">
            <StarsRating />
          </span>
          <span className="text-xl font-bold">3.5</span>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <span className="text-xs">Location (21)</span>
          <Question />
        </p>
        <div className="flex items-center gap-1">
          <span className="h-6">
            <StarsRating />
          </span>
          <span className="text-xl font-bold">3.5</span>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <span className="text-">Cleanliness (21)</span>
          <Question />
        </p>
        <div className="flex items-center gap-1">
          <span className="h-6">
            <StarsRating />
          </span>
          <span className="text-xl font-bold">3.5</span>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <span className="text-[11px]">Condition, Comfort, Amenities(22)</span>
          <Question />
        </p>
        <div className="flex items-center gap-1">
          <span className="h-6">
            <StarsRating />
          </span>
          <span className="text-xl font-bold">3.5</span>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <span className="text-xs">Building (21)</span>
          <Question />
        </p>
        <div className="flex items-center gap-1">
          <span className="h-6">
            <StarsRating />
          </span>
          <span className="text-xl font-bold">3.5</span>
        </div>
      </div>
    </>
  );
};

export default RatingRightInfo;
