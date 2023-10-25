import historia from "../../assets/images/imagenes_home/cards_home/card_home_historia.webp";
import empresa from "../../assets/images/imagenes_historia/empresa.webp";
import marca from "../../assets/images/imagenes_historia/marca.webp";
import marca2 from "../../assets/images/imagenes_historia/marca2.webp";
import arnaldo from "../../assets/images/imagenes_historia/arnaldo.webp";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Historia = () => {
  // const carousel = useRef();
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  // }, []);
  // const images = [marca, marca2];
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img className="w-full" src={marca} onDragStart={handleDragStart} role="presentation" />,
    <img className="w-full" src={marca2} onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <section className="font-heebo pt-[3.5rem]  border-b-2 border-white 2xl:pb-10">
      <article className="relative h-[132px] overflow-hidden 2xl:h-[370px]">
        <img
          className="object-cover absolute bottom-0 2xl:bottom-[-60px]"
          src={historia}
          alt="historia header"
        />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black 2xl:text-[6.25rem] 2xl:pl-16">
          historia
        </h3>
      </article>
      <section className="flex flex-col gap-6 py-5 2xl:gap-10">
        <article className="w-11/12 m-auto">
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            sobre la empresa
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
          <img className="w-full mt-3" src={empresa} alt="" />
        </article>
        <article className="w-11/12 m-auto">
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            NUESTRA MARCA
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
          <div className="mt-4 w-full h-full">
            <AliceCarousel mouseTracking disableButtonsControls items={items} />
          </div>
        </article>
        <article className="w-11/12 m-auto">
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            AGUSTÍN ARNALDO
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
          <img className="w-full mt-3" src={arnaldo} alt="arnaldo" />
        </article>
      </section>
    </section>
  );
};

export default Historia;
