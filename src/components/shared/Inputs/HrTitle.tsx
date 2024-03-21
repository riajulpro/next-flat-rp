const HrTitle = ({ text }: { text: string }) => {
  return (
    <div className="relative m-5">
      <hr className="border-[1px] border-black" />
      <span className="absolute p-1 bg-white text-sm left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {text}
      </span>
    </div>
  );
};

export default HrTitle;
