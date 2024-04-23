const StateBadge = ({ color, value }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className={`size-3  rounded-full ${color} `}></div>
      <span>{value}</span>
    </div>
  );
};

export default StateBadge;
