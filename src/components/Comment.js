import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
const likeIcon = new URL("../Assets/like-comment.png", import.meta.url).href;
const dislikeIcon = new URL("../Assets/dislike-comment.png", import.meta.url)
  .href;

const Comment = ({ data }) => {
  return (
    <div className="my-7">
      <div className="flex items-start">
        <img
          className="w-10 rounded-full"
          src={data?.authorProfileImageUrl}
          alt="comment-author"
        />
        <div className="flex flex-col mx-2">
          <p className="font-semibold text-md">{data?.authorDisplayName}</p>
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
