import saboresImg from "../../assets/images/imagenes_home/cards_home/card_home_sabores.webp";
import Genders from "./Genders";
import Helados from "./Helados";

const Sabores = () => {
  return (
    <section className="font-heebo pt-[3.5rem] lg:pt-[100px]">
      <article className="relative h-[132px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[340px] overflow-hidden 2xl:h-[370px] 3xl:h-[430px] 4xl:h-[460px]">
        <img src={saboresImg} alt="sabores header" />
        <h3 className="uppercase absolute left-4 bottom-0 text-[2.5rem] sm:pl-2 sm:text-[3rem] md:text-[3.5rem] font-black lg:text-[4rem] lg:pl-6 xl:pl-10 2xl:text-[6.25rem] 2xl:pl-16">
          SABORES
        </h3>
      </article>
      <Genders />
      <Helados />
    </section>
  );
};

export default Sabores;
