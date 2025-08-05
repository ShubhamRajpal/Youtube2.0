import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const ShowSearchVideos = ({ videos, setNextPageToken }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastVideo);
          setNextPageToken();
        }
        console.log(param);
      },
      { threshold: 0.5 }
    );

    const lastVideo = document.querySelector(".showSearch-video:last-child");

    if (!lastVideo) return;

    observer.observe(lastVideo);
  }, [videos]);

  return (
    <div
      className={`flex flex-wrap ${
        isMenuOpen ? "ml-[255px] basis-[85%]" : "ml-4 basis-[100%]"
      }`}>
      {videos?.map((video, index) => (
        <Link
         className="showSearch-video"
          key={index}
          to={"/watch?v=" + video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default ShowSearchVideos;
