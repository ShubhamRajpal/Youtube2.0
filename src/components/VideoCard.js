import { useSelector } from "react-redux";
import { formatViewCount } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics = null } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const viewCount = statistics && formatViewCount(statistics.viewCount);

  return (
    <div className={`p-2 mt-2 ${isMenuOpen ? "w-[357]" : "w-[430]"} `}>
      <img
        className="rounded-2xl w-full object-cover"
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
