import React from "react";
import CommentsShimmerCard from "./CommentsShimmerCard";

const CommentsShimmer = () => {
  return (
    <div className="flex flex-col gap-2 my-8">
      <div className="bg-gray-100 h-4 w-36 rounded-lg"></div>
      <CommentsShimmerCard />
      <CommentsShimmerCard />
      <CommentsShimmerCard />
      <CommentsShimmerCard />
    </div>
  );
};

export default CommentsShimmer;
