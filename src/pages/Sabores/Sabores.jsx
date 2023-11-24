import saboresImg from "../../assets/images/imagenes_home/cards_home/card_home_sabores.webp";
import Genders from "./Genders";
import Helados from "./Helados";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


const Sabores = () => {
  return (
    <section className="font-heebo pt-[3.5rem] lg:pt-[100px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ARNALDO | Sabores</title>
      </Helmet>
      <article className="relative h-[132px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[340px] overflow-hidden 2xl:h-[370px] 3xl:h-[430px] 4xl:h-[460px]">
        <img src={saboresImg} alt="sabores header" />
        <motion.h3
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="uppercase absolute left-4 bottom-0 text-[2.5rem] sm:pl-2 sm:text-[3rem] md:text-[3.5rem] font-black lg:text-[4rem] lg:pl-6 xl:pl-10 2xl:text-[6.25rem] 2xl:pl-16"
        >
          SABORES
        </motion.h3>
      </article>
      <Genders />
      <Helados />
    </section>
  );
};

export default Sabores;
