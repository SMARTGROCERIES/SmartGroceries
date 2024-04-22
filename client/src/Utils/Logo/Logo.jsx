import React from "react";
import logo from "../../assets/smartGroceriesLogo.png";

const Logo = ({height,width}) => {
  return (
    <>
      <img src={logo} alt="Smart Groceries Logo" style={{height: height, width: width}} />
    </>
  );
};

export default Logo;
