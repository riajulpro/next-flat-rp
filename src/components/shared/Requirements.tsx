import { TikMark, WarningIcon, Wrong } from "@/utils/icons/Icons";

const Requirements = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p className="flex gap-1 items-center">
        <TikMark /> Requirements 1
      </p>
      <p className="flex gap-1 items-center">
        <TikMark /> Requirements 2
      </p>
      <p className="flex gap-1 items-center">
        <WarningIcon /> Requirements 3
      </p>
      <p className="flex gap-1 items-center">
        <Wrong /> Requirements 4
      </p>
    </div>
  );
};

export default Requirements;
