const CheckBox = ({
  text,
  isChecked,
}: {
  text: string;
  isChecked?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isChecked ? isChecked : false}
      />
      <span className="text-sm text-[#868686]">{text}</span>
    </div>
  );
};

export default CheckBox;
