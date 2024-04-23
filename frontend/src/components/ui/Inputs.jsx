import { useEffect, useRef, useState } from "react";
import { ButtonIcon } from "./Buttons";

const defaultInputWidth = "w-[320px] md:w-[380px]";

export const Input = ({
  type = "",
  title = "",
  placeholder = "",
  errorMsg = "",
  name = "",
  isValid = false,
  handleChange,
  inputRef,
  value,
  size = "lg",
  className,
}) => {
  const sizeVariant = {
    md: "px-6 py-3",
    lg: " px-8 py-4",
  };
  return (
    <div className={`flex  flex-col gap-2 ${defaultInputWidth} ${className}`}>
      <p className="text-black">{title} :</p>
      <input
        ref={inputRef}
        type={type}
        className={`text-base text-black-60 rounded-md border-black-10 bg-black-10 placeholder:text-black-60 outline-none  focus:ring-primary focus:ring-2 ${sizeVariant[size]} `}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
        autoComplete="off"
        required={true}
      />
      {!isValid && value ? (
        <small className="text-small text-danger ">{errorMsg}</small>
      ) : (
        ""
      )}
    </div>
  );
};

export const SelectInput = ({
  options = ["Gaming", "Anime", "Music"],
  className,
  icon = "bi bi-arrow-right",
  inversedIcon,
  animated = true,
  color = "primary",
  handleSelectionChange,
  title,
  size = "md",
}) => {
  const defaultTransition = "transition duration-200";
  const [selectedItem, setSelectedItem] = useState(options[0] || "Selected");
  const [opened, setOpened] = useState(false);
  const colorVariant = {
    primary: "bg-primary hover:bg-primary-60 text-white  ",
    input: "bg-black-10 text-black-60 ",
  };

  const sizeVariant = {
    md: "px-6 py-3",
    lg: "px-8 py-4",
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
    <div className="flex items-start justify-start w-full flex-col gap-3">
      <p className="text-base text-black">{title} :</p>
      <div
        className={`flex items-start justify-start flex-col gap-2   relative ${className} `}
      >
        <div
          onClick={() => {
            setOpened((prev) => !prev);
          }}
          className={`text-base    rounded-lg items-center justify-between cursor-pointer w-full gap-2 flex ${sizeVariant[size]} ${defaultTransition} ${colorVariant[color]}`}
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
          className={`absolute   text-base rounded-lg  py-2 px-2  flex flex-col gap-2 w-full origin-top ${
            selectColorvariant[color]
          } ${size === "md" ? "top-[54px]" : "top-[64px]"} ${
            opened
              ? "z-30 opacity-1 skew-x-0 "
              : "-z-10 opacity-0 skew-x-[12deg]"
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
    </div>
  );
};

export const FileInput = ({
  setSelectedFile,
  selectedFile,
  name,
  handleChange,
  className,
}) => {
  const fileRef = useRef(null);

  const handleChangeFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileReader = new FileReader();
      let filePath = "";
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.addEventListener("load", function () {
        filePath = this.result;
        setSelectedFile({
          name: e.target.files[0].name,
          path: filePath,
        });
        // setImagePath(filePath);
      });
    }
  };

  const handleClick = (ref) => {
    ref.current.click();
  };

  const removeFiles = () => {
    setSelectedFile(null);
    fileRef.current.value = "";
  };

  return (
    <div
      className={`flex items-center justify-between ${defaultInputWidth} ${className}`}
    >
      <BtnIcon
        icon="bi bi-folder"
        size="lg"
        className="rounded-md"
        handleClick={() => handleClick(fileRef)}
      />
      <div className="">
        <input
          ref={fileRef}
          type="file"
          className="text-white dark:text-black  w-[0.1px] -z-10 h-[0.1px] hidden input-file"
          accept=".png,.jpeg, .jpg"
          onChange={(e) => {
            handleChangeFile(e);
            handleChange(e);
          }}
          name={name}
        />
        <label htmlFor="" className=" text-white-40">
          {selectedFile?.name?.substr(-20) || "Ajouter un photo"}
        </label>
      </div>
      <BtnIcon
        size="md"
        color="danger"
        icon="bi bi-trash"
        handleClick={() => removeFiles()}
      />
    </div>
  );
};
