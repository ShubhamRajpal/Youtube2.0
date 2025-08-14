import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const ShowVideo = ({ videos, setNextPageToken }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
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
    <div
      className={`flex flex-wrap gap-4 sm:gap-2 ${
        !isMenuOpen ? "w-screen" : "w-screen sm:w-[640px] md:w-[760px] xl:w-[1114px]"
      } `}>
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
