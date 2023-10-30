import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/imagotipo_bar_top_sin_fondo.png";
import iconDown from "../../assets/images/iconos/iconos_menu/down-chevron.png";


const Navigation = ({ activeNav,setActiveNav}) => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClickNavigate = (prop) => {
    setActiveNav(prop)
    setNav(false);
    setDropdown(false);
    if (window.location.pathname === prop) {
      reloadPage();
    }
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const reloadPage = () => {
    document.documentElement.scrollTo(0, 0);
    setNav(false);
  };
  return (
    <nav
      className={`fixed flex items-center justify-between z-10 bg-black w-full lg:h-[100px] ${
        nav ? "fixed" : ""
      }`}
    >
      <Link onClick={() => handleClickNavigate("/")} to="/" className="">
        <img
          className="h-14 pl-3 lg:pl-5 lg:h-[5rem] 2xl:pl-16"
          src={Logo}
          alt="logo"
        />
      </Link>
      <div className="block lg:hidden pr-4">
        <button
          onClick={handleClick}
          className={`p-2 relative flex flex-col justify-center gap-[4px]`}
        >
          <div
            className={`w-5 h-[2px] bg-white ${
              nav ? "rotate-45 absolute toggle" : ""
            }`}
          ></div>
          <div className={`w-5 h-[2px] bg-white ${nav ? "hidden" : ""}`}></div>
          <div
            className={`w-5 h-[2px] bg-white ${
              nav ? "rotate-[-45deg] toggle" : ""
            }`}
          ></div>
        </button>
      </div>
      <div
        className={`fixed z-10 top-[56px] w-screen font-poppins text-subTitleColor font-medium text-[16px]
        lg:relative lg:translate-x-0 lg:top-0
        ${!nav ? " menuClose" : " menuOpen"}`}
      >
        <ul
          className={`w-full h-screen text-[1.25rem] font-normal bg-black text-white flex items-start px-4 flex-col justify-start gap-2 lg:flex-row lg:justify-center lg:h-[85px] lg:items-center lg:text-center lg:gap-0 lg:px-8
          ${nav ? "border-t-2 border-white" : ""}`}
        >
          <li className="w-full border-b py-3 lg:border-none">
            <Link
              className={`nav ${activeNav === "/" ? "before:w-full" : ""}`}
              onClick={() => handleClickNavigate("/")}
              to="/"
            >
              INICIO
            </Link>
          </li>
          <li className="w-full border-b py-3 lg:border-none lg:relative">
            <button
              className={`nav w-full pr-1 flex justify-between items-center lg:justify-center lg:w-auto ${
                activeNav === "/sabores" || activeNav === "/elaboracion"
                  ? "before:w-full"
                  : ""
              }`}
              type="button"
              onClick={handleDropdown}
            >
              <p className="lg:w-[200px] lg:mr-[-8px]">NUESTRO HELADO</p>
              <img
                className={`h-4 ${dropdown ? "rotate-180" : ""}`}
                src={iconDown}
                alt="icon down"
              />
            </button>
            <ul
              className={`flex flex-col gap-1 pl-3 py-3 text-[1rem] font-normal lg:absolute lg:text-center lg:bg-black lg:p-0 2xl:bottom-[-190px] 2xl:left-[-30px] 2xl:w-[275px] 2xl:h-[175px] lg:justify-between ${
                !dropdown ? " hidden" : ""
              }`}
            >
              <Link
                className="uppercase lg:h-full lg:flex justify-center items-center"
                onClick={() => handleClickNavigate("/sabores")}
                to="/sabores"
              >
                Sabores
              </Link>
              <div className="hidden lg:block h-1 w-full bg-white"></div>
              <Link
                className="uppercase lg:h-full lg:flex justify-center items-center"
                onClick={() => handleClickNavigate("/elaboracion")}
                to="/elaboracion"
              >
                Elaboración
              </Link>
            </ul>
          </li>
          <li className="w-full border-b py-3 lg:border-none">
            <Link
              className={`nav ${
                activeNav === "/sucursales" ? "before:w-full" : ""
              }`}
              onClick={() => handleClickNavigate("/sucursales")}
              to="/sucursales"
            >
              SUCURSALES
            </Link>
          </li>
          <li className="w-full border-b py-3 lg:border-none">
            <Link
              className={`nav ${
                activeNav === "/historia" ? "before:w-full" : ""
              }`}
              onClick={() => handleClickNavigate("/historia")}
              to="/historia"
            >
              HISTORIA
            </Link>
          </li>
          <li className="w-full border-b py-3 lg:border-none">
            <Link
              className={`nav ${
                activeNav === "/contacto" ? "before:w-full" : ""
              }`}
              onClick={() => handleClickNavigate("/contacto")}
              to="/contacto"
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
