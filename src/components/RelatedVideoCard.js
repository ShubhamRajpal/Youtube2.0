const RelatedVideoCard = ({ data }) => {
  return (
    <div className="flex gap-2">
      <img
        src={data?.snippet?.thumbnails?.medium?.url}
        className=" h-24 rounded-lg"
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold tracking-wide line-clamp-2 text-black">
          {data?.snippet?.title}...
        </p>
        <p className="text-xs text-gray-500 tracking-wide">{data?.snippet?.channelTitle}</p>
        <div className="flex text-xs text-gray-500 gap-1">
          <p>23k views •</p>
          <p> 23 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
