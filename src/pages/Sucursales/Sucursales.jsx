import lista from "./List";
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp";
import Modals from "./Modals";
import Carousels from "./Carousels";

const Sucursales = () => {
  return (
    <section className="pt-[3.5rem] border-b-2 border-white pb-3 font-heebo">
      <article className="relative h-[132px] overflow-hidden w-full 2xl:h-[370px]">
        <img
          className="absolute bottom-[-16px] 2xl:bottom-[-200px] w-full"
          src={sucursales}
          alt="sabores header"
        />
        <h3 className="uppercase absolute left-4 bottom-0 text-[2.5rem] font-black 2xl:text-[6.25rem] 2xl:pl-16">
          sucursales
        </h3>
      </article>

      <article className="flex flex-col gap-10 pl-5 py-3 2xl:px-20">
        {lista?.map(
          (
            { nombre, calle, localidad, horario1, horario2, images, gps },
            index
          ) => (
            <div key={index}>
              <h3 className="text-[1.5rem] font-extrabold uppercase">
                {nombre}
              </h3>
              <div className="flex flex-col gap-0 lg:flex-row">
                <div className="w-full lg:w-[62%]">
                  <Carousels images={images} />
                </div>
                <div className="pr-5 flex flex-col gap-2 2xl:gap-6 2xl:pl-6 2xl:w-[418px]">
                  <div>
                    <h4 className="text-[0.9rem] font-semibold 2xl:text-[2rem]">
                      {calle}
                    </h4>
                    <p className="text-[0.65rem] font-light 2xl:text-[1.5rem]">
                      {localidad}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-[0.65rem] font-semibold 2xl:text-[1.65rem]">
                      Horarios
                    </h6>
                    <p className="text-[0.65rem] font-light 2xl:text-[1.5rem]">
                      {horario1}
                    </p>
                    <p className="text-[0.65rem] font-light 2xl:text-[1.5rem]">
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
