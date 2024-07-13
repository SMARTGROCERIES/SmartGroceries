import React from "react";
import Search from "../../Search/Search";
import SmartGroceriesLogo from "../../../assets/smartGroceriesLogo.png";
import userDesktopIcon from "../../../assets/myassets/userDesktop.svg";
import cartDesktopIcon from "../../../assets/myassets/cartDesktop.svg";

const TopNavBar = () => {
  return (
    <>
      <br />
      <div className="flex items-center justify-center z-[99999] w-[100vw]">
        <div className="fixed flex ">
          <div>
            <img
              src={SmartGroceriesLogo}
              alt="SmartGroceriesLogo"
              className="min-h-[51px] min-w-[51px] max-h-[51px] max-w-[51px] bg-white rounded-full"
            />
          </div>
          <div>
            <Search />
          </div>
          <div>
            <img
              src={userDesktopIcon}
              alt="userDesktopIcon"
              className="hidden md:block min-h-[51px] min-w-[51px] max-h-[51px] max-w-[51px] bg-white rounded-full"
            />
          </div>
          <div>
            <img
              src={cartDesktopIcon}
              alt="cartDesktopIcon"
              className="hidden md:block min-h-[51px] min-w-[51px] max-h-[51px] max-w-[51px] bg-white rounded-full"
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default TopNavBar;
