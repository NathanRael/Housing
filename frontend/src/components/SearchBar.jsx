const SearchBar = ({
  className,
  placeholder = "Search something ...",
  handleSearch,
  value,
  setValue,
}) => {
  return (
    <div
      className={`text-white flex px-8 py-4 border border-white-10   rounded-lg items-center w-[320px] gap-4 ${className}`}
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
        className="flex-1 outline-0 border-0 bg-black"
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
