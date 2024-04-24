const DashboardButton = ({ icon, text, iconColor, className, hadnleClick }) => {
  return (
    <div
      onClick={hadnleClick}
      className={`flex flex-col items-center justify-center gap-6 rounded-md p-6 text-black  cursor-pointer border border-black-10 hover:bg-primary hover:text-white ${className}`}
    >
      <i className={`${icon} text-[32px] ${iconColor}`}></i>
      <p className="text-base ">{text}</p>
    </div>
  );
};

export default DashboardButton;
