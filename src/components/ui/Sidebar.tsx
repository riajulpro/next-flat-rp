"use client";

import { SidebarContext, SidebarState } from "@/contexts/SidebarControl";
import { NavMenu } from "@/utils/mocks/NavItems";
import Image from "next/image";
import { useContext } from "react";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(SidebarContext)! as SidebarState;

  return (
    <aside className="relative h-full">
      <article
        className={`${
          sidebar ? "w-[86px]" : "lg:w-[248px]"
        } h-full p-5 flex flex-col justify-between duration-150`}
      >
        <section className="flex justify-between items-center gap-3 p-2 border rounded-md">
          <Image
            src={"/icons/FiltersIcon.png"}
            alt="Filter Icon"
            height={32}
            width={32}
            onClick={() => setSidebar(!sidebar)}
          />
          {sidebar ? (
            ""
          ) : (
            <>
              <p className="mr-auto text-[24px] font-semibold leading-[24px]">
                Filters
              </p>
              <Image
                src={"/icons/Arrows.png"}
                alt="Filter Icon"
                height={24}
                width={24}
                className="drop-shadow-custom rounded-full"
                onClick={() => setSidebar(!sidebar)}
              />
            </>
          )}
        </section>
        <section className="flex flex-col gap-3">
          {NavMenu.map((nav, idx) => (
            <div
              key={nav.title}
              className={`text-[16px] rounded p-3 flex items-center justify-between gap-4 ${
                idx === 0 ? "bg-gray-100 text-btnColor" : ""
              }`}
            >
              <div>{nav.icon}</div>
              {!sidebar ? (
                <>
                  <div className="mr-auto">{nav.title}</div>
                  <div>{nav.downArrow}</div>
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </section>
      </article>
    </aside>
  );
};

export default Sidebar;
