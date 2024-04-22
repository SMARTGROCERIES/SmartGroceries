import React from "react";

const ButtonLongWidth = ({ text, bgColor, textColor, images, width }) => {
  return (
    <>
      <div
        className={`rounded-[19px] w-[80vw] h-[56px] ${bgColor} max-w-[353px] flex justify-center items-center ${textColor} font-bold
                    md:${width}`}>
        {text}
      </div>
    </>
  );
};

export default ButtonLongWidth;
