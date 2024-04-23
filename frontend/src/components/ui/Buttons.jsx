const colorVariant = {
  transparent: "text-black",
  primary: "bg-primary hover:bg-primary-40 text-white",
  danger: "bg-danger hover:bg-danger-60 text-white",
  success: "bg-success hover:bg-success text-white",
  disabled: "bg-white-40 text-white-60",
};

const defaultTransition = "transition duration-200";

export const Button = ({
  className = "",
  value = "Button",
  size = "md",
  color = "primary",
  transition = defaultTransition,
  icon,
  iconInverse = false,
  handleClick,
}) => {
  const sizeVariant = {
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };
  return (
    <>
      {!icon ? (
        <button
          onClick={handleClick}
          className={` text-base font-FuturaMd  rounded-lg px-8 py-4 cursor-pointer ${colorVariant[color]} ${transition} ${sizeVariant[size]} ${className}`}
        >
          {value}
        </button>
      ) : (
        <button
          onClick={handleClick}
          className={`${size === "md" ? "gap-3" : "gap-4"} ${
            iconInverse ? "flex-row-reverse" : "flex-row"
          } w-full flex items-center justify-center text-base font-FuturaMd  rounded-lg ${
            color === "disabled" ? "cursor-not-allowed" : " cursor-pointer"
          } ${colorVariant[color]} ${transition} ${sizeVariant[size]} ${className}`}
        >
          <i className={`${icon} ${size === "md" ? "" : "text-icon"}`}></i>
          <p>{value}</p>
        </button>
      )}
    </>
  );
};

export const ButtonIcon = ({
  icon = "bi bi-trash",
  size = "lg",
  color = "primary",
  transition = defaultTransition,
  className = "",
  handleClick,
}) => {
  const sizeVariant = {
    md: "size-10 p-2",
    lg: "size-12 p-2",
  };
  return (
    <div
      className={` flex items-center justify-center rounded-full  ${
        color === "disabled" ? "cursor-not-allowed" : "cursor-pointer"
      } ${colorVariant[color]} ${sizeVariant[size]} ${transition} ${className}`}
      onClick={handleClick}
    >
      <i className={`${icon} ${size === "md" ? "" : "text-icon"}`}></i>
    </div>
  );
};
