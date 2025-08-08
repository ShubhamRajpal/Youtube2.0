import { useEffect, useState } from "react";
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_VIDEOS_CATEGORY,
} from "../utils/constants";
import ShowVideo from "./ShowVideo";
import Shimmer from "./Shimmer";
import { updateCategoryId, getPageToken } from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const pageToken = useSelector((store) => store.video.pageToken);
  const categoryId = useSelector((store) => store.video.categoryId);
  const dispatch = useDispatch();
  const [urlSearchparams] = useSearchParams();
  const category = urlSearchparams.get("v");

  let PopularVideos_API_URL = YOUTUBE_VIDEOS_API;
  let Category_API_URL = YOUTUBE_VIDEOS_CATEGORY;

  useEffect(() => {
    getVideos(category);
  }, [category, nextPageToken]);

  const getVideos = async (videoCategory = 0) => {
    if (nextPageToken) {
      if (videoCategory > 0) {
        Category_API_URL += `&pageToken=${nextPageToken}`;
      } else {
        PopularVideos_API_URL += `&pageToken=${nextPageToken}`;
      }
    }

    let response;

    if (videoCategory > 0) {
      response = await fetch(
        `${Category_API_URL}&videoCategoryId=${videoCategory}`
      );
    } else {
      response = await fetch(PopularVideos_API_URL);
    }

    const data = await response.json();
    console.log(data);
    dispatch(getPageToken(data.nextPageToken));
    setVideos(
      categoryId === videoCategory
        ? ((videos) => [...videos, ...data.items])
        : data.items
    );

    if (categoryId !== videoCategory) {
      dispatch(updateCategoryId(videoCategory));
    }
  };

  return videos?.length === 0 ? (
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
