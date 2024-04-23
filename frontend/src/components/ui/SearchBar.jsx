const SearchBar = ({
  className,
  placeholder = "Search something ...",
  handleSearch,
  value,
  setValue,
  size = "lg",
}) => {
  const sizeVariant = {
    md : "px-6 py-3",
    lg : "px-8 py-4"
  }
  return (
    <div
      className={`text-primary bg-black-10 flex  border border-white-10   rounded-lg items-center w-[320px] gap-4 ${className} ${sizeVariant[size]}`}
    >
      <i
        onClick={() => {
          handleSearch(value);
          setValue("");
        }}
        className="bi bi-search cursor-pointer"
      ></i>
      <input
        type="text"
        className="flex-1 outline-0 border-0 bg-[rgba(0,0,0,0)] text-black-80 placeholder:text-black-80"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setValue("");
          } else if (e.key === "Enter") {
            handleSearch(value);
          }
        }}
        // style={{
        //   background : "rgba(0,0,0,0)"
        // }}
      />
      {value && (
        <i
          onClick={() => setValue("")}
          className="bi bi-x-lg cursor-pointer"
        ></i>
      )}
    </div>
  );
};

export default SearchBar;
