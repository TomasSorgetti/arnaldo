import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousels = ({ images }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const arr = [];
    images?.map((image) => {
      arr.push(
        <div className="overflow-hidden w-[360px] sm:w-[640px] md:w-[768px] lg:w-[610px] xl:w-[800px] 2xl:w-[850px] 3xl:w-[1000px] 4xl:w-[1200px]">
          <img
            className="w-full object-cover"
            src={image}
            onDragStart={handleDragStart}
            role="presentation"
          />
        </div>
      );
    });
    setItems(arr);
  }, []);
  const handleDragStart = (e) => e.preventDefault();
  return (
      <AliceCarousel mouseTracking disableButtonsControls items={items} />
  );
};

export default Carousels;
