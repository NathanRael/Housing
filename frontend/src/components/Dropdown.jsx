import { useState } from "react";

const Dropdown = ({ options = ["Gaming", "Anime", "Music"], className }) => {
    const defaultTransition = "transition duration-200";
  const [selectedItem, setSelectedItem] = useState(options[0] || "Selected");
  const [opened, setOpened] = useState(false);
  return (
    <div className={`flex items-start justify-start flex-col w-max gap-2 min-w-[320px] ${className} relative`}>
      <div
        onClick={() => setOpened((prev) => !prev)}
        className={`text-lead  text-white px-4 py-2 bg-white-40 hover:bg-white-60 rounded-lg items-center justify-between cursor-pointer w-full flex ${defaultTransition}`}
      >
        <p>{selectedItem || "Selection"}</p>
        <i className={`${defaultTransition} bi bi-arrow-right ${opened ? "rotate-90" : "rotate-0"}`}></i>
      </div> 
        <ul className={`absolute top-[48px]  bg-primary text-base rounded-lg text-white py-2  flex flex-col gap-2 px-2 w-full origin-top ${opened ? "z-30 opacity-1 skew-x-0 " : "-z-10 opacity-0 skew-x-[12deg]"}  ${defaultTransition}`} >
          {options?.map((option) => (
            <li
              onClick={() => {
                setSelectedItem(option);
                setOpened(false);
              }}
              key={option}
              className={`w-full cursor-pointer hover:bg-white-40 hover:ps-6 px-4 py-2 rounded-md ${defaultTransition} transition-all`}
            >
              {option?.slice(0,30)}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Dropdown;
