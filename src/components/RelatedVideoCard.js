import { useContext } from "react";
import useRelatedVideos from "../hooks/useRelatedVideos";
import { publishedDate } from "../utils/helper";
import { themeContext } from "../contexts/context";
const RelatedVideoCard = ({ data }) => {

  const {dark} = useContext(themeContext);

  return (
    <div className="flex gap-2">
      <img
        src={data?.snippet?.thumbnails?.medium?.url}
        className=" h-24 rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <p className={`text-sm font-semibold tracking-wide line-clamp-2 ${dark ? "text-white" : "text-black"}`}> 
          {data?.snippet?.title}...
        </p>
        <p className="text-xs text-gray-500 tracking-wide">{data?.snippet?.channelTitle}</p>
        <div className="flex text-xs text-gray-500 gap-1">
          <p>{publishedDate(data?.snippet?.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
