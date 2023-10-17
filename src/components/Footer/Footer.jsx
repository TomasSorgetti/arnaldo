import HeladoLogo from "../../assets/images/logo/imagotipo_sin_fondo.png";

const Footer = () => {
  return (
    <section className="text-center flex flex-col gap-4 p-4">
        <a href="/" className="flex justify-center">
          <img className="h-24" src={HeladoLogo} alt="logo 1" />
        </a>
      <article className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-14 lg:py-5">
          <a href="/" className="font-semibold lg:w-[150px]">
            INICIO
          </a>
        <div className="font-semibold lg:w-[150px]">
          NUESTRO HELADO
          <div className="flex flex-col font-light text-[1rem]">
            <a href="/sabores">Sabores</a>
            <a href="/elaboracion">Elaboración</a>
          </div>
        </div>
        <a href="/sucursales" className="font-semibold lg:w-[150px]">
          SUCURSALES
        </a>
        <a href="/historia" className="font-semibold lg:w-[150px]">
          HISTORIA
        </a>
        <a href="/contacto" className="font-semibold lg:w-[150px]">
          CONTACTO
        </a>
      </article>
      <div className="text-[10px] font-light text-textColor">
        <p>© Arnaldo 2023. Todos los derechos reservados.</p>
        <p>Desarrollado por Tomi/Flor</p>
      </div>
    </section>
  );
};

export default Footer;
