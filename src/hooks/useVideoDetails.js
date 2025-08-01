import { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../utils/constants";

const useVideoDetails = (searchparams) => {

  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    getVideoDetails();
  }, [searchparams]);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API + searchparams.get("v"));

    const response = await data.json();

    response?.items[0] && setVideoDetails(response.items[0]);
  };

  return videoDetails;
};

export default useVideoDetails;
