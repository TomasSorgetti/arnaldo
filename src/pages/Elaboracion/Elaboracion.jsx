import procesos from "../../assets/images/imagenes_elaboracion/procesos.webp";
import controles from "../../assets/images/imagenes_elaboracion/controles.webp";
import elaboracion from "../../assets/images/imagenes_elaboracion/elaboracion.png";

const Elaboracion = () => {
  return (
    <section className="font-heebo pt-[3.5rem] border-b-2 border-white 2xl:pb-10">
      <article className="relative h-[132px] overflow-hidden 2xl:h-[370px]">
        <img
          className="object-cover w-full"
          src={elaboracion}
          alt="historia header"
        />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black 2xl:text-[6.25rem] 2xl:pl-16">
          elaboración
        </h3>
      </article>
      <section className="flex flex-col gap-10 py-5 2xl:px-7">
        <article className="w-11/12 m-auto">
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            procesos
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] font-normal 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              facilisis magna etiam tempor orci eu lobortis elementum. Vitae
              tortor condimentum lacinia quis. Arcu risus quis varius quam
              quisque id diam. Interdum consectetur libero id faucibus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et. Sem
              viverra aliquet eget sit amet tellus cras. Elementum nibh tellus
              molestie nunc non blandit. Parturient montes nascetur ridiculus
              mus mauris vitae ultricies leo integer. Eget lorem dolor sed
              viverra ipsum. Arcu dictum varius duis at consectetur lorem donec
              massa sapien. At urna condimentum mattis pellentesque id. Massa
              massa ultricies mi quis hendrerit dolor. Commodo odio aenean sed
              adipiscing diam.
            </p>
          </div>
          <img
            className="w-full mt-3"
            src={procesos}
            alt="procesos del helado"
          />
        </article>
        <article className="w-11/12 m-auto">
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            controles
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] font-normal 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              facilisis magna etiam tempor orci eu lobortis elementum. Vitae
              tortor condimentum lacinia quis. Arcu risus quis varius quam
              quisque id diam. Interdum consectetur libero id faucibus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et. Sem
              viverra aliquet eget sit amet tellus cras. Elementum nibh tellus
              molestie nunc non blandit. Parturient montes nascetur ridiculus
              mus mauris vitae ultricies leo integer. Eget lorem dolor sed
              viverra ipsum. Arcu dictum varius duis at consectetur lorem donec
              massa sapien. At urna condimentum mattis pellentesque id. Massa
              massa ultricies mi quis hendrerit dolor. Commodo odio aenean sed
              adipiscing diam.
            </p>
          </div>
          <img
            className="w-full mt-3"
            src={controles}
            alt="controles del helado"
          />
        </article>
      </section>
    </section>
  );
};

export default Elaboracion;
