import { DownArrow, Sorting } from "@/utils/icons/Icons";
import { SalesOutline } from "@/utils/icons/SidebarIcons";
import Image from "next/image";

const TopBarSorting = () => {
  return (
    <section className="flex items-center justify-end gap-[33px] m-[19px]">
      <div className="p-3 flex items-center gap-[8px]">
        <span>Sales</span>
        <Image src={"/icons/Toggle.png"} alt="Toggle" height={20} width={51} />
        <span>Rents</span>
      </div>
      <div className="p-3 flex items-center gap-[16px]">
        <SalesOutline />
        <span>Price</span>
        <DownArrow />
      </div>
      <div className="p-3 flex items-center gap-[16px]">
        <Sorting />
        <span>Sort By</span>
        <DownArrow />
      </div>
    </section>
  );
};

export default TopBarSorting;
