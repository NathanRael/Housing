const Badge = ({ className, value = "badge", size = "lg" }) => {
  const sizeVariant = {
    md: "px-2 py-1 text-small-2",
    lg: "px-2 py-2 text-small-1",
  };

  return (
    <div
      className={`rounded-md border border-black-10 bg-black-10 ${sizeVariant[size]} ${className}`}
    >
      {value}
    </div>
  );
};

export default Badge;
