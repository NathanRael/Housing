import { BtnIcon } from "./Buttons";

const Toast = ({ className, success, message, handleClick }) => {
  return (
    <div
      className={`${
        success ? "text-primary" : "text-danger"
      } flex items-center gap-6 bg-primary-40 py-3 px-6 rounded-lg justify-between w-fit ${className} `}
    >
      <i
        className={`${
          success ? "bi bi-check-lg" : "bi bi-exclamation-lg"
        } text-icon`}
      ></i>
      <div className="flex flex-col ">
        <p className="text-lead">{success ? "Success" : "Error"}</p>
        <p className={`text-base text-white-60 font-FuturaThin`}>
          {message || "Some message"}
        </p>
      </div>
      <BtnIcon
        handleClick={handleClick}
        className="text-white"
        size="md"
        icon="bi bi-x-lg"
        color="tranparent"
      />
    </div>
  );
};

export default Toast;
