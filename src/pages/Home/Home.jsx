import { Link } from "react-router-dom";
import Video from "../../assets/images/video_home/video_home_arnaldo.mp4";

import sabores from "../../assets/images/imagenes_home/cards_home/card_home_sabores.webp";
import sucursales from "../../assets/images/imagenes_home/cards_home/card_home_sucursales.webp";
import historia from "../../assets/images/imagenes_home/cards_home/card_home_historia.webp";
import ArrowIcon from "../../assets/images/iconos/iconos_cards_home/chevron_right.png";
import Reseñas from "../../components/Reseñas/Reseñas";

const Home = () => {
  const pages = [
    {
      name: "SABORES",
      path: "/sabores",
      img: sabores,
    },
    {
      name: "SUCURSALES",
      path: "/sucursales",
      img: sucursales,
    },
    {
      name: "HISTORIA",
      path: "/historia",
      img: historia,
    },
  ];
  return (
    <main id="main" className={`font-heebo pt-[56px]`}>
      <article className="w-full">
        <video autoPlay muted>
          <source src={Video} type="video/mp4"></source>
        </video>
      </article>
      <article className="p-4 ">
        <h2 className="text-[1.3rem] semism:text-[1.5rem] font-extrabold">
          DESCUBRÍ NUESTRO HELADO
        </h2>
        <p className="text-[1rem] text-textColor font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </article>
      <section className="flex flex-col gap-4 mb-4">
        {pages?.map((page, index) => (
          <Link
            to={page.path}
            key={index}
            className="relative h-[180px] w-full overflow-hidden lg:h-[350px] 2xl:h-[500px]"
          >
            <img
              src={page.img}
              alt={page.name}
              className="object-cover w-full"
            />
            <div className="flex absolute left-0 bottom-0 items-center w-full p-4 justify-between">
              <h3 className="text-[2.5rem] font-black">{page.name}</h3>
              <img className="h-10" src={ArrowIcon} alt="arrow icon" />
            </div>
          </Link>
        ))}
      </section>
      <Reseñas />
      <div className="w-full pb-6 bg-white flex justify-center">
        <button className="uppercase w-11/12 rounded bg-black text-white text-center py-2 text-[0.9rem] font-bold lg:w-[400px]">
          ver todas
        </button>
      </div>
    </main>
  );
};

export default Home;
