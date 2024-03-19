import { Search } from "@/utils/icons/Icons";

const HeaderSearch = () => {
  return (
    <div className="lg:ml-[33.56px] lg:mr-auto flex items-center gap-[19.34px]">
      <Search />
      <input
        type="text"
        className="w-56"
        placeholder="Type to search a localization..."
      />
    </div>
  );
};

export default HeaderSearch;
