import { Paper } from "@/utils/icons/Icons";

const DataCard = ({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string;
}) => {
  return (
    <div className="flex items-center gap-3 border rounded-md px-3 py-2">
      <Paper />
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm font-light">{subTitle}</p>
      </div>
    </div>
  );
};

export default DataCard;
