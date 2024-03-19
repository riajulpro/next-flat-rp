import { DownArrow, IndianFlag } from "@/utils/icons/Icons";

const FlagDrop = () => {
  return (
    <div className="relative mr-[15.49px]">
      <IndianFlag />
      <div className="absolute right-0 -bottom-[6px] bg-gray-300 rounded-full h-4 w-4 center-vnh">
        <DownArrow />
      </div>
    </div>
  );
};

export default FlagDrop;
