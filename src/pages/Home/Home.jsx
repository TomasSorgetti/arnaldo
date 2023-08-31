import { Link } from "react-router-dom";
import Video from "../../assets/video.png";
import sabores from "../../assets/home/cards/sabores.png";
import sucursales from "../../assets/home/cards/sucursales.png";
import historia from "../../assets/home/cards/historia.png";
import ArrowIcon from "../../assets/ArrowIcon.svg";
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
    <main className="font-heebo">
      <article className="h-[240px] w-full overflow-hidden">
        <img className="object-cover" src={Video} alt="video de portada" />
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
      <section className="flex flex-col gap-4">
        {pages?.map((page, index) => (
          <Link to={page.path} key={index} className="relative h-[180px] overflow-hidden">
            <img src={page.img} alt={page.name} className="object-cover"/>
            <div className="flex absolute left-0 bottom-0 items-center w-full p-4 justify-between">
              <h3 className="text-[2.5rem]">{page.name}</h3>
              <img src={ArrowIcon} alt="arrow icon" />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;
