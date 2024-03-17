import { NavMenu } from "@/utils/mocks/NavItems";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="relative h-full">
      <article className="lg:w-[248px] h-full border-r p-5 flex flex-col justify-between">
        <section className="flex justify-between items-center gap-3 p-2 border rounded-md">
          <Image
            src={"/icons/FiltersIcon.png"}
            alt="Filter Icon"
            height={32}
            width={32}
          />
          <p className="mr-auto text-[24px] font-semibold leading-[24px]">
            Filters
          </p>
          <Image
            src={"/icons/Arrows.png"}
            alt="Filter Icon"
            height={24}
            width={24}
          />
        </section>
        <section className="mt-auto flex flex-col gap-3">
          {NavMenu.map((nav, idx) => (
            <div
              key={nav.title}
              className={`text-[16px] rounded p-3 flex items-center justify-between gap-4 ${
                idx === 0 ? "bg-gray-100 text-btnColor" : ""
              }`}
            >
              <div>{nav.icon}</div>
              <div className="mr-auto">{nav.title}</div>
              <div>{nav.downArrow}</div>
            </div>
          ))}
        </section>
      </article>
    </aside>
  );
};

export default Sidebar;
