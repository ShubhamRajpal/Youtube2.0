import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_KEYWORD_SEARCH } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResuts = () => {
  const [results, setResults] = useState(null);
  const Keyword = useSelector((store) => store.search.keyword);

  useEffect(() => {
    getSearchresults();
  }, [Keyword]);

  const getSearchresults = async () => {
    const response = await fetch(
      YOUTUBE_KEYWORD_SEARCH + Keyword + "&type=video&key=" + GOOGLE_API_KEY
    );
    const json = await response.json();
    setResults(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {results &&
        results.map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId } >
            <VideoCard  info={video} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResuts;
