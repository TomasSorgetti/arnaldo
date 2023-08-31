import HeladoLogo from "../../assets/logo/HeladoLogo.png"
import Logo from "../../assets/logo/Logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="text-center flex flex-col gap-4 p-4">
      <Link to="/" className="flex flex-col items-center gap-2">
        <img className='' src={HeladoLogo} alt="logo 1" />
        <img src={Logo} alt="logo 2" />
      </Link>
      <article className="flex flex-col gap-4">
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
      <div className='text-[10px] font-light text-textColor'>
        <p>© Arnaldo 2023. Todos los derechos reservados.</p>
        <p>Desarrollado por Tomi/Flor</p>
      </div>
    </section>
  );
}

export default Footer