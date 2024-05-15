import React, { useState, useEffect } from "react";
import axios from "axios";
import CarouselWithContent from "../../Components/Carousel/Carousel";
import TopNavBar from "../../Components/Nav/TopNavBar/TopNavBar";
import BottomNavBar from "../../Components/Nav/BottomNavBar/BottomNavBar";
import GroceryItem from "../../Components/Card/GroceryItem/GroceryItem";

const HomePage = () => {
  const [groceryItem, setGroceryItem] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5173/src/assets/fruitsNveg.json")
      .then((response) => {
        setGroceryItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        <div>
          <GroceryItem />
        </div>
        <div>
          <BottomNavBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
