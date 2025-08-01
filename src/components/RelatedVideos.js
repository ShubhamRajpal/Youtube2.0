import { Link } from "react-router-dom";
import useRelatedVideos from "../hooks/useRelatedVideos";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = ({ data }) => {
  const title = data?.snippet?.title;
  const relatedVideos = useRelatedVideos(title);

  console.log(relatedVideos);

  return (
    <div className="flex flex-col gap-2">
      {relatedVideos?.map((video, index) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <RelatedVideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
