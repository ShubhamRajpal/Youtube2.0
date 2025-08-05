import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Chess",
  "Science",
  "Comedy",
  "Cricket",
  "Mixes",
  "Data Structures",
  "Trending",
  "Jukebox",
  "Live",
   "Recently watched",
];

const ButtonList = () => {
  return (
    <div className="flex gap-2 ml-3">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
