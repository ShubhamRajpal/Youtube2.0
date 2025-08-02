import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-[360px] h-[300px] p-2 flex flex-col gap-2">
      <div className="bg-gray-100 rounded-lg p-2 h-[80%]"></div>
      <div className="flex items-center gap-2 w-full mt-1">
        <div className="bg-gray-100 rounded-full h-10 w-10"></div>
        <div className="flex flex-col gap-2">
          <div className="w-[295px] bg-gray-100 rounded-lg h-4"></div>
          <div className="w-48 bg-gray-100 rounded-lg h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
