import React, { useState, useEffect } from "react";
import axios from "axios";
import CarouselWithContent from "../../Components/Carousel/Carousel";
import TopNavBar from "../../Components/Nav/TopNavBar/TopNavBar";
import BottomNavBar from "../../Components/Nav/BottomNavBar/BottomNavBar";
import GroceryItem from "../../Components/Card/GroceryItem/GroceryItem";

const HomePage = () => {
  const [groceryItem, setGroceryItem] = useState([]);

  useEffect(
    () => {
      axios
        .get("http://localhost:5173/src/assets/fruitsNveg.json")
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
        <div>
          <TopNavBar />
        </div>
        <br />
        <div>
          <CarouselWithContent />
        </div>
        <div className="flex w-[100vw] gap-6 flex-wrap justify-center">
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
        <div>
          <BottomNavBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
