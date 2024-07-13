import React from "react";
import SideBar from "../../../Components/Backend/SideBar/SideBar";
import LogoSmartGroceries from "../../../Utils/Logo/Logo";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[azure] flex items-center gap-31 ">
        <div>
          <SideBar />
        </div>
        <div className="flex gap-31">
          <div>
            <LogoSmartGroceries width={"51px"} height={"51px"} />
          </div>
          <div className="text-[4vh] ">Admin Pannel</div>
        </div>
      </div>
      <div className="flex">
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
