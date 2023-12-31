import { Link } from "react-router-dom";
import Video from "../../assets/images/video_home/video_home_arnaldo.mp4";
import sabores from "../../assets/images/imagenes_home/cards_home/card_home_sabores.webp";
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp";
import sucursalesCard from "../../assets/images/imagenes_home/cards_home/Rectangle38.png";
import historia from "../../assets/images/imagenes_home/cards_home/card_home_historia.webp";
import historia2 from "../../assets/images/imagenes_home/cards_home/CardHomeDesktop.png";
import ArrowIcon from "../../assets/images/iconos/iconos_cards_home/chevron_right.png";
import Reseñas from "../../components/Reseñas/Reseñas";
import {
  motion,
} from "framer-motion";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { useState } from "react";

const Home = () => {
  const [activeNav, setActiveNav] = useState(window.location.pathname);

  const pages = [
    {
      name: "SABORES",
      path: "/sabores",
      img: sabores,
      img2: sabores,
    },
    {
      name: "SUCURSALES",
      path: "/sucursales",
      img: sucursales,
      img2: sucursalesCard,
    },
    {
      name: "HISTORIA",
      path: "/historia",
      img: historia,
      img2: historia2,
    },
  ];
  return (
    <main id="main" className={`font-heebo pt-[56px]`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ARNALDO | Home</title>
      </Helmet>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />

      <article className="w-full lg:h-[500px] xl:h-[700px] 3xl:h-[800px] 4xl:h-[900px] overflow-hidden flex justify-center items-center">
        <video autoPlay muted className="object-cover">
          <source src={Video} type="video/mp4"></source>
        </video>
      </article>
      <motion.article
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.45 }}
        className="p-4 lg:px-8 lg:py-8 2xl:p-16"
      >
        <h2 className="text-[1.3rem] uppercase semism:text-[1.5rem] font-extrabold lg:text-[2.5rem] 2xl:text-[3.65rem]">
          LA TRADICIÓN EN HELADOS
        </h2>
        <p className="text-[1rem] lg:text-[1.5rem] 2xl:text-[2rem] 2xl:leading-[47px] text-textColor font-normal">
          Sabor, calidad y variedad. Desde 1965, más de medio siglo de historia
          elaborando nuestros productos y ofreciendo el mejor helado a los
          vecinos de Zona Norte.
        </p>
      </motion.article>
      <section className="flex flex-col gap-4 mb-4 2xl:gap-8 2xl:mb-8">
        {pages?.map((page, index) => (
          <Link
            to={page.path}
            key={index}
            className="home_card relative h-[180px] w-full overflow-hidden sm:h-[230px] md:h-[260px] lg:h-[350px] 2xl:h-[500px]"
          >
            <img
              src={page.img}
              alt={page.name}
              className="object-cover w-full absolute bottom-0 lg:hidden"
            />
            {page.img2 && (
              <img
                src={page.img2}
                alt={page.name}
                className="hidden lg:block object-cover w-full absolute bottom-0"
              />
            )}
            <div className="flex absolute left-0 bottom-0 items-center w-full p-4 justify-between lg:px-8 2xl:pl-16">
              <motion.h3
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className="text-[2.5rem] font-black lg:text-[4.5rem] 2xl:text-[6.3rem]"
              >
                {page.name}
              </motion.h3>
              <img
                className="arrow_icon h-10 lg:h-[60px] 2xl:h-[80px] 2xl:pr-10"
                src={ArrowIcon}
                alt="arrow icon"
              />
            </div>
          </Link>
        ))}
      </section>
      <Reseñas />
      <Footer />
    </main>
  );
};

export default Home;
