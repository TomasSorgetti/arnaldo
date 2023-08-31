import { useState } from "react";
import { Link } from "react-router-dom";
import HeladoLogo from "../../assets/logo/HeladoLogo.png"
import Logo from "../../assets/logo/Logo.png"
const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav
      id="navbar"
      className="flex items-center justify-between flex-wrap px-2 lg:flex-row"
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={HeladoLogo} alt="logo 1" />
        <img src={Logo} alt="logo 2" />
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-auto font-poppins text-subTitleColor font-medium text-[16px] flex flex-col gap-2 items-center lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto lg:pr-10${
          !nav ? " hidden" : ""
        }`}
      >
        <ul className="absolute left-0 top-10 flex  items-start px-6 flex-col justify-center gap-2 lg:flex lg:flex-row lg:gap-4 ">
          <li>
            <button type="button" onClick={handleDropdown}>
              NUESTRO HELADO
            </button>
            <ul className={`${!dropdown ? " hidden" : ""}`}>
              <Link to="/sabores">Sabores</Link>
              <Link to="/elaboracion">Elaboración</Link>
            </ul>
          </li>
          <li>
            <Link to="/sucursales">SUCURSALES</Link>
          </li>
          <li>
            <Link to="/historia">HISTORIA</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
