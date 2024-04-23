const StatCard = ({ number, name }) => {
  return (
        <div className=" bg-white text-black border-black-10 border rounded-md p-6 flex flex-col gap-6 text-subtitle-2 w-[260px]">
      <h3 className=" text-primary text-title-1 font-RobotoBold">{number}</h3>
      <p> {name}</p>
    </div>
  );
};

export default StatCard;
