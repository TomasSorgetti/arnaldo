import saboresImg from "../../assets/images/imagenes_home/cards_home/card_home_sabores.webp";
import Genders from "./Genders";
import Helados from "./Helados";

const Sabores = () => {
  return (
    <main className="font-heebo">
      <section className="relative">
        <img src={saboresImg} alt="sabores header" />
        <h3 className="absolute left-4 bottom-0 text-[2.5rem] font-black">
          SABORES
        </h3>
      </section>
      <Genders />
      <Helados/>
    </main>
  );
};

export default Sabores;
