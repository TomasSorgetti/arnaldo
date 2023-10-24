import pngwing from "../../assets/images/imagenes_home/opiniones_tripadvisor_home/pngwing.com.png";
import greenBalls from "../../assets/images/iconos/icono_opinion_tripadvisor/icono_opinion_tripadvisor.png";
import {useState,useEffect,useRef} from "react"
import { motion } from "framer-motion";
import cards from "./cards"
const Reseñas = () => {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return (
    <div className="bg-white text-black pb-0 p-4 pr-0 relative font-heebo 2xl:pl-16 2xl:pt-8">
      <div className="font-black flex justify-between w-full items-center">
        <h3 className="text-[2rem] font-heebo 2xl:text-[4.5rem]">
          Nuestros clientes
        </h3>
        <img className="h-20 2xl:h-[216px]" src={pngwing} alt="tripadvisor logo" />
      </div>
      <p className="text-[1rem] mt-[-10px] font-normal 2xl:text-[2rem]">
        Opiniones de Tripadvisor
      </p>
      <motion.div
        ref={carousel}
        className="w-full overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="w-full h-[300px] flex gap-2 relative 2xl:h-[400px] 2xl:gap-4"
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
                  <h5 className="text-xl font-normal 2xl:text-[1.5rem]">
                    {card.name}
                  </h5>
                  <p className="text-base font-normal 2xl:text-[1.3rem]">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Reseñas;
