import React from "react";
import searchIcon from "../../assets/myassets/searchIcon.svg";

const Search = () => {
  return (
    <>
      <div className="flex justify-center">
        <input
          placeholder="Search Store..."
          style={{
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "31px",
          }}
          className="rounded-[15px] w-[80vw] h-[51px] bg-[#f2f3f2] bg-no-repeat bg-contain p-7 bg-left pl-11
           text-[24px] text-[#7c7c7c]
          "
        />
      </div>
    </>
  );
};

export default Search;
