import { BiDislike, BiLike } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { PiShareFatLight } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";

const Video = ({ data, channelInfo }) => {
  const [searchparams] = useSearchParams();

  return (
    <div className="flex flex-col w-full">
      <div className="">
        <iframe
          width="820"
          height="500"
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${searchparams.get(
            "v"
          )}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      {/* Channel Details */}
      <div className="my-3">
        <span>
          <h1 className="text-xl line font-bold">{data?.snippet?.title}</h1>
        </span>
        <div className="flex gap-4 items-center my-2">
          <div className="flex gap-4 items-center">
            <img
              className="h-10 rounded-full"
              src={channelInfo?.snippet?.thumbnails?.default?.url}
            />
            <div className="flex flex-col">
              <h2 className="font-semibold">{channelInfo?.snippet?.title}</h2>
              <p className="text-sm text-gray-500">
                {channelInfo?.statistics?.subscriberCount / 1000000}M
                subscribers
              </p>
            </div>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex gap-2 w-[60%] justify-end">
            <div className="flex items-start gap-4 bg-gray-100 font-bold py-2 px-4 rounded-full cursor-pointer">
              <span className="flex gap-1 text-md font-semibold">
                <BiLike size={25} />
                {data?.statistics?.likeCount}
              </span>
              <span className="border-r-2 h-7 bg-slate-300"></span>
              <span>
                <BiDislike size={25} />
              </span>
            </div>
            <div className="font-semibold bg-gray-100 rounded-full py-2 px-4 flex gap-1 items-center cursor-pointer">
              <PiShareFatLight size={25} />
              <span>Share</span>
            </div>
            <div className="font-semibold bg-gray-100 rounded-full py-2 px-4 flex gap-1 items-center cursor-pointer">
              <HiDownload size={25} />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      {/* Video Description */}
      <div className="bg-gray-100 rounded-lg py-2 px-4 flex flex-col gap-2">
        <div className="">
          <span className="text-black font-bold">
            {data?.statistics?.viewCount} views
          </span>
        </div>

        {data?.snippet?.localized?.description && (
          <div className="text-sm flex flex-col gap-2">
            {data?.snippet?.localized?.description
              .split("\n")
              .map((desc, index) => (
                <p className="text-black" key={index}>
                  {desc}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
