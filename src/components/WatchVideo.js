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
import { LiaCommentsSolid } from "react-icons/lia";


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
    <div className="flex flex-col lg:flex-row sm:justify-center gap-4 w-screen">
      <div className="flex flex-col w-screen lg:w-[820px]">
        <Video data={videoDetails} channelInfo={channelDetails} />
        {videoDetails?.snippet?.liveBroadcastContent === "none" ? (
          <CommentsContainer videoId={searchparams.get("v")} />
        ) : (
          <div className="flex bg-gray-100 gap-2 my-4 py-4 px-2 items-center rounded-lg ml-2">
            <LiaCommentsSolid />
            Join the conversation to interact with the creator and others
            watching this live stream.
          </div>
        )}
      </div>
      <div className="w-screen lg:w-1/3">
        {videoDetails?.snippet?.liveBroadcastContent === "live" && <LiveChat />}
        <RelatedVideos data={videoDetails} />
      </div>
    </div>
  );
};

export default WatchVideo;
