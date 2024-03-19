import { DownArrow, Message, Notification } from "@/utils/icons/Icons";
import CreateAd from "./CreateAd";
import FlagDrop from "./FlagDrop";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";

const DetailsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <HeaderSearch />
      <div className="hidden md:flex items-center justify-center gap-6">
        <CreateAd />
        <ThemeToggler />
        <FlagDrop />
        <div className="bg-gray-100 rounded-full p-2">
          <Notification />
        </div>
        <div className="bg-gray-100 rounded-full p-2">
          <Message />
        </div>
        <div className="flex items-center gap-1 mr-6">
          <Image
            src={"/images/profile-next.png"}
            alt="Profile"
            height={34}
            width={34}
            className="rounded-full"
          />
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
