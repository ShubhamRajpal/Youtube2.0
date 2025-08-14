import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const youtubePremiumIcon = new URL("../Assets/yt.png", import.meta.url).href;
const youtubeStudioIcon = new URL("../Assets/ythex.png", import.meta.url).href;
const youtubeKidsIcon = new URL("../Assets/ytkids.png", import.meta.url).href;
const youtubeMusicIcon = new URL("../Assets/ytround.png", import.meta.url).href;
import { explore } from "../utils/helper";
import { themeContext } from "../contexts/context";
import {
  MdOndemandVideo,
  MdOutlineFeedback,
  MdOutlineHistory,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RiHomeSmileLine, RiPlayListFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
  const { dark } = useContext(themeContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div
      className={`flex flex-col side-bar fixed overscroll-none z-30 gap-4 pl-5 col-span-4 h-[calc(100vh-80px)] sm:fixed sm:h-[calc(100vh-50px)] overflow-auto min-w-52 ${
        dark ? "bg-[#0F0F0F]" : "bg-white"
      }`}>
      <ul className="flex flex-col w-full gap-2 sm:pt-4">
        <li
          className={`flex items-center rounded-lg py-1 px-2 gap-4 ${
            dark ? "hover:bg-[#ffffff1a] text-white" : "hover:bg-gray-100"
          }`}>
          <RiHomeSmileLine size={20} />
          <Link to="/">Home</Link>
        </li>
        <li
          className={`flex items-center rounded-lg py-1 px-2 gap-4 ${
            dark ? "hover:bg-[#ffffff1a] text-white" : "hover:bg-gray-100"
          }`}>
          <SiYoutubeshorts size={20} />
          Shorts
        </li>
        <li
          className={`flex items-center rounded-lg py-1 px-2 gap-4 ${
            dark ? "hover:bg-[#ffffff1a] text-white" : "hover:bg-gray-100"
          }`}>
          <MdOutlineSubscriptions size={20} />
          Subscriptions
        </li>
      </ul>
      <span
        className={`w-52  ${
          dark ? "bg-[#ffffff14]" : "bg-gray-200"
        } block py-[0.5px] rounded-full `}></span>
      <ul className="flex flex-col w-full gap-2">
        <li
          className={`flex gap-4 items-center rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <MdOutlineHistory size={20} />
          History
        </li>
        <li
          className={`flex gap-4 items-center rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <RiPlayListFill size={20} />
          Playlists
        </li>
        <li
          className={`flex gap-4 items-center rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <MdOndemandVideo size={20} />
          Your Videos
        </li>
        <li
          className={`flex gap-4 items-center rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <MdOutlineWatchLater size={20} />
          Watch Later
        </li>
        <li
          className={`flex gap-4 items-center rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <BiLike size={20} />
          Liked Videos
        </li>
      </ul>
      <span
        className={`w-52  ${
          dark ? "bg-[#ffffff14]" : "bg-gray-200"
        } block py-[0.5px] rounded-full `}></span>
      <h1 className={`font-bold ${dark && "text-white"}`}>Explore</h1>
      <ul className="flex flex-col w-full gap-2">
        {explore.map((explore, index) => (
          <Link to={explore.url} key={explore.title}>
            <li
              className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
                dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
              }`}>
              {explore.icon}
              {explore.title}
            </li>
          </Link>
        ))}
      </ul>
      <span
        className={`w-52  ${
          dark ? "bg-[#ffffff14]" : "bg-gray-200"
        } block py-[0.5px] rounded-full `}></span>
      <h1 className={`font-bold ${dark && "text-white"}`}>More from Youtube</h1>
      <ul className="flex flex-col w-full gap-2">
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <img alt="home" src={youtubePremiumIcon} className="h-5" />
          Youtube Premium
        </li>
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <img alt="home" src={youtubeStudioIcon} className="h-5" />
          Youtube Studio
        </li>
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <img alt="home" src={youtubeMusicIcon} className="h-5" />
          Youtube Music
        </li>
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <img alt="home" src={youtubeKidsIcon} className="h-5" />
          Youtube Kids
        </li>
      </ul>
      <span
        className={`w-52  ${
          dark ? "bg-[#ffffff14]" : "bg-gray-200"
        } block py-[0.5px] rounded-full `}></span>
      <ul className="flex flex-col w-full gap-2">
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <TbSettingsAutomation size={20} />
          Settings
        </li>
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <LuHistory size={20} />
          Report History
        </li>
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <IoMdHelpCircleOutline size={20} />
          Help
        </li>
        <li
          className={`flex gap-4 items-center  rounded-lg py-1 px-2 ${
            dark ? "text-white hover:bg-[#ffffff1a]" : "hover:bg-gray-100"
          }`}>
          <MdOutlineFeedback size={20} />
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
