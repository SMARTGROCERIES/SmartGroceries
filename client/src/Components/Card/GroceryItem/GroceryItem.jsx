import React from "react";
import smartGroceriesLogo from "../../../assets/smartGroceriesLogo.png";
import addToCartIcon from "../../../assets/myAssets/addToCart.svg";

const BuyItem = () => {
  return (
    <>
      <div className="p-3 border-[1px] border-[solid] border-[#e2e2e2] rounded-[18px] w-[173px] [box-shadow:0_6px_12px_0_rgba(0,_0,_0,_0)]">
        <div
          style={{
            backgroundImage: `url(${smartGroceriesLogo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[139px] h-[241px]"
        ></div>
        <div className="font-bold text-[26px] leading-[112%] tracking-[0.01em] text-[#181725]">
          Organic Bananas
        </div>
        <div className="font-bold text-[21px] leading-[129%] text-[#7c7c7c]">
          7 Pics, Priceg
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[18px] leading-[100%] tracking-[0.01em] text-[#181725]">
            ₹ 32
          </span>
          <div
            style={{
              backgroundImage: `url(${addToCartIcon})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[51px] h-[51px]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default BuyItem;
