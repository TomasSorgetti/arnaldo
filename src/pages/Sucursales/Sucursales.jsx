import lista from "./List";
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp";
import Modals from "./Modals";
import Carousels from "./Carousels";

const Sucursales = () => {
  return (
    <section className="pt-[3.5rem] border-b-2 border-white pb-3 font-heebo">
      <article className="relative h-[132px] overflow-hidden w-full">
        <img className="object-cover" src={sucursales} alt="sabores header" />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black">
          sucursales
        </h3>
      </article>

      <article className="flex flex-col gap-10 pl-5 py-3">
        {lista?.map(
          (
            { nombre, calle, localidad, horario1, horario2, images, gps },
            index
          ) => (
            <div key={index}>
              <h3 className="text-[1.5rem] font-extrabold uppercase">
                {nombre}
              </h3>
              <div>
                <div>
                  <Carousels images={ images } />
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
            </div>
          )
        )}
      </article>
    </section>
  );
};

export default Sucursales;
