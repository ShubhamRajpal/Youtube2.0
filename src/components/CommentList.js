import React from "react";
import Comment from "./Comment";

const CommentList = ({ comment }) => {
  return comment.map((commentItem, index) => (
    <div key={commentItem.id}>
      <Comment
        data={
          commentItem.kind === "youtube#comment"
            ? commentItem?.snippet
            : commentItem.snippet?.topLevelComment?.snippet
        }
      />
      {commentItem.replies && (
        <div className="pl-10 border-black">
          <CommentList comment={commentItem.replies.comments} />
        </div>
      )}
    </div>
  ));
};

export default CommentList;
