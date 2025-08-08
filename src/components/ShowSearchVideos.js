import { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";

const ShowSearchVideos = ({ videos, setNextPageToken }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(videos);

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

    const lastVideo = document.querySelector(".showSearch-video:last-child");

    if (!lastVideo) return;

    observer.observe(lastVideo);
  }, [videos]);

  return (
    <div
      className={`flex flex-wrap ${
        isMenuOpen ? "ml-[258px] basis-[85%]" : "ml-6 basis-[100%]"
      }`}>
      <ButtonList />
      {videos &&
        videos?.map((video, index) => (
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
