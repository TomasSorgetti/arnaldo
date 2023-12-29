import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousels = ({ images }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const arr = [];
    images?.map((image) => {
      arr.push(
        <div className="overflow-hidden w-full ">
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
      <AliceCarousel mouseTracking items={items} />
  );
};

export default Carousels;
