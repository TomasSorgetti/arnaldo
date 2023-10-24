import saboresImg from "../../assets/images/imagenes_home/cards_home/card_home_sabores.webp";
import Genders from "./Genders";
import Helados from "./Helados";

const Sabores = () => {
  return (
    <main className="font-heebo">
      <section className="relative 2xl:h-[370px] overflow-hidden 2xl:pt-[80px]">
        <img src={saboresImg} alt="sabores header" />
        <h3 className="absolute left-4 bottom-0 text-[2.5rem] font-black 2xl:text-[6.25rem] 2xl:pl-16">
          SABORES
        </h3>
      </section>
      <Genders />
      <Helados/>
    </main>
  );
};

export default Sabores;
