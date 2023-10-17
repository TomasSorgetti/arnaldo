import lista from "./List"
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Modals from "./Modals";

const Sucursales = () => {
  const carousel = useRef();
  const carousel2 = useRef();
  const [width, setWidth] = useState(0);
  const [width2, setWidth2] = useState(0);
  
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    setWidth2(carousel2.current?.scrollWidth - carousel2.current?.offsetWidth);
  }, []);

  return (
    <section className="pt-[3.5rem] border-b-2 border-white pb-3 font-heebo">
      <article className="relative h-[132px] overflow-hidden w-full">
        <img className="object-cover" src={sucursales} alt="sabores header" />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black">
          sucursales
        </h3>
      </article>

      <article className="flex flex-col gap-10 pl-5 py-3">
        {lista.list?.map(
          (
            { nombre, calle, localidad, horario1, horario2, images, gps },
            index
          ) => (
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
                      <div className="w-[300px] h-[200px] overflow-hidden">
                        <img
                          className="object-cover"
                          src={image}
                          alt="sucursal"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="flex gap-2 w-full justify-center items-center pb-5">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="h-1 w-1 bg-gray-500 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="pr-5">
                <h4 className="text-[0.9rem] font-semibold">{calle}</h4>
                <p className="text-[0.65rem] font-light">{localidad}</p>
                <h6 className="text-[0.65rem] font-semibold">Horarios</h6>
                <p className="text-[0.65rem] font-light">{horario1}</p>
                <p className="text-[0.65rem] font-light">{horario2}</p>
                <Modals
                  nombre={nombre}
                  calle={calle}
                  localidad={localidad}
                  gps={gps}
                />
              </div>
            </div>
          )
        )}
        {lista.list1?.map(
          (
            { nombre, calle, localidad, horario1, horario2, images, gps },
            index
          ) => (
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
                      <div className="w-[300px] h-[200px] overflow-hidden">
                        <img
                          className="object-cover"
                          src={image}
                          alt="sucursal"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="flex gap-2 w-full justify-center items-center pb-5">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="h-1 w-1 bg-gray-500 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="pr-5">
                <h4 className="text-[0.9rem] font-semibold">{calle}</h4>
                <p className="text-[0.65rem] font-light">{localidad}</p>
                <h6 className="text-[0.65rem] font-semibold">Horarios</h6>
                <p className="text-[0.65rem] font-light">{horario1}</p>
                <p className="text-[0.65rem] font-light">{horario2}</p>
                <Modals
                  nombre={nombre}
                  calle={calle}
                  localidad={localidad}
                  gps={gps}
                />
              </div>
            </div>
          )
        )}
        {lista.list2?.map(
          (
            { nombre, calle, localidad, horario1, horario2, images, gps },
            index
          ) => (
            <div key={index}>
              <h3 className="text-[1.5rem] font-extrabold uppercase">
                {nombre}
              </h3>
              <motion.div
                ref={carousel2}
                className="w-full overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  className="w-full pt-5 flex gap-2 relative "
                  drag="x"
                  dragConstraints={{ right: 0, left: -width2 }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center items-center"
                    >
                      <div className="w-[300px] h-[200px] overflow-hidden">
                        <img
                          className="object-cover"
                          src={image}
                          alt="sucursal"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="flex gap-2 w-full justify-center items-center pb-5">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="h-1 w-1 bg-gray-500 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="pr-5">
                <h4 className="text-[0.9rem] font-semibold">{calle}</h4>
                <p className="text-[0.65rem] font-light">{localidad}</p>
                <h6 className="text-[0.65rem] font-semibold">Horarios</h6>
                <p className="text-[0.65rem] font-light">{horario1}</p>
                <p className="text-[0.65rem] font-light">{horario2}</p>
                <Modals
                  nombre={nombre}
                  calle={calle}
                  localidad={localidad}
                  gps={gps}
                />
              </div>
            </div>
          )
        )}
      </article>
    </section>
  );
}

export default Sucursales