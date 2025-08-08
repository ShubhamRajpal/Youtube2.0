import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const hutIcon = new URL("../Assets/hut.png", import.meta.url).href;
const historyIcon = new URL("../Assets/history.png", import.meta.url).href;
const helpIcon = new URL("../Assets/help.png", import.meta.url).href;
const likeIcon = new URL("../Assets/like.png", import.meta.url).href;
const playlistIcon = new URL("../Assets/playlists.png", import.meta.url).href;
const sendIcon = new URL("../Assets/send.png", import.meta.url).href;
const settingsIcon = new URL("../Assets/settings.png", import.meta.url).href;
const shortsIcon = new URL("../Assets/shorts.svg", import.meta.url).href;
const watchIcon = new URL("../Assets/watch.jpg", import.meta.url).href;
const youtubePremiumIcon = new URL("../Assets/yt.png", import.meta.url).href;
const youtubeStudioIcon = new URL("../Assets/ythex.png", import.meta.url).href;
const youtubeKidsIcon = new URL("../Assets/ytkids.png", import.meta.url).href;
const youtubeMusicIcon = new URL("../Assets/ytround.png", import.meta.url).href;
import { explore } from "../utils/helper";
import { themeContext } from "../contexts/context";
import Home from "../Assets/Home";
import Shorts from "../Assets/Shorts";
import Subscriptions from "../Assets/Subscriptions";

const Sidebar = () => {
  const { dark } = useContext(themeContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  if (!isMenuOpen) return null;

  return (
    <div
      className={`flex flex-col side-bar fixed z-30  gap-4 pl-5 col-span-4 h-[calc(100vh-50px)] overflow-hidden min-w-52 ${
        dark ? "bg-[#0F0F0F]" : "bg-white"
      }`}>
      <ul className="flex flex-col w-full gap-2 pt-4">
        <li
          className={`flex items-center rounded-lg py-1 px-2 ${
            dark ? "hover:bg-[#ffffff1a] text-white" : "hover:bg-gray-100 D"
          }`}>
          <Home />
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center justify-start hover:bg-gray-100 rounded-lg py-1 px-2">
          <Shorts />
          Shorts
        </li>
        <li className="flex items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <Subscriptions />
          Subscriptions
        </li>
      </ul>
      <span className="w-52 bg-gray-200 block py-[0.5px] rounded-full"></span>
      <ul className="flex flex-col w-full gap-2">
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={historyIcon} className="h-5" />
          History
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={playlistIcon} className="h-5" />
          Playlists
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Cv3kluzzwRdkTKs6dfGx5pakHA2Y020qGg&usqp=CAU"
            className="h-5"
          />
          Your Videos
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={watchIcon} className="h-5" />
          Watch Later
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={likeIcon} className="h-5" />
          Liked Videos
        </li>
      </ul>
      <span className="w-52 bg-gray-200 block py-[0.5px] rounded-full"></span>
      <h1 className="font-bold">Explore</h1>
      <ul className="flex flex-col w-full gap-2">
        {explore.map((explore, index) => (
          <Link to={explore.url} key={explore.title}>
            <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
              {explore.icon}
              {explore.title}
            </li>
          </Link>
        ))}
      </ul>
      <span className="w-52 bg-gray-200 block py-[0.5px] rounded-full"></span>
      <h1 className="font-bold">More from Youtube</h1>
      <ul className="flex flex-col w-full gap-2">
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={youtubePremiumIcon} className="h-5" />
          Youtube Premium
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={youtubeStudioIcon} className="h-5" />
          Youtube Studio
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={youtubeMusicIcon} className="h-5" />
          Youtube Music
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={youtubeKidsIcon} className="h-5" />
          Youtube Kids
        </li>
      </ul>
      <span className="w-52 bg-gray-200 block py-[0.5px] rounded-full"></span>
      <ul className="flex flex-col w-full gap-2">
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={settingsIcon} className="h-5" />
          Settings
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={historyIcon} className="h-5" />
          Report History
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={helpIcon} className="h-5" />
          Help
        </li>
        <li className="flex gap-4 items-center hover:bg-gray-100 rounded-lg py-1 px-2">
          <img alt="home" src={sendIcon} className="h-5" />
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
