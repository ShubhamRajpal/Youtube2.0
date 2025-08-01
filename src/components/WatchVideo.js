import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import useVideoDetails from "../hooks/useVideoDetails";
import Video from "./Video";
import useChannelDetails from "../hooks/useChannelDetails";
import RelatedVideos from "./RelatedVideos";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();

  const videoDetails = useVideoDetails(searchparams);
  const channelId = videoDetails?.snippet?.channelId;
  const channelDetails = useChannelDetails(channelId);
  console.log(videoDetails);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col w-[820px]">
        <Video data={videoDetails} channelInfo={channelDetails} />
        <CommentsContainer videoId={searchparams.get("v")} />
      </div>
      <div className="w-[400px]">
        <LiveChat />
        <RelatedVideos data={videoDetails} />
      </div>
    </div>
  );
};

export default WatchVideo;
