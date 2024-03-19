const AdsCard = ({ text, height }: { text?: string; height?: string }) => {
  return (
    <div
      className={`${
        height ? height : "h-[124px]"
      } px-[3px] bg-[#8D4E83] center-vnh text-white`}
    >
      {text}
    </div>
  );
};

export default AdsCard;
