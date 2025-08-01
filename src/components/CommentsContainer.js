import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { COMMENTSTHREADS_API } from "../utils/constants";

const CommentsContainer = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState(null);

  useEffect(() => {
    getComments();
  }, [videoId]);

  const getComments = async () => {
    const data = await fetch(COMMENTSTHREADS_API + "&videoId=" + videoId);
    const response = await data.json();
    setCommentsList(response.items);
  };

  return (
    <div className="my-14">
      <h1 className="font-bold text-2xl mb-8">
        {commentsList?.length} Comments
      </h1>

      {commentsList && <CommentList comment={commentsList} />}
    </div>
  );
};

export default CommentsContainer;
