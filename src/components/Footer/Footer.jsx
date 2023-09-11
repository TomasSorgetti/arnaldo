import HeladoLogo from "../../assets/images/logo/imagotipo_sin_fondo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="text-center flex flex-col gap-4 p-4">
      <Link to="/" className="flex justify-center">
        <img className="h-24" src={HeladoLogo} alt="logo 1" />
      </Link>
      <article className="flex flex-col gap-4">
        <Link to="/" className="font-semibold">
          INICIO
        </Link>
        <div className="font-semibold">
          NUESTRO HELADO
          <div className="flex flex-col font-light text-[1rem]">
            <Link to="/sabores">Sabores</Link>
            <Link to="/elaboracion">Elaboración</Link>
          </div>
        </div>
        <Link to="/sucursales" className="font-semibold">
          SUCURSALES
        </Link>
        <Link to="/historia" className="font-semibold">
          HISTORIA
        </Link>
        <Link to="/contacto" className="font-semibold">
          CONTACTO
        </Link>
      </article>
      <div className="text-[10px] font-light text-textColor">
        <p>© Arnaldo 2023. Todos los derechos reservados.</p>
        <p>Desarrollado por Tomi/Flor</p>
      </div>
    </section>
  );
}

export default Footer