import React from "react";
import searchIcon from "../../assets/myAssets/searchIcon.svg";

const Search = () => {
  return (
    <>
      <div>
        <input
          placeholder="Search Store..."
          style={{
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "31px",
          }}
          className="rounded-[15px] w-[364px] h-[51px] bg-[#f2f3f2] bg-no-repeat bg-contain p-7 bg-left pl-11"
        />
      </div>
    </>
  );
};

export default Search;
