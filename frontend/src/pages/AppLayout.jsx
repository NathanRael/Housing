import { Outlet } from "react-router-dom";
import SideBar from "../components/pages/SideBar";

const AppLayout = () => {
  return (
    <div className="flex w-full items-start justify-start pe-6 relative">
      <div className="bg-white basis-[340px] w-full h-screen text-white">
        <SideBar/>
      </div>
      <Outlet/>
    </div>
  );
};

export default AppLayout;
