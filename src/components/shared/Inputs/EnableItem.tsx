import { EnableIcon } from "@/utils/icons/Icons";

const EnableItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <EnableIcon />
      <div>{text}</div>
    </div>
  );
};

export default EnableItem;
