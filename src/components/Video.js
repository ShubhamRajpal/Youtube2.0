import { useContext, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { PiShareFatLight } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";
import { formatViewCount, publishedDate } from "../utils/helper";
import { ModeState } from "../contexts/context";

const Video = ({ data, channelInfo }) => {
  const [searchparams] = useSearchParams();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { darkMode: dark } = ModeState();

  const handleDesriptionButton = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="lg:pl-2">
        <iframe
          width="820"
          height="500"
          className="lg:rounded-xl w-screen h-[300px] md:h-[550px] lg:w-[680px] lg:h-[500px] xl:w-[820px]"
          src={`https://www.youtube.com/embed/${searchparams.get(
            "v"
          )}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      {/* Channel Details */}
      <div className="my-3 pl-1 md:pl-2">
        <span>
          <h1
            className={`text-xl line font-bold px-2 sm:px-1 ${
              dark ? "text-white" : ""
            }`}>
            {data?.snippet?.title}
          </h1>
        </span>
        <div className="flex flex-col xl:flex-row items-start gap-3 xl:items-center my-2">
          <div className="flex gap-2 items-center">
            <img
              className="h-10 rounded-full"
              src={channelInfo?.snippet?.thumbnails?.default?.url}
            />
            <div className="flex flex-col">
              <h2 className={`font-semibold ${dark ? "text-white" : ""}`}>
                {channelInfo?.snippet?.title}
              </h2>
              <p className="text-sm text-gray-500">
                {formatViewCount(channelInfo?.statistics?.subscriberCount)}
                subscribers
              </p>
            </div>
            <button
              className={`${
                !dark ? "bg-black text-white" : "bg-white"
              } font-bold py-2 px-4 rounded-full`}>
              Subscribe
            </button>
          </div>
          <div className="flex gap-2 w-screen sm:w-[60%] xl:justify-end">
            <div
              className={`flex items-start gap-4 ${
                dark
                  ? "bg-[#ffffff1a] text-white font-semibold"
                  : "bg-gray-100 font-bold"
              }   py-2 px-4 rounded-full cursor-pointer`}>
              <span className={`flex gap-1 text-md font-semibold `}>
                <BiLike size={25} />
                {formatViewCount(data?.statistics?.likeCount)}
              </span>
              <span className="border-r-2 h-7 bg-slate-300"></span>
              <span>
                <BiDislike size={25} />
              </span>
            </div>
            <div
              className={`font-semibold ${
                dark ? "bg-[#ffffff1a] text-white" : "bg-gray-100 "
              } rounded-full py-2 px-4 flex gap-1 items-center cursor-pointer`}>
              <PiShareFatLight size={25} />
              <span>Share</span>
            </div>
            <div
              className={`font-semibold ${
                dark ? "bg-[#ffffff1a] text-white" : "bg-gray-100 "
              } rounded-full py-2 px-4 flex gap-1 items-center cursor-pointer`}>
              <HiDownload size={25} />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      {/* Video Description */}
      <div
        className={`rounded-lg py-2 px-4 flex flex-col gap-2 mx-2 w-[92%] ${
          dark ? "bg-[#ffffff1a] text-white font-semibold" : "bg-gray-100"
        }`}>
        <div className="flex gap-2">
          <span className="font-bold">
            {formatViewCount(data?.statistics?.viewCount)} views
          </span>
          <span className="font-bold">
            {publishedDate(data?.snippet?.publishedAt)}
          </span>
        </div>

        {data?.snippet?.localized?.description && (
          <div
            className={`text-sm gap-2 ${
              !isDescriptionOpen ? "line-clamp-2" : "flex flex-col"
            }`}>
            {data?.snippet?.localized?.description
              .split("\n")
              .map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
          </div>
        )}
        <div
          className=" text-blue-500 cursor-pointer"
          onClick={handleDesriptionButton}>
          {isDescriptionOpen ? "Show Less" : "Show More..."}
        </div>
      </div>
    </div>
  );
};

export default Video;
