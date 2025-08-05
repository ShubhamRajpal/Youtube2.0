import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`col-span-8 px-4 ${
        isMenuOpen ? "ml-[240px] basis-[85%]" : "ml-0 basis-[100%]"
      }`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
