import React from "react";
import StyleGroceryItem from "./GroceryItem.module.css";
import addToCartIcon from "../../../assets/myassets/addToCart.svg";
import smartGroceriesLogo from "../../../assets/smartGroceriesLogo.png";

const GroceryItem = ({ groceryName, price, image, quantity, stock }) => {
  return (
    <>
      <div
        className={StyleGroceryItem.card}
        style={{ border: "2px solid coral", background: "#ffff" }}
      >
        {stock ? (
          <span className={StyleGroceryItem.inStock}>In Stock</span>
        ) : (
          <span className={StyleGroceryItem.outStock}>Stock Over</span>
        )}
        <span
          style={{
            width: "111px",
            height: "111px",
            backgroundImage: `url('${image ? image : smartGroceriesLogo}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></span>
        <br />
        <span className={StyleGroceryItem.text}>{groceryName}</span>
        <span className={StyleGroceryItem.text2}>Qty:{quantity}</span>
        <span className={StyleGroceryItem.textPrice}>
          ₹ {price}
          <img
            src={addToCartIcon}
            alt="addToCartIcon"
            style={{ width: "51px", height: "51px" }}
          />
        </span>
      </div>
    </>
  );
};

export default GroceryItem;
