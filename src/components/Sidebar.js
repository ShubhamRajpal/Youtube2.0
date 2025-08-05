import React from "react";
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

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const currentPath = location.pathname;
  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col fixed z-30 bg-white gap-4 pl-7 col-span-4 h-[calc(100vh-55px)] overflow-y-scroll min-w-52">
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4 items-center">
          <img src={hutIcon} alt="home-menu" className=" h-5" />
          <Link to="/">Home</Link>
        </li>
        <Link to="/?v=42">
          <li className="flex gap-4 items-center">
            <img alt="home" src={shortsIcon} className="h-5" />
            Shorts
          </li>
        </Link>
        <li className="flex gap-4 items-center">
          <img
            alt="subscriptions"
            className="h-5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC"
          />
          Subscriptions
        </li>
      </ul>
      <span className="w-52 bg-gray-100 block py-[1px] rounded-full"></span>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4 items-center">
          <img alt="home" src={historyIcon} className="h-5" />
          History
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={playlistIcon} className="h-5" />
          Playlists
        </li>
        <li className="flex gap-4 items-center">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Cv3kluzzwRdkTKs6dfGx5pakHA2Y020qGg&usqp=CAU"
            className="h-5"
          />
          Your Videos
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={watchIcon} className="h-5" />
          Watch Later
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={likeIcon} className="h-5" />
          Liked Videos
        </li>
      </ul>
      <span className="w-52 bg-gray-100 block py-[1px] rounded-full"></span>
      <h1 className="font-bold">Explore</h1>
      <ul className="flex flex-col w-full gap-3">
        {explore.map((explore, index) => (
          <Link to={explore.url} key={explore.title}>
            <li className="flex gap-4 items-center">
              {explore.icon}
              {explore.title}
            </li>
          </Link>
        ))}
      </ul>
      <span className="w-52 bg-gray-100 block py-[1px] rounded-full"></span>
      <h1 className="font-bold">More from Youtube</h1>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4 items-center">
          <img alt="home" src={youtubePremiumIcon} className="h-5" />
          Youtube Premium
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={youtubeStudioIcon} className="h-5" />
          Youtube Studio
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={youtubeMusicIcon} className="h-5" />
          Youtube Music
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={youtubeKidsIcon} className="h-5" />
          Youtube Kids
        </li>
      </ul>
      <span className="w-52 bg-gray-100 block py-[1px] rounded-full"></span>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4 items-center">
          <img alt="home" src={settingsIcon} className="h-5" />
          Settings
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={historyIcon} className="h-5" />
          Report History
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={helpIcon} className="h-5" />
          Help
        </li>
        <li className="flex gap-4 items-center">
          <img alt="home" src={sendIcon} className="h-5" />
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
