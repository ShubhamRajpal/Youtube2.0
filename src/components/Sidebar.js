import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const hutIcon = new URL("../Assets/hut.png", import.meta.url).href;
const historyIcon = new URL("../Assets/history.png", import.meta.url).href;
const fashionIcon = new URL("../Assets/fashion.png", import.meta.url).href;
const filmIcon = new URL("../Assets/film.png", import.meta.url).href;
const shoppingIcon = new URL("../Assets/bag.png", import.meta.url).href;
const flagIcon = new URL("../Assets/flag.png", import.meta.url).href;
const gameIcon = new URL("../Assets/game.png", import.meta.url).href;
const helpIcon = new URL("../Assets/help.png", import.meta.url).href;
const learningIcon = new URL("../Assets/bulb.png", import.meta.url).href;
const liveIcon = new URL("../Assets/live.png", import.meta.url).href;
const likeIcon = new URL("../Assets/like.png", import.meta.url).href;
const playlistIcon = new URL("../Assets/playlists.png", import.meta.url).href;
const sendIcon = new URL("../Assets/send.png", import.meta.url).href;
const settingsIcon = new URL("../Assets/settings.png", import.meta.url).href;
const shortsIcon = new URL("../Assets/shorts.svg", import.meta.url).href;
const trendingIcon = new URL("../Assets/trending.jpg", import.meta.url).href;
const watchIcon = new URL("../Assets/watch.jpg", import.meta.url).href;
const youtubePremiumIcon = new URL("../Assets/yt.png", import.meta.url).href;
const youtubeStudioIcon = new URL("../Assets/ythex.png", import.meta.url).href;
const youtubeKidsIcon = new URL("../Assets/ytkids.png", import.meta.url).href;
const youtubeMusicIcon = new URL("../Assets/ytround.png", import.meta.url).href;

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const currentPath = location.pathname;
  if (!isMenuOpen) return null;

  return (
    <div className={`flex flex-col gap-5 pl-7 col-span-4  min-w-52 ${currentPath.includes("watch") ? `absolute bg-white ` : ``}`}>
      <ul className=" flex flex-col w-full gap-3">
        <li className="flex gap-4">
          <img src={hutIcon} alt="home-menu" className="w-5 h-5" />
          <Link to="/">Home</Link>
        </li>
        <li className="flex gap-4">
          <img alt="home" src={shortsIcon} className="w-5 h-5" />
          Shorts
        </li>
        <li className="flex gap-4">
          <img
            alt="subscriptions"
            className="w-5 h-5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC"
          />
          Subscriptions
        </li>
      </ul>
      <div className="w-52 h-[2px] bg-gray-200"></div>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4">
          <img alt="home" src={historyIcon} className="w-5 h-5" />
          History
        </li>
        <li className="flex gap-4">
          <img alt="home" src={playlistIcon} className="w-5 h-5" />
          Playlists
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Cv3kluzzwRdkTKs6dfGx5pakHA2Y020qGg&usqp=CAU"
            className="w-5 h-5"
          />
          Your Videos
        </li>
        <li className="flex gap-4">
          <img alt="home" src={watchIcon} className="w-5 h-5" />
          Watch Later
        </li>
        <li className="flex gap-4">
          <img alt="home" src={likeIcon} className="w-5 h-5" />
          Liked Videos
        </li>
      </ul>
      <div className="w-52 h-[2px] bg-gray-200"></div>
      <h1 className="font-bold">Explore</h1>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4">
          <img alt="trending" src={trendingIcon} className="w-5 h-5" />
          Trending
        </li>
        <li className="flex gap-4">
          <img alt="shopping" src={shoppingIcon} className="w-5 h-5" />
          Shopping
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWszyralqwgbOGntFnauK72qEBy-o5adoiJw&usqp=CAU"
            className="w-5 h-5"
          />
          Music
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={filmIcon}
            className="w-5 h-5"
          />
          Films
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={liveIcon}
            className="w-5 h-5"
          />
          Live
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={gameIcon}
            className="w-5 h-5"
          />
          Gaming
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9RX5iWc_MoK-RXezXU_ZKXpTNSDg5n_igg&usqp=CAU"
            className="w-5 h-5"
          />
          News
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZpUUphmOLPyc1kIHbBApEoc02-KCwTpX-i0kY2hGUGJz9oD62cwC1vfcvQ3H_aepSos&usqp=CAU"
            className="w-5 h-5"
          />
          Sport
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={learningIcon}
            className="w-5 h-5"
          />
          Learning
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={fashionIcon}
            className="w-5 h-5"
          />
          Fashion & beauty
        </li>
      </ul>
      <div className="w-52 h-[2px] bg-gray-200"></div>
      <h1 className="font-bold">More from Youtube</h1>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4">
          <img
            alt="home"
            src={youtubePremiumIcon}
            className="w-5 h-5"
          />
          Youtube Premium
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={youtubeStudioIcon}
            className="w-5 h-5"
          />
          Youtube Studio
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={youtubeMusicIcon}
            className="w-5 h-5"
          />
          Youtube Music
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={youtubeKidsIcon}
            className="w-5 h-5"
          />
          Youtube Kids
        </li>
      </ul>
      <div className="w-52 h-[2px] bg-gray-200"></div>
      <ul className="flex flex-col w-full gap-3">
        <li className="flex gap-4">
          <img
            alt="home"
            src={settingsIcon}
            className="w-5 h-5"
          />
          Settings
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={historyIcon}
            className="w-5 h-5"
          />
          Report History
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={helpIcon}
            className="w-5 h-5"
          />
          Help
        </li>
        <li className="flex gap-4">
          <img
            alt="home"
            src={sendIcon}
            className="w-5 h-5"
          />
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
