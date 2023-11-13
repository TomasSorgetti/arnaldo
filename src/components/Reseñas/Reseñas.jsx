import pngwing from "../../assets/images/imagenes_home/opiniones_tripadvisor_home/pngwing.com.png";
import greenBalls from "../../assets/images/iconos/icono_opinion_tripadvisor/icono_opinion_tripadvisor.png";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import cards from "./cards";
const Reseñas = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="bg-white text-black pb-4 pr-0 relative font-heebo lg:pl-8 2xl:pl-16">
      <div className="font-black flex justify-between w-full items-center">
        <div>
          <h3 className="text-[2rem] font-heebo lg:text-[3rem] 2xl:text-[4.8rem]">
            Nuestros clientes
          </h3>
          <p className="text-[1rem] mt-[-10px] font-normal lg:text-[1.5rem] 2xl:text-[2rem]">
            Opiniones de Tripadvisor
          </p>
        </div>
        <img
          className="h-20 lg:h-[110px] 2xl:h-[216px]"
          src={pngwing}
          alt="tripadvisor logo"
        />
      </div>
      <motion.div
        ref={carousel}
        className="w-full overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="w-full h-[300px] flex gap-2 relative lg:mb-5 2xl:h-[400px] 2xl:gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-screen flex justify-center items-center"
            >
              <div className="w-[330px] h-[260px] border-[1px] shadow-xl rounded-[25px] 2xl:w-[419px] 2xl:h-[334px]">
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
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="w-full pb-6 bg-white flex justify-center lg:pb-8 2xl:pb-10 2xl:pr-16">
        <button className="uppercase w-11/12 rounded bg-black text-white text-center py-2 text-[0.9rem] font-bold lg:w-[400px] 2xl:py-3">
          ver todas
        </button>
      </div>
    </div>
  );
};

export default Reseñas;
