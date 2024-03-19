import StarsRating from "./StarsRating";

const RatingLeftInfo = () => {
  return (
    <>
      <h3 className="font-bold">Overall Apartment Rating (23)</h3>
      <div className="flex items-center gap-2">
        <div className="h-6">
          <StarsRating />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">3.6</span>
          <span className="font-light text-sm">stars</span>
        </div>
      </div>
      <p className="text-xs">
        The number in parenthesis is the number of customers who have rated
      </p>
    </>
  );
};

export default RatingLeftInfo;
