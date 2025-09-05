import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`flex flex-col no-scrollbar w-screen ${
        isMenuOpen ? "md:pl-[200px] lg:pl-[240px]" : "items-start sm:pl-4"
      }`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
