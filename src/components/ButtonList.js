import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Chess",
  "Comedy",
  "Cricket",
  "Mixes",
  "Data Structures",
  "Recently watched",
  "Trending",
  "Jukebox",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
