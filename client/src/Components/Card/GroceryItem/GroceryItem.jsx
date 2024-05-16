import React from "react";
import smartGroceriesLogo from "../../../assets/smartGroceriesLogo.png";
import addToCartIcon from "../../../assets/myassets/addToCart.svg";

const BuyItem = ({ groceryName, price, image, quantity, stock }) => {
  return (
    <>
      <div className="p-3 border-[1px] border-[solid] border-[#e2e2e2] rounded-[18px] w-[173px] [box-shadow:0_6px_12px_0_rgba(0,_0,_0,_0)]">
        {stock ? (
          <span className="text-[rgb(1,_6,_1)] bg-[rgb(27,_212,_18)] text-[medium] float-left relative left-[99px] h-[21px] w-[61px] flex justify-center items-center font-medium rounded-tl-none rounded-br-none rounded-tr-[18px] rounded-bl-none">
            In Stock
          </span>
        ) : (
          <span className="text-[rgb(1,_6,_1)] bg-[rgb(212,_18,_18)] text-[medium] float-left relative left-[69px] h-[21px] w-[91px] flex justify-center items-center font-medium rounded-tl-none rounded-br-none rounded-tr-[18px] rounded-bl-none">
            Stock Over
          </span>
        )}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[139px] h-[241px]"
        ></div>
        <div className="font-bold text-[26px] leading-[112%] tracking-[0.01em] text-[#181725]">
          {groceryName}
        </div>
        <div className="font-bold text-[21px] leading-[129%] text-[#7c7c7c]">
          {quantity}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[18px] leading-[100%] tracking-[0.01em] text-[#181725]">
            ₹ {price}
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
