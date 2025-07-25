import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
