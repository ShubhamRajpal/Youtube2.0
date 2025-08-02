import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const ShowVideo = ({ videos, setNextPageToken }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        console.log(param);
        if (param[0].isIntersecting) {
          observer.unobserve(lastVideo);
          setNextPageToken();
        }
      },
      { threshold: 0.5 }
    );

    const lastVideo = document.querySelector(".show-video:last-child");

    if (!lastVideo) return;

    observer.observe(lastVideo);
  }, [videos]);

  return (
    <div className="flex flex-wrap gap-1">
      {videos &&
        videos.map((video, index) => (
          <Link className="show-video" key={index} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default ShowVideo;
