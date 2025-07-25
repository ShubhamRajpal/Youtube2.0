import React from "react";

const Comment = ({ data }) => {
  return (
    <div>
      <div className="flex items-start my-2">
        <img
          className="w-10"
          src="https://img.icons8.com/?size=100&id=cV1jPimNOSK3&format=png&color=000000"
          alt="comment-author"
        />
        <div className="flex flex-col mx-2">
          <p className="font-bold">{data.name}</p>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
