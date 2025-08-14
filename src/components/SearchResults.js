import React, { useEffect, useState } from "react";
import { YOUTUBE_KEYWORD_SEARCH } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";
import Shimmer from "./Shimmer";
import ShowSearchVideos from "./ShowSearchVideos";
import { getPageToken } from "../utils/videoSlice";
import { addKeywordSearch } from "../utils/searchSlice";
import { useSearchParams } from "react-router-dom";

const SearchResuts = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [results, setResults] = useState([]);
  const Keyword = useSelector((store) => store.search.keyword);

  const [urlSearchParam] = useSearchParams();
  const searchQuery = urlSearchParam.get("q");

  const dispatch = useDispatch();
  const YOUTUBEAPIKEY = process.env.REACT_APP_YOUTUBEAPI_KEY;
  const [nextPageToken, setNextPageToken] = useState("");
  const pageToken = useSelector((store) => store.video.pageToken);

  useEffect(() => {
    dispatch(openMenu());
    getSearchresults(searchQuery);
  }, [searchQuery, nextPageToken]);

  const getSearchresults = async (Query) => {
    let API_URL =
      YOUTUBE_KEYWORD_SEARCH + Query + "&type=video&key=" + YOUTUBEAPIKEY;
    if (nextPageToken) {
      API_URL += `&pageToken=${nextPageToken}`;
    }
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    dispatch(getPageToken(data.nextPageToken));

    setResults(
      Query === Keyword ? (videos) => [...videos, ...data.items] : data.items
    );

    if (Query !== Keyword) {
      dispatch(addKeywordSearch(Query));
    }
  };

  if (results?.length === 0)
    return (
      <div
        className={`flex flex-col no-scrollbar ${
          isMenuOpen ? "md:pl-[242px]" : "items-start sm:pl-4"
        }`}>
        <Shimmer />
      </div>
    );

  return (
    <div
      className={`flex flex-col no-scrollbar ${
        isMenuOpen ? "md:pl-[242px]" : "items-start sm:pl-4"
      }`}>
      <ShowSearchVideos
        videos={results}
        setNextPageToken={(s) =>
          setNextPageToken(nextPageToken !== pageToken ? pageToken : "")
        }
      />
    </div>
  );
};

export default SearchResuts;
