import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((commentItem, index) => (
    <div key={index}>
        <Comment  data={commentItem} />
        <div className="pl-10 border-l border-black">
            <CommentList comments={commentItem.replies} />
        </div>
    </div>
  ));
};

export default CommentList;
