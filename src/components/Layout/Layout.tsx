import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="w-3/4 mt-10 ml-5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
