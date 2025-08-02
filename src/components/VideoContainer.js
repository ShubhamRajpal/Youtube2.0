import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import ShowVideo from "./ShowVideo";
import Shimmer from "./Shimmer";
import { getPageToken } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const dispatch = useDispatch();
  const pageToken = useSelector((store) => store.video.pageToken);
  let API_URL = YOUTUBE_VIDEOS_API;

  useEffect(() => {
    getVideos();
  }, [nextPageToken]);

  const getVideos = async () => {
    if (nextPageToken) {
      API_URL += `&pageToken=${nextPageToken}`;
    }
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    dispatch(getPageToken(data.nextPageToken));


    setVideos((videos) => [...videos, ...data.items]);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <ShowVideo
      videos={videos}
      setNextPageToken={(s) =>
        setNextPageToken(nextPageToken !== pageToken ? pageToken : "")
      }
    />
  );
};

export default VideoContainer;
