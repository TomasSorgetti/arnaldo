import { Link } from "react-router-dom";
import HeladoLogo from "../../assets/images/logo/imagotipo_sin_fondo.png";

const Footer = () => {
  const reloadPage = (prop) => {
    if (window.location.pathname === prop) {
      document.documentElement.scrollTo(0, 0);
    }
  }
  return (
    <section className="text-center flex flex-col gap-10 p-4">
      <Link onClick={() => reloadPage("/")} to="/" className="flex justify-center">
        <img className="h-24" src={HeladoLogo} alt="logo 1" />
      </Link>
      <article className="flex flex-col gap-6 lg:w-full lg:flex-row lg:justify-between lg:py-5 2xl:text-[1.5rem]">
        <Link
          onClick={() => reloadPage("/")}
          to="/"
          className="font-semibold lg:w-[250px]"
        >
          INICIO
        </Link>
        <div className="font-semibold lg:w-[150px] 2xl:w-[250px]">
          NUESTRO HELADO
          <div className="uppercase flex flex-col font-light text-[1rem] 2xl:text-[1.25rem]">
            <Link onClick={() => reloadPage("/sabores")} to="/sabores">
              Sabores
            </Link>
            <Link onClick={() => reloadPage("/elaboracion")} to="/elaboracion">
              Elaboración
            </Link>
          </div>
        </div>
        <Link
          onClick={() => reloadPage("/sucursales")}
          to="/sucursales"
          className="font-semibold lg:w-[250px]"
        >
          SUCURSALES
        </Link>
        <Link
          onClick={() => reloadPage("/historia")}
          to="/historia"
          className="font-semibold lg:w-[250px]"
        >
          HISTORIA
        </Link>
        <Link
          onClick={() => reloadPage("/contacto")}
          to="/contacto"
          className="font-semibold lg:w-[250px]"
        >
          CONTACTO
        </Link>
      </article>
      <div className="text-[10px] font-light text-textColor">
        <p>© Arnaldo 2023. Todos los derechos reservados.</p>
        <p>Desarrollado por Tomi/Flor</p>
      </div>
    </section>
  );
};

export default Footer;
