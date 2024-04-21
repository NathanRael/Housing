const AppLayout = () => {
  return (
    <div className="flex w-full items-start justify-start">
      <div className="bg-black basis-[280px] w-full h-screen text-white">
        Sidebar
      </div>
      <div className="bg-primary h-screen w-full">Outlet</div>
    </div>
  );
};

export default AppLayout;
