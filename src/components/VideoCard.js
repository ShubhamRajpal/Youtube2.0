import React from "react";
import { formatViewCount } from "../utils/helper";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics = null } = info;
  const { thumbnails, channelTitle, title } = snippet;

  const viewCount = statistics && formatViewCount(statistics.viewCount);

  return (
    <div className="p-2 w-[360] mt-2">
      <img
        className="rounded-2xl w-full"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="flex flex-col">
        <h1 className="font-semibold mt-2">{title}</h1>
        <p className="text-sm w-full">{channelTitle}</p>
        {statistics && <p className="text-sm">{viewCount} views</p>}
      </div>
    </div>
  );
};

export default VideoCard;
