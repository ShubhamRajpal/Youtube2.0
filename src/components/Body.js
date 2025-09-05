import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ModeState } from "../contexts/context";

const Body = ({ breakpoint = 600 }) => {
  const { darkMode } = ModeState();
  console.log(darkMode);

  return (
    <div
      className={`flex flex-col w-full items-center sm:items-start overflow-x-hidden ${
        darkMode && "bg-[#0F0F0F]"
      }`}>
      <Header />
      <div className="max-w-screen flex pt-[67px] sm:pt-[51px] mt-[1px] ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
