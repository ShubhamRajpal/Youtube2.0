import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { COMMENTSTHREADS_API } from "../utils/constants";
import CommentsShimmer from "./CommentsShimmer";

const CommentsContainer = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getComments();
  }, [videoId]);

  const getComments = async () => {
    const data = await fetch(COMMENTSTHREADS_API + "&videoId=" + videoId);
    const response = await data.json();
    console.log(response);
    setCommentsList(response.items);
  };

  return commentsList?.length === 0 ? (
    <CommentsShimmer />
  ) : (
    <div className="my-8">
      <h1 className="font-bold text-2xl mb-8">
        {commentsList?.length} Comments
      </h1>

      {commentsList && <CommentList comment={commentsList} />}
    </div>
  );
};

export default CommentsContainer;
