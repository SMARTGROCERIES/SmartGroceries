import React from "react";
import Search from "../../Search/Search";
import SmartGroceriesLogo from "../../../assets/smartGroceriesLogo.png";

const TopNavBar = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <img
            src={SmartGroceriesLogo}
            alt="SmartGroceriesLogo"
            className="min-h-[51px] min-w-[51px] max-h-[51px] max-w-[51px]"
          />
        </div>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
