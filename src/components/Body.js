import Sidebar from "./Sidebar";
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
