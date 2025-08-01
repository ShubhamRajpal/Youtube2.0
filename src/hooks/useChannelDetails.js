import React, { useEffect, useState } from "react";
import { CHANNELS_API_URL } from "../utils/constants";

const useChannelDetails = (channelId) => {
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    getChannelDetails();
  }, [channelId]);

  const getChannelDetails = async () => {
    const response = await fetch(CHANNELS_API_URL + channelId);
    const data = await response.json();

    setChannelInfo(data?.items?.[0])
  };
  return channelInfo;
};

export default useChannelDetails;
