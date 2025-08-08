import React, { useEffect, useState } from "react";
import { YOUTUBE_KEYWORD_SEARCH } from "../utils/constants";

const useRelatedVideos = (videoTitle) => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const YOUTUBEAPIKEY = process.env.REACT_APP_YOUTUBEAPI_KEY;

  useEffect(() => {
    getRelatedVideos();
  }, [videoTitle]);

  const getRelatedVideos = async () => {
    const response = await fetch(
      YOUTUBE_KEYWORD_SEARCH + `${encodeURIComponent(
        videoTitle
      )} + "%2023&key=` + YOUTUBEAPIKEY
    );
    const data = await response.json();
    setRelatedVideos(data.items);
    console.log(data);
  };

  return relatedVideos;
};

export default useRelatedVideos;
