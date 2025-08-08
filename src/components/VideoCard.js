import { useSelector } from "react-redux";
import { formatViewCount, publishedDate } from "../utils/helper";
import { useContext } from "react";
import { themeContext } from "../contexts/context";
import useChannelDetails from "../hooks/useChannelDetails";

const VideoCard = ({ info }) => {
  const { snippet, statistics = null } = info;
  const { thumbnails, channelTitle, title, publishedAt, channelId } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const channelInfo = useChannelDetails(channelId);
  const { dark } = useContext(themeContext);
  const viewCount = statistics && formatViewCount(statistics.viewCount);
  const timeElapsed = publishedDate(publishedAt);

  return (
    <div className={`p-2 mt-2 ${isMenuOpen ? "w-[357]" : "w-[430]"} `}>
      <img
        className="rounded-2xl w-full object-cover shadow-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="flex flex-col">
        <div className="flex gap-2 items-start">
          <img
            src={channelInfo?.snippet?.thumbnails?.default?.url}
            className="h-8 rounded-full mt-2"
            alt="videoChannel-thumbnail"
          />
          <h1
            className={`font-semibold mt-2 line-clamp-2 text-ellipsis ${
              dark && "text-white"
            }`}>
            {title}
          </h1>
        </div>

        <p
          className={`text-sm text-[#606060] ml-10 pt-1 ${
            dark && "text-[#aaaaaa]"
          }`}>
          {channelTitle}
        </p>
        <div>
          {statistics && (
            <span
              className={`text-[#606060] text-sm ml-10  ${
                dark && "text-[#aaaaaa]"
              }`}>
              {viewCount} views •{" "}
            </span>
          )}
          <span
            className={`text-[#606060] text-sm  ${dark && "text-[#aaaaaa]"}`}>
            {timeElapsed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
