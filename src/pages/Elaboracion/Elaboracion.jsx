import procesos from "../../assets/images/imagenes_elaboracion/procesos.webp";
import controles from "../../assets/images/imagenes_elaboracion/controles.webp";
import elaboracion from "../../assets/images/imagenes_elaboracion/elaboracion.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Elaboracion = () => {
  return (
    <section className="font-heebo pt-[3.5rem] lg:pt-[100px] border-b-2 border-white 2xl:pb-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ARNALDO | Elaboración</title>
      </Helmet>
      <article className="relative h-[132px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[340px] overflow-hidden 2xl:h-[370px] 3xl:h-[430px] 4xl:h-[460px]">
        <div className="h-full w-full overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src={elaboracion}
            alt="historia header"
          />
        </div>
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
          elaboración
        </motion.h3>
      </article>
      <section className="flex flex-col gap-10 py-5 lg:gap-14 lg:py-10 2xl:px-3">
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
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            procesos
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] font-normal 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <div>
              <h4 className="uppercase font-bold">
                PASTEURIZADO CON CONTROL TERMOGRÁFICO
              </h4>
              <p>
                El pasteurizado es el proceso por el cual se logra eliminar los
                gérmenes patógenos que dañan la salud. Como descubrió Louis
                Pasteur, las bacterias son destruidas si elevamos la temperatura
                de una mezcla por encima de los 100 grados centígrados, aunque a
                tan elevadas temperaturas los ingredientes pierden sus
                propiedades de sabor y color. Para evitar tales alteraciones, el
                limite esta en los 85 grados centígrados.
              </p>
            </div>
            <p>
              Pero ocurre que hay bacterias que se hacen resistentes al calor,
              sobreviviendo a los 85 grados, pero sin embargo no resisten al
              frío. Por lo tanto, el proceso de pasteurización consistirá en
              calentar la mezcla hasta los mencionados 85 grados y enfriarla
              posteriormente a 4 grados.
            </p>
            <p>
              El tiempo total del proceso debe ser inferior a dos horas. El
              momento crítico del proceso, cuando las bacterias pueden volver a
              multiplicarse, llega en la fase del descenso, entre los 45 y 15
              grados. El pasteurizador consigue que este paso sea rápido,
              gracias a un potente compresor programado a tal efecto.
            </p>
            <p>
              Estas máquinas permiten realizar el proceso de pasteurización de
              dos formas distintas. Es lo que se conoce como alta y baja
              pasteurización. La alta pasteurización consiste en calentar la
              mezcla hasta los 85 grados y enfriarla hasta los 4 grados. La baja
              pasteurización sería calentar la mezcla hasta los 65 grados y
              mantener esta temperatura durante 30 minutos antes de iniciar el
              enfriamiento hasta los 4 grados centígrados.
            </p>
            <p>
              El resultado, desde el punto de vista sanitario es idéntico, si
              bien los neutros, emulsionantes, estabilizantes y yemas de huevos,
              alcanzan su máximo rendimiento cuando se someten a temperaturas
              superiores a los 80 grados centígrados. Además, una temperatura
              alta, entre los 80 y 85 grados, unida a la agitación en la cuba
              del pasteurizador, facilita la mezcla de los ingredientes, la
              emulsión de las materias grasas con el agua, así como una perfecta
              homogenización. En este proceso, el termógrafo cumple una función
              primordial.
            </p>
            <div>
              <h4 className="uppercase font-bold">TERMÓGRAFO</h4>
              <p>
                El termógrafo es un instrumento que registra la temperatura y el
                horario de los procesos de pasteurización. La línea roja que
                dibuja la pluma del termógrafo deja registrada sobre la hoja del
                mismo las temperaturas a que ha sido sometida la preparación, y
                durante cuánto tiempo. Esto se convierte en un seguro contra
                fallas humanas o mecánicas.
              </p>
            </div>
          </div>
          <img
            className="w-full mt-3"
            src={procesos}
            alt="procesos del helado"
          />
        </motion.article>
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="w-11/12 m-auto flex flex-col lg:gap-4"
        >
          <h3 className="text-[1.5rem] font-extrabold uppercase 2xl:text-[3.65rem]">
            controles
          </h3>
          <div className="flex flex-col gap-4 text-[1rem] font-normal 2xl:text-[2rem] 2xl:gap-8 2xl:mb-10">
            <div>
              <h4 className="uppercase font-bold">CONTROLES PROPIOS</h4>
              <p>
                Por Nuestro Director Técnico Ingeniero En Alimentos Hugo C. F.
                Hortazo:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Controles periódicos de materias primas y productos terminados
                </li>
                <li>Análisis microbiológicos</li>
                <li>
                  Control de fechas de elaboración y vencimiento de las materias
                  primas
                </li>
                <li>Cadena de frio </li>
                <li>Planilla de pasterizado</li>
                <li>Control termográfico</li>
                <li>Control normas F.I.F.O (First In First Out)</li>
                <li>Control R.P.E. (Registro de Establecimientos)</li>
                <li>Control R.P.P.A. (Registro de Productos)</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase font-bold">
                M.V.L. (Municipalidad de Vicente López)
              </h4>
              <ul className="list-disc pl-6">
                <li>
                  Controles periódicos por parte de la Dirección de Bromatología
                  y Calidad de vida GMP (Good manufacture practice: Manual de
                  buenas prácticas)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase font-bold">NORMAS</h4>
              <ul className="list-disc pl-6">
                <li>
                  Normas del personal: tienen que ver con la salud, la
                  vestimenta y la higiene.
                </li>
                <li>
                  Normas operativas: regulan la manipulación de las materias
                  primas y la elaboración de los productos.
                </li>
                <li>
                  Normas edilicias: diseño e higiene del local y de las
                  instalaciones.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase font-bold">CAPACITACIÓN DE PERSONAL</h4>
              <p>Por medio de nuestro director técnico.</p>
              <p>Hugo C. F. Hortazo - Ingeniero en Alimentos</p>
              <ul className="list-disc pl-6">
                <li>Higiene personal.</li>
                <li>Uso de ropa de trabajo adecuada.</li>
                <li>Normas de trabajo.</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase font-bold">HACCP</h4>
              <p>
                El Análisis de Riesgo y Puntos Críticos de Control es un sistema
                dinámico y preventivo que aplicado a los procesos garantiza
                alimentos seguros.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Se identifican los peligros y se evalúan los riesgos y su
                  gravedad
                </li>
              </ul>
              <p>
                Se establecen los Puntos Críticos de Control (PCC) para prevenir
                y eliminar los peligros
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Se establecen las especificaciones o criterios que garanticen
                  que el producto es aceptable
                </li>
                <li>Se monitorean los PCC. (Puntos Críticos de Control)</li>
                <li>
                  Se establecen las medidas correctivas cuando el PCC sufrió una
                  desviación
                </li>
                <li>Se registran los PCC y los procesos</li>
                <li>Se verifica el resultado final</li>
              </ul>
            </div>
          </div>
          <img
            className="w-full mt-3"
            src={controles}
            alt="controles del helado"
          />
        </motion.article>
      </section>
    </section>
  );
};

export default Elaboracion;
