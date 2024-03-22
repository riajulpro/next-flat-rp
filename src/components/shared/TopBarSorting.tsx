import { DownArrow, Sorting } from "@/utils/icons/Icons";
import { SalesOutline } from "@/utils/icons/SidebarIcons";
import Image from "next/image";

const TopBarSorting = () => {
  return (
    <section className="bg-white flex items-center lg:justify-end">
      <div className="p-3 flex items-center gap-1 lg:gap-[8px]">
        <span className="text-xs md:text-base">Sales</span>
        <Image src={"/icons/Toggle.png"} alt="Toggle" height={20} width={51} />
        <span className="text-xs md:text-base">Rents</span>
      </div>
      <div className="p-3 flex items-center gap-1 lg:gap-[16px]">
        <SalesOutline />
        <span className="text-xs md:text-base">Price</span>
        <DownArrow />
      </div>
      <div className="p-3 flex items-center gap-1 lg:gap-[16px]">
        <Sorting />
        <span className="text-[5px] md:text-base">Sort By</span>
        <DownArrow />
      </div>
    </section>
  );
};

export default TopBarSorting;
