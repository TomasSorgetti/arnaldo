import AliceCarousel from "react-alice-carousel";
import cards from "./cards";
import { useState, useEffect } from "react";
import greenBalls from "../../assets/images/iconos/icono_opinion_tripadvisor/icono_opinion_tripadvisor.png";

const Carousel = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      const arr = [];
      cards?.map((card,index) => {
        arr.push(
            <div
              key={index}
              onDragStart={handleDragStart}
              role="presentation"
              className="mb-5 w-[330px] h-[260px] border-[1px] shadow-xl rounded-[25px] 2xl:w-[419px] 2xl:h-[334px]"
            >
              <div className="flex items-center gap-2 p-6 ">
                <img
                  className="w-auto h-4"
                  src={greenBalls}
                  alt="icon tripadvisor"
                />
                <span className="text-xs">{card.date}</span>
              </div>
              <div className="px-6 h-[140px] flex flex-col gap-2 2xl:gap-6">
                <h5 className="text-xl font-normal lg:text-[1.2rem] 2xl:text-[1.5rem]">
                  {card.name}
                </h5>
                <p className="text-base font-normal lg:text-[1.1rem] 2xl:text-[1.3rem]">
                  {card.text}
                </p>
              </div>
            </div>
        );
      });
      setItems(arr);
    }, []);
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
      0: {
        items: 1,
      },
      640: {
        items: 1.7,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 2.9,
      },
      1280: {
        items: 3.5,
      },
      1440: {
        items: 3.1,
      },
      1680: {
        items: 3.6,
      },
      1920: {
        items: 4.2,
      },
    };
  return <AliceCarousel disableDotsControls items={items} responsive={responsive} />;
}

export default Carousel