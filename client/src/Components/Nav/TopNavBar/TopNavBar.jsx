import React from "react";
import Search from "../../Search/Search";
import SmartGroceriesLogo from "../../../assets/smartGroceriesLogo.png";

const TopNavBar = () => {
  return (
    <>
      <br />
      <div className="flex items-center justify-center z-[2147483647] w-[100vw]">
        <div className="fixed flex ">
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
        </div>{" "}
      </div>
    </>
  );
};

export default TopNavBar;
