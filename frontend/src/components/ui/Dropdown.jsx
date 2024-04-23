import { useEffect, useState } from "react";

const Dropdown = ({
  options = ["Gaming", "Anime", "Music"],
  className,
  icon = "bi bi-arrow-right",
  inversedIcon,
  animated = true,
  color = "primary",
  handleSelectionChange,
}) => {
  const defaultTransition = "transition duration-200";
  const [selectedItem, setSelectedItem] = useState(options[0] || "Selected");
  const [opened, setOpened] = useState(false);
  const colorVariant = {
    primary: "bg-primary hover:bg-primary-60 text-white  ",
    input: "bg-black-10 text-black-60 ",
  };

  const selectColorvariant = {
    primary: "bg-primary text-white  ",
    input: "bg-white ",
  };

  handleSelectionChange &&
    useEffect(() => {
      handleSelectionChange(selectedItem);
    }, [selectedItem]);

  return (
    <div
      className={`flex items-start justify-start flex-col gap-2   relative ${className} `}
    >
      <div
        onClick={() => {
          setOpened((prev) => !prev);
        }}
        className={`text-base   px-6 py-3 rounded-lg items-center justify-between cursor-pointer w-full gap-2 flex ${defaultTransition} ${colorVariant[color]}`}
      >
        {inversedIcon && (
          <i
            className={`${defaultTransition} ${icon} ${
              opened && animated ? "rotate-90" : "rotate-0"
            }`}
          ></i>
        )}
        <p>{selectedItem || "Selection"}</p>
        {!inversedIcon && (
          <i
            className={`${defaultTransition} ${icon} ${
              opened ? "rotate-90" : "rotate-0"
            }`}
          ></i>
        )}
      </div>
      <ul
        className={`absolute top-[54px]  text-base rounded-lg  py-2  flex flex-col gap-2 px-2 w-full origin-top ${
          selectColorvariant[color]
        } ${
          opened ? "z-30 opacity-1 skew-x-0 " : "-z-10 opacity-0 skew-x-[12deg]"
        }  ${defaultTransition}`}
      >
        {options?.map((option) => (
          <li
            onClick={() => {
              setSelectedItem(option);
              setOpened(false);
            }}
            key={option}
            className={`w-full cursor-pointer hover:bg-primary-40 hover:ps-6 px-4 py-2 rounded-md ${defaultTransition} transition-all`}
          >
            {option?.slice(0, 30)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
