import historia from "../../assets/images/imagenes_home/cards_home/card_home_historia.webp";
import empresa from "../../assets/images/imagenes_historia/empresa.webp";
import marca from "../../assets/images/imagenes_historia/marca.webp";
import marca2 from "../../assets/images/imagenes_historia/marca2.webp";
import arnaldo from "../../assets/images/imagenes_historia/arnaldo.webp";
import headerHistoria from "../../assets/images/imagenes_historia/headerHistoria.png"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { useState } from "react";

const Historia = () => {
  const handleDragStart = (e) => e.preventDefault();
  const [activeNav, setActiveNav] = useState(window.location.pathname);

  const items = [
    <img
      className="w-full"
      src={marca}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="w-full"
      src={marca2}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  return (
    <section className="font-heebo pt-[3.5rem] lg:pt-[100px] border-b-2 border-white 2xl:pb-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ARNALDO | Historia</title>
      </Helmet>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />

      <article className="relative h-[132px] sm:h-[200px] md:h-[240px] lg:h-[300px] xl:h-[340px] overflow-hidden 2xl:h-[370px] 3xl:h-[430px] 4xl:h-[460px]">
        <img
          className="object-cover absolute bottom-0 sm:bottom-[-30px] md:bottom-[-40px] lg:bottom-[-70px] xl:bottom-[-80px] 2xl:bottom-[-110px]"
          src={historia}
          alt="historia header"
        />
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
          historia
        </motion.h3>
      </article>
      <section className="flex flex-col gap-6 py-5 md:gap-10 lg:py-10 lg:gap-14 2xl:px-6">
        <motion.article
          variants={{
            hidden: { opacity: 0, y: -70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="w-11/12 m-auto flex flex-col lg:gap-4"
        >
          <h3 className="font-extrabold uppercase text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] xl:text-[3rem] 2xl:text-[3.65rem]">
            sobre la empresa
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] font-normal 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <p>
              Desde 1965, cuando Agustín Arnaldo dio vida a su primer helado,
              Arnaldo se ha esforzado por erigir una empresa sólida basada en
              valores y principios sólidos. Hoy, Arnaldo es líder en el mundo de
              los helados gracias a sus cinco pilares fundamentales: calidad,
              innovación, capacitación, inversión y mejora continua. Cada día,
              esta empresa firme y progresista se mantiene fiel a la filosofía y
              el legado de una familia que llevó el sueño de un pionero español
              a tierras argentinas. Nos enorgullece darles la bienvenida a
              nuestro sitio, donde podrán conocer nuestra historia, misión y
              compromiso.
            </p>
            <div>
              <h3 className="uppercase font-bold">MISIÓN</h3>
              <p>Ser reconocidos por ofrecer productos de alta calidad.</p>
            </div>
            <div>
              <h3 className="uppercase font-bold">VISIÓN</h3>
              <p>
                Nuestra visión en Arnaldo es ser la compañía líder en calidad de
                helados.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold">NUESTRO COMPROMISO</h3>
              <p>
                En Arnaldo, nuestro compromiso principal es satisfacer las
                necesidades de nuestros clientes con productos de calidad
                excepcional a precios justos. Trabajamos en todas las fases de
                la cadena de producción, desde la adquisición de materias primas
                hasta el cliente final, cumpliendo con rigurosos estándares de
                calidad nacionales e internacionales. También reinvertimos y nos
                modernizamos continuamente, contribuimos con la comunidad y el
                medio ambiente, y nos enfocamos en garantizar una calidad
                excepcional en cada etapa de producción.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold">TECNOLOGÍA Y CAPACITACIÓN</h3>
              <p>
                Nuestra planta de producción y almacenamiento es un referente en
                el mercado heladero, equipada con maquinaria de última
                generación diseñada específicamente para elaborar helados
                artesanales. El Ingeniero Hugo Hortazo lidera la capacitación,
                motivación y dirección del equipo de Arnaldo. Establecemos
                programas regulares de capacitación en higiene alimentaria para
                todo nuestro personal, tanto de producción como de atención al
                cliente. Seleccionamos, utilizamos y analizamos las mejores
                materias primas y productos terminados, implementando estrictos
                procesos de sanitización y elaboración.
              </p>
            </div>
          </div>
          <img className="w-full mt-3 md:mt-6" src={empresa} alt="" />
        </motion.article>
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="w-11/12 m-auto"
        >
          <h3 className="text-[1.5rem] font-extrabold uppercase sm:text-[1.8rem] md:text-[2rem] xl:text-[3rem] 2xl:text-[3.65rem]">
            NUESTRA MARCA
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] font-normal 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <p>
              Arnaldo representa una empresa familiar. Fundada por Agustín
              Arnaldo y sus tres hijos, cuenta con un equipo numeroso, liderado
              y formado por el Ingeniero en Alimentos Hugo Hortazo.
            </p>
            <p>
              El señor Agustín Arnaldo inauguró su primera heladería en 1965
              junto a su madre, esposa y tío, ubicada en Av. Vélez Sarsfield
              4690 en Munro.
            </p>
            <p>
              La heladería se llamaba Sorrento hasta 1992, cuando una empresa de
              Avellaneda presentó una objeción por el nombre registrado. Para
              evitar problemas, optamos por cambiar y registrar "Arnaldo" como
              nuestra marca.
            </p>
            <p>
              En 1977, Arnaldo abrió en Av. Vélez Sarsfield 4621, donde hoy en
              día se encuentra nuestro salón de ventas, fábrica y depósito. En
              los 90, decidimos expandirnos con nuestra primera sucursal en Av.
              Maipú 2327 en Olivos, muy cerca de la Quinta Presidencial de
              Olivos. El impulso por crecer y atraer nuevos clientes nos llevó,
              años después, a inaugurar la tercera tienda en Alvear 101 en
              Martínez.
            </p>
          </div>
          <div className="mt-4 w-full h-full historiaCarousel">
            <AliceCarousel mouseTracking items={items} />
          </div>
        </motion.article>
        <motion.article
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="w-11/12 m-auto"
        >
          <h3 className="text-[1.5rem] font-extrabold uppercase sm:text-[1.8rem] md:text-[2rem] xl:text-[3rem] 2xl:text-[3.65rem]">
            AGUSTÍN ARNALDO
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] font-normal sm:text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <p>
              Agustín Arnaldo, fundador de las heladerías que llevan su nombre,
              llegó a Argentina en los años 40 como uno más de los inmigrantes.
              Nació en 1939 en Cuevas, una aldea de Belmonte de Miranda,
              provincia de Oviedo, España. Durante su infancia en Asturias, se
              familiarizó con las labores rurales; a pesar de su corta edad,
              cuidaba ovejas y recogía leña para el fuego.
            </p>
            <p>
              Después de finalizar la Guerra Civil Española, con tan solo 9
              años, Agustín y su madre tomaron sus maletas y se unieron a su tío
              Don Antonio Arnaldo en busca de oportunidades en estas tierras
              benditas.
            </p>
            <p>
              En 1948, ya establecido en Buenos Aires, estudió en la Escuela
              Superior de Comercio nro.1 Joaquín V. González del barrio porteño
              de Barracas. También se capacitó en dactilografía, contabilidad
              superior, comercialización y publicidad en la Asociación de
              Dirigentes de Ventas.
            </p>
            <p>
              Con apenas 11 años, empezó a trabajar como cadete en la farmacia
              Boeri en la calle San Juan y Bolívar. Luego en la farmacia Gentile
              de Garay y Defensa, y también en la tintorería Casa Villanueva en
              Viamonte 921. A los 17, manejaba la contabilidad en la empresa
              Orlando Poli y cía y trabajaba como mozo en el Anchor Inn Bar
              junto con su madre. Con esos dos empleos y gracias a los ahorros y
              propinas de los marineros ingleses, logró independizarse para dar
              inicio a lo que sería su empresa y su vida.
            </p>
            <p>
              A los 17 años conoció a doña María del Carmen Álvarez en el Club
              Centro Galicia de Olivos. Se casaron después de cinco años de
              noviazgo y ella fue su esposa hasta su partida en el año 2001.
              Tuvieron tres hijos: María del Carmen, Luis Agustín y Omar.
            </p>
            <p>
              Agustín Arnaldo, desde muy joven, se inició como comerciante. En
              1957 abrió su primer comercio de despacho de pan en Av. Del
              Libertador 274 de Vicente López. Mientras su madre atendía el
              local, él seguía trabajando para el estudio contable y,
              simultáneamente, se formaba en fabricación de helados en la
              empresa Siam. Tres años después, incluyó la elaboración y venta de
              helados en su negocio de panadería.
            </p>
            <p>
              En septiembre de 1965, abrió su primera heladería en la Galería
              Caribe de Av. Vélez Sarsfield 4690, Munro, bajo el nombre de
              Heladería Sorrento. Para progresar en el rubro, estudió
              refrigeración en la Academia Taller Fulton y trabajó junto a su
              familia y primeros empleados mientras la demanda crecía.
            </p>
            <p>
              En 1977, invirtió todos sus ahorros, su primera casa y su primer
              auto para adquirir el local de Av. Vélez Sarsfield 4621 de Munro,
              que aún está en funcionamiento.
            </p>
            <p>
              Hasta 1992, la heladería se llamó Sorrento, pero debido a
              problemas de marca registrada, decidió usar su apellido para
              nombrar sus helados.
            </p>
            <p>
              En 1994 abrió su primera sucursal en Olivos y a principios del
              2000, su segundo local en Martínez, modernizando completamente la
              planta de elaboración y depósito para satisfacer la demanda de los
              tres locales.
            </p>
            <p>
              Hoy en día, Agustín Arnaldo colabora en las tareas necesarias,
              pero son sus hijos quienes se encargan de todo en la empresa.
            </p>
            <p>
              El fundador de esta empresa se siente agradecido por haber sido
              recibido por este hermoso país con los brazos abiertos, país que
              le brindó la oportunidad de crecer y formar una familia.
            </p>
          </div>
          <img
            className="w-full mt-3 md:mt-6 md:mb-4"
            src={arnaldo}
            alt="arnaldo"
          />
        </motion.article>
      </section>
      <Footer />
    </section>
  );
};

export default Historia;
