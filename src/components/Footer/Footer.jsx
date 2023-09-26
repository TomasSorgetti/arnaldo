import HeladoLogo from "../../assets/images/logo/imagotipo_sin_fondo.png";

const Footer = () => {
  return (
    <section className="text-center flex flex-col gap-4 p-4">
        <a href="/" className="flex justify-center">
          <img className="h-24" src={HeladoLogo} alt="logo 1" />
        </a>
      <article className="flex flex-col gap-4">
          <a href="/" className="font-semibold">
            INICIO
          </a>
        <div className="font-semibold">
          NUESTRO HELADO
          <div className="flex flex-col font-light text-[1rem]">
            <a href="/sabores">Sabores</a>
            <a href="/elaboracion">Elaboración</a>
          </div>
        </div>
        <a href="/sucursales" className="font-semibold">
          SUCURSALES
        </a>
        <a href="/historia" className="font-semibold">
          HISTORIA
        </a>
        <a href="/contacto" className="font-semibold">
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
