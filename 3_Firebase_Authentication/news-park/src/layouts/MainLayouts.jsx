
import { Outlet } from "react-router-dom";
import LeftNav from "../components/shared/LeftNav/LeftNav";
import RightNav from "../components/shared/RightNav/RightNav";
import Header from "../components/shared/Header/Header";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="font-poppins bg-white h-screen text-gray-800 px-5">
      <Header />
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-6 px-2 z-10 ">
        <div>
          <LeftNav />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
        <div>
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
