import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { themeContext } from "../contexts/context";

const Body = () => {
  const { dark } = useContext(themeContext);
  console.log(dark);

  return (
    <div className="flex flex-col w-screen items-center sm:items-start">
      <Header />
      <div
        className={`flex pt-[67px] sm:pt-[51px] mt-[1px] w-screen ${
          dark && "bg-[#0F0F0F]"
        }`}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
