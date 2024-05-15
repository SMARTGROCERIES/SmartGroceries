import React from "react";
import CarouselWithContent from "../../Components/Carousel/Carousel";
import TopNavBar from "../../Components/Nav/TopNavBar/TopNavBar";
import BottomNavBar from "../../Components/Nav/BottomNavBar/BottomNavBar";

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <TopNavBar />
        </div>
        <div>
          <CarouselWithContent />
        </div>
        <div>
          <BottomNavBar />
        </div>
      </div>
    </>
  );
};

export default HomePage;
