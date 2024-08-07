import React, { useState, useEffect } from "react";
import axios from "axios";
import CarouselWithContent from "../../Components/Carousel/Carousel";
import TopNavBar from "../../Components/Nav/TopNavBar/TopNavBar";
import BottomNavBar from "../../Components/Nav/BottomNavBar/BottomNavBar";
import GroceryItem from "../../Components/Card/GroceryItem/GroceryItem";
import Home from "../../Components/Home/Home";

const HomePage = () => {
  const [groceryItem, setGroceryItem] = useState([]);

  useEffect(
    () => {
      axios
        .get("https://smartgroceries.nakprc.com/fruitsNveg.json")
        .then((response) => {
          setGroceryItem(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [],
    <GroceryItem />
  );

  return (
    <>
      <div>
        <br />
        <div className="bg-[azure] w-[100vw] z-[99999]">
          <TopNavBar />
        </div>
        <div>
          <Home>
            <div className="h-[91px]"></div>
            <div>
              <CarouselWithContent />
            </div>
            <br />
            <div className="pl-6 font-bold text-[21px]">
              Popular Grocery Products
            </div>
            <div className="flex w-[100vw] gap-6 flex-nowrap justify-center overflow-x-scroll ">
              {groceryItem.map((item, indexId) => {
                return (
                  <GroceryItem
                    key={indexId}
                    groceryName={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    stock={item.stock}
                  />
                );
              })}
            </div>
            <br />
            <div className="pl-6 font-bold text-[21px]">Fruits</div>
            <div className="flex w-[100vw] gap-6 flex-nowrap justify-center overflow-x-scroll ">
              {groceryItem.map((item, indexId) => {
                return (
                  <GroceryItem
                    key={indexId}
                    groceryName={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    stock={item.stock}
                  />
                );
              })}
            </div>
            <br />
            <div className="pl-6 font-bold text-[21px]">Vegetables</div>
            <div className="flex w-[100vw] gap-6 flex-nowrap justify-center overflow-x-scroll ">
              {groceryItem.map((item, indexId) => {
                return (
                  <GroceryItem
                    key={indexId}
                    groceryName={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    stock={item.stock}
                  />
                );
              })}
            </div>
            <br />
            <div className="pl-6 font-bold text-[21px]">Dairy Products</div>
            <div className="flex w-[100vw] gap-6 flex-nowrap justify-center overflow-x-scroll ">
              {groceryItem.map((item, indexId) => {
                return (
                  <GroceryItem
                    key={indexId}
                    groceryName={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    stock={item.stock}
                  />
                );
              })}
            </div>
          </Home>
        </div>
        <div>
          <BottomNavBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
