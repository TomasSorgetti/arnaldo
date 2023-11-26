import pngwing from "../../assets/images/imagenes_home/opiniones_tripadvisor_home/pngwing.com.png";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";


const Reseñas = () => {
  return (
    <div className="bg-white text-black pb-4 pr-0 relative font-heebo lg:pl-8 2xl:pl-16">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="font-black flex justify-between w-full items-center"
      >
        <div className="pl-4">
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
      </motion.div>
        <motion.div
          className="reseñas_carousel w-full my-5 pl-4 sm:pl-7 lg:pl-4"
        >
          <Carousel/>
      </motion.div>
      <div className="w-full pb-6 bg-white flex justify-center lg:pb-8 2xl:pb-10 2xl:pr-16">
        <button className="uppercase w-11/12 rounded bg-black text-white text-center py-2 text-[0.9rem] font-bold lg:w-[400px] 2xl:py-3 hover:bg-hoverButton">
          ver todas
        </button>
      </div>
    </div>
  );
};

export default Reseñas;
