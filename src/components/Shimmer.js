import React from "react";
import ShimmerCard from "./ShimmerCard";
import { useSelector } from "react-redux";

const Shimmer = () => {


  return (
    <div className="flex flex-wrap gap-1 w-full">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
