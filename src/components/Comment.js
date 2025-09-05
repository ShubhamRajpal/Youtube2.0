import { BiDislike, BiLike } from "react-icons/bi";
import { ModeState } from "../contexts/context";
import { publishedDate } from "../utils/helper";

const Comment = ({ data }) => {
  const { darkMode:dark } = ModeState();

  return (
    <div className={`my-7 ${dark ? "text-white" : ""}`}>
      <div className="flex items-start">
        <img
          className="w-10 rounded-full"
          src={data?.authorProfileImageUrl}
          alt="comment-author"
        />
        <div className="flex flex-col mx-2">
          <span className="flex gap-2 items-center">
            <p className="font-semibold text-md">{data?.authorDisplayName}</p>
            <p className="text-gray-500 text-sm">{publishedDate(data?.publishedAt)}</p>
          </span>
          <p className="text-sm space-x-2">{data?.textOriginal}</p>
        </div>
      </div>
      <div className="flex px-12 my-2 items-center">
        <BiLike size={20} />
        <span className="ml-1">
          {data?.likeCount > 0 ? data?.likeCount : null}
        </span>
        <BiDislike size={20} className="ml-3" />
        <p className="ml-8 text-sm font-semibold">Reply</p>
      </div>
    </div>
  );
};

export default Comment;
