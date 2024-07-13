import React from "react";
import notFound from "../../assets/404.gif";

const NotFound404 = () => {
  return (
    <>
      <div className="bg-[#f0f0f0] w-[100vw] h-[100vh] flex justify-center items-center flex-col">
        <img src={notFound} />
        <button className="bg-[#003c54] text-[white] p-3">Go To Home</button>
      </div>
    </>
  );
};

export default NotFound404;
