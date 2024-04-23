import { useLocation, useNavigate } from "react-router-dom";
import { NAVLINKS } from "../../constants";
import { homifyLogo } from "../../constants/images";
import { Button, ButtonIcon } from "../ui/Buttons";

const SideBar = ({ className }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  return (
    <nav
      className={`fixed z-40 bg-white w-[268px] h-screen flex flex-col items-start justify-between gap-16 px-6 py-6`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-16 ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <img src={homifyLogo} alt="" />
            <h1 className="text-primary   text-subtitle-1 font-RobotoBold">
              HOMIFY
            </h1>
          </div>
          <ButtonIcon size="lg" icon="bi-bell" color="transparent" />
        </div>
        <ul className="w-full list-none space-y-6">
          {NAVLINKS.map((item) => (
            <NavLink
              item={item}
              active={
                item.link.slice(1).toLocaleLowerCase() === pathname.slice(1)
              }
              handleClick={() => navigate(item.link)}
            />
          ))}
        </ul>
      </div>
      <li className="w-full text-black cursor-pointer flex items-center justify-start gap-3 text-base font-RobotoMd px-6 py-3" onClick={() => navigate('/login')}>
        <i className="bi-arrow-left"></i>
        <span className="">Se deconnecter</span>
      </li>
      {/* <div className="flex items-center justify-start w-full gap-2">
        <div className="bg-black-60 rounded-full size-10 cursor-pointer"></div>
        <p className="text-lead text-black">Rael Nathan</p>
      </div> */}
    </nav>
  );
};

export default SideBar;

const NavLink = ({ active, item, handleClick }) => {
  return (
    <li
      onClick={handleClick}
      key={item.name}
      className={`text-base font-RobotoMd hover:bg-primary hover:text-white rounded-md px-6 py-3 w-full gap-3 flex items-center justify-start cursor-pointer ${
        active ? "bg-primary text-white" : "text-black"
      }`}
    >
      <i className={`${item.icon} `}></i>
      <span>{item.name}</span>
    </li>
  );
};
