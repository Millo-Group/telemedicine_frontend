import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
export default function Dashboard() {
  const [isLeftBarCollapsed, setIsLeftBarCollapsed] = useState(false);
  const toggleLeftBarHandler = () => {
    setIsLeftBarCollapsed(!isLeftBarCollapsed);
  };
  return (
    <>
      <div
        className={`${
          !isLeftBarCollapsed ? "sidebar-collapse" : ""
        } hold-transition dark-skin sidebar-mini theme-primary fixed  `}
      >
        <Header toggleLeftBarHandler={toggleLeftBarHandler} />
        <LeftBar />
        <Footer/>
        <Outlet />
      </div>
    </>
  );
}
