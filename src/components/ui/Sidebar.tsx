import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="relative h-full">
      <article className="lg:w-[248px] h-full border-r p-5">
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
      </article>
    </aside>
  );
};

export default Sidebar;
