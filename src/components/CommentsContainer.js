import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Shubham Rajpal",
    text: "This is a comment text",
    replies: [
      {
        name: "Shubham Rajpal",
        text: "This is a comment text",
        replies: [
          {
            name: "Shubham Rajpal",
            text: "This is a comment text",
            replies: [
              {
                name: "Shubham Rajpal",
                text: "This is a comment text",
                replies: [],
              },
            ],
          },
          {
            name: "Shubham Rajpal",
            text: "This is a comment text",
            replies: [],
          },
        ],
      },
      {
        name: "Shubham Rajpal",
        text: "This is a comment text",
        replies: [],
      },
      {
        name: "Shubham Rajpal",
        text: "This is a comment text",
        replies: [],
      },
    ],
  },
  {
    name: "Shubham Rajpal",
    text: "This is a comment text",
    replies: [],
  },
  {
    name: "Shubham Rajpal",
    text: "This is a comment text",
    replies: [],
  },
  {
    name: "Shubham Rajpal",
    text: "This is a comment text",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1>Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
