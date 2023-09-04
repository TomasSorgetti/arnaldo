import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/imagotipo_bar_top_sin_fondo.png";
import iconDown from "../../assets/images/iconos/iconos_menu/down-chevron.png";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleClickNavigate = () => {
    setNav(!nav);
    setDropdown(false);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav
      id="navbar"
      className="flex items-center justify-between flex-wrap pr-4 lg:flex-row"
    >
      <Link
        onClick={handleClickNavigate}
        to="/"
        className=""
      >
        <img className="h-14" src={Logo} alt="logo" />
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={handleClick}
          className={`relative flex flex-col justify-center gap-[4px]`}
        >
          <div
            className={`w-5 h-[2px] bg-white ${
              nav ? "rotate-45 absolute" : ""
            }`}
          ></div>
          <div className={`w-5 h-[2px] bg-white ${nav ? "hidden" : ""}`}></div>
          <div
            className={`w-5 h-[2px] bg-white ${
              nav ? "rotate-[-45deg]" : ""
            }`}
          ></div>
        </button>
      </div>
      <div
        className={`w-full h-screen font-poppins text-subTitleColor font-medium text-[16px] flex flex-col gap-2 items-center lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto lg:pr-10${
          !nav ? " hidden" : ""
        }`}
      >
        <ul
          className={`absolute w-full text-[1.25rem] font-normal bg-black text-white left-0 top-14 flex  items-start px-4 flex-col justify-center gap-2 lg:flex lg:flex-row lg:gap-4 ${
            nav ? "border-t-2 border-white" : ""
          }`}
        >
          <li className="w-full border-b py-3">
            <button
              className="w-full pr-1 flex justify-between items-center"
              type="button"
              onClick={handleDropdown}
            >
              <p>NUESTRO HELADO</p>
              <img
                className={`h-4 ${dropdown ? "rotate-180" : ""}`}
                src={iconDown}
                alt="icon down"
              />
            </button>
            <ul
              className={`flex flex-col gap-1 pl-2 py-3 text-[1rem] font-normal ${
                !dropdown ? " hidden" : ""
              }`}
            >
              <Link onClick={handleClickNavigate} to="/sabores">
                Sabores
              </Link>
              <Link onClick={handleClickNavigate} to="/elaboracion">
                Elaboración
              </Link>
            </ul>
          </li>
          <li className="w-full border-b py-3">
            <Link onClick={handleClickNavigate} to="/sucursales">
              SUCURSALES
            </Link>
          </li>
          <li className="w-full border-b py-3">
            <Link onClick={handleClickNavigate} to="/historia">
              HISTORIA
            </Link>
          </li>
          <li className="w-full border-b py-3">
            <Link onClick={handleClickNavigate} to="/contacto">
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
