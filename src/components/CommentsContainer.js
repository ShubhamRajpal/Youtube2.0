import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { GOOGLE_API_KEY } from "../utils/constants";

const CommentsContainer = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState(null);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=100&videoId=" +
        videoId +
        "&key=" +
        GOOGLE_API_KEY
    );
    const response = await data.json();
    setCommentsList(response.items);
    console.log(response.items);
  };

  return (
    <div className="m-2 p-2">
      <h1 className="font-bold text-2xl mb-8">{commentsList?.length} Comments</h1>

      {commentsList && <CommentList comment={commentsList} />}
    </div>
  );
};

export default CommentsContainer;
