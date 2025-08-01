import React, { useEffect, useState } from "react";
import { YOUTUBE_KEYWORD_SEARCH } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";

const SearchResuts = () => {
  const [results, setResults] = useState(null);
  const Keyword = useSelector((store) => store.search.keyword);
  const dispatch = useDispatch();
  const YOUTUBEAPIKEY = process.env.REACT_APP_YOUTUBEAPI_KEY;

  useEffect(() => {
    dispatch(openMenu());
    getSearchresults();
  }, [Keyword]);

  const getSearchresults = async () => {
    const response = await fetch(
      YOUTUBE_KEYWORD_SEARCH + Keyword + "&type=video&key=" + YOUTUBEAPIKEY
    );
    const json = await response.json();
    setResults(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {results &&
        results.map((video) => (
          <Link key={video.id.videoId ? video.id.videoId : video.id.channelId} to={"/watch?v=" + video.id.videoId}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResuts;
