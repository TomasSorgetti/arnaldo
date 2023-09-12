import list from "./List"
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Sucursales = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <section className="border-b-2 border-white pb-3 font-heebo">
      <article className="relative h-[132px] overflow-hidden">
        <img className="object-cover" src={sucursales} alt="sabores header" />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black">
          sucursales
        </h3>
      </article>

      <article className="flex flex-col gap-1 pl-5 py-3">
        {list?.map(
          ({ nombre, calle, localidad, horario1, horario2, images }, index) => (
            <div key={index}>
              <h3 className="text-[1.5rem] font-extrabold uppercase">
                {nombre}
              </h3>
              <motion.div
                ref={carousel}
                className="w-full overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  className="w-full pt-5 flex gap-2 relative "
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center items-center"
                    >
                      <div className="w-[328px] h-[200px]">
                        <img src={image} alt="sucursal" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="pr-5">
                <h4 className="text-[0.9rem] font-semibold">{calle}</h4>
                <p className="text-[0.65rem] font-light">{localidad}</p>
                <h6 className="text-[0.65rem] font-semibold">Horarios</h6>
                <p className="text-[0.65rem] font-light">{horario1}</p>
                <p className="text-[0.65rem] font-light">{horario2}</p>
                <button className="uppercase w-full rounded-full py-2 bg-buttonColor2 text-[0.9rem] font-bold mt-5">
                  ver mapa
                </button>
              </div>
            </div>
          )
        )}
      </article>
    </section>
  );
}

export default Sucursales