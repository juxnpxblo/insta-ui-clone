const SearchBar = () => {
  return (
    <div className="relative hidden sm:block">
      <div className="absolute left-10 top-1/4">
        <svg
          aria-label="Search"
          class="_8-yf5 "
          color="#8e8e8e"
          fill="#8e8e8e "
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
        >
          <path
            d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="16.511"
            x2="22"
            y1="16.511"
            y2="22"
          ></line>
        </svg>
      </div>

      <input
        className="bg-[#efefef] text-[#262626] rounded-lg outline-none max-w-[268px] min-w-0 pr-3.5 pl-11 py-[6px] mx-6"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
