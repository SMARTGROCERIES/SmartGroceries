import React from "react";
import Search from "../../Components/Search/Search";
import CarouselWithContent from "../../Components/Carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <Search />
        </div>
        <div>
          <CarouselWithContent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
