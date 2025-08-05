import React, { useEffect, useState } from "react";
import { YOUTUBE_KEYWORD_SEARCH } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";
import Shimmer from "./Shimmer";
import ShowSearchVideos from "./ShowSearchVideos";
import { getPageToken } from "../utils/videoSlice";

const SearchResuts = () => {
  const [results, setResults] = useState([]);
  const Keyword = useSelector((store) => store.search.keyword);

  const dispatch = useDispatch();
  const YOUTUBEAPIKEY = process.env.REACT_APP_YOUTUBEAPI_KEY;
  const [nextPageToken, setNextPageToken] = useState("");
  const pageToken = useSelector((store) => store.video.pageToken);

  useEffect(() => {
    dispatch(openMenu());
    getSearchresults();
  }, [Keyword, nextPageToken]);

  const getSearchresults = async () => {
    let API_URL =
      YOUTUBE_KEYWORD_SEARCH + Keyword + "&type=video&key=" + YOUTUBEAPIKEY;
    if (nextPageToken) {
      API_URL += `&pageToken=${nextPageToken}`;
    }
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    dispatch(getPageToken(data.nextPageToken));
    setResults((results) => [...results, ...data.items]);
  };

  return results?.length === 0 ? (
    <Shimmer />
  ) : (
    <ShowSearchVideos
      videos={results}
      setNextPageToken={(s) =>
        setNextPageToken(nextPageToken !== pageToken ? pageToken : "")
      }
    />
  );
};

export default SearchResuts;
