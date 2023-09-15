import React from "react";

const SearchBar: React.FC<{ placeHolder: string }> = ({ placeHolder }) => {
  return (
    <div className="rounded-3xl bg-[#222338] text-[#7D7D7D] w-full p-3 flex gap-2">
      <img src="/icons/search.svg" alt="search" />
      <input
        className="bg-transparent outline-none w-full"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchBar;
