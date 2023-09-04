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
    <div className="bg-white text-black p-4 pr-0 relative">
      <h3 className="font-black text-[2rem] flex justify-between w-full items-center">
        <p>Nuestros Clientes</p>
        <img className="h-20" src={pngwing} alt="" />
      </h3>
      <p className="text-[1rem] mt-[-10px] font-normal mb-6">
        Opiniones de Tripadvisor
      </p>
      <motion.div
        ref={carousel}
        className="w-full overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="w-full h-[300px] flex gap-2 relative "
          drag="x"
          dragConstraints={{right:0,left:-width}}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-screen flex justify-center items-center"
            >
              <div className="w-[310px] h-[260px] border-[1px] shadow-xl rounded-[25px]">
                <div className="flex items-center gap-2 p-6">
                  <img
                    className="w-auto h-4"
                    src={greenBalls}
                    alt="icon tripadvisor"
                  />
                  <span className="text-xs">{card.date}</span>
                </div>
                <div className="px-6 h-[140px]">
                  <h5 className="text-xl font-normal">{card.name}</h5>
                  <p className="text-base font-normal">{card.text}</p>
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
