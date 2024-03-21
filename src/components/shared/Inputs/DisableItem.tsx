import { DisableIcon } from "@/utils/icons/Icons";

const DisableItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <DisableIcon />
      <div>{text}</div>
    </div>
  );
};

export default DisableItem;
