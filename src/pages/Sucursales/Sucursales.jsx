import lista from "./List";
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp";
import Modals from "./Modals";
import Carousels from "./Carousels";
import { motion } from "framer-motion";



const Sucursales = () => {
  return (
    <section className="pt-[3.5rem] lg:pt-[100px] border-b-2 border-white pb-3 font-heebo lg:pb-12">
      <article className="relative h-[132px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[340px] overflow-hidden 2xl:h-[370px] 3xl:h-[430px] 4xl:h-[460px]">
        <img
          className="absolute bottom-[-16px] lg:bottom-[-100px] 2xl:bottom-[-200px] w-full"
          src={sucursales}
          alt="sabores header"
        />
        <motion.h3
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="uppercase absolute left-4 bottom-0 text-[2.5rem] sm:pl-2 sm:text-[3rem] md:text-[3.5rem] font-black lg:text-[4rem] lg:pl-6 xl:pl-10 2xl:text-[6.25rem] 2xl:pl-16">
          sucursales
        </motion.h3>
      </article>

      <article className="flex flex-col gap-10 pl-5 mt-4 py-3 lg:px-10 lg:pt-12 xl:px-16 2xl:px-20 2xl:pt-16 2xl:gap-16">
        {lista?.map(
          (
            { nombre, calle, localidad, horario1, horario2, images, gps },
            index
          ) => (
            <div key={index}>
              <h3 className="font-extrabold uppercase text-[1.5rem] sm:text-[1.8rem] md:text-[2.1rem] lg:mt-2 lg:mb-4 lg:text-[2.6rem] 2xl:text-[3.75rem] ">
                {nombre}
              </h3>
              <div className="flex flex-col gap-0 lg:flex-row">
                <div className="w-full lg:w-[65%] my-2">
                  <Carousels images={images} />
                </div>
                <div className="pr-5 flex flex-col gap-2 lg:w-full lg:pl-4 lg:gap-4 xl:pl-6 2xl:gap-6 2xl:pl-8 2xl:w-[518px]">
                  <div>
                    <h4 className="text-[0.9rem] font-semibold sm:text-[1.5rem] 2xl:text-[2rem]">
                      {calle}
                    </h4>
                    <p className="text-[0.65rem] font-light sm:text-[1.1rem] 2xl:text-[1.5rem]">
                      {localidad}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-[0.65rem] font-semibold sm:text-[1.2rem] 2xl:text-[1.65rem]">
                      Horarios
                    </h6>
                    <p className="text-[0.65rem] font-light sm:text-[1.1rem] 2xl:text-[1.5rem]">
                      {horario1}
                    </p>
                    <p className="text-[0.65rem] font-light sm:text-[1.1rem] 2xl:text-[1.5rem]">
                      {horario2}
                    </p>
                  </div>
                  <Modals
                    nombre={nombre}
                    calle={calle}
                    localidad={localidad}
                    gps={gps}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </article>
    </section>
  );
};

export default Sucursales;
