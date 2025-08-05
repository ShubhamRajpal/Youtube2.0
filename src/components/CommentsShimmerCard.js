const CommentsShimmerCard = () => {
  return (
    <div className="flex gap-2 my-2">
      <div className="w-16 h-16 bg-gray-100 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="bg-gray-100 h-3 w-48 rounded-lg"></div>
        <div className="bg-gray-100 h-3 w-[600px] rounded-lg"></div>
        <div className="bg-gray-100 h-3 w-96 rounded-lg"></div>
        <div className="flex gap-8 my-4">
          <div className="bg-gray-100 h-3 w-44 rounded-lg"></div>
          <div className="bg-gray-100 h-3 w-16 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentsShimmerCard;
