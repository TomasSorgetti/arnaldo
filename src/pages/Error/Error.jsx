import { useState } from "react";
import errorImage from "../../assets/images/404/404_not_found.webp";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

const Error = () => {
  const [activeNav, setActiveNav] = useState(window.location.pathname);

  return (
    <div className="font-heebo h-[100svh] flex flex-col justify-between">
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="flex flex-col gap-8 items-center text-center lg:pb-6">
        <img
          className="mt-24 mb-10 w-10/12 sm:w-9/12 lg:w-5/12 lg:mt-32 xl:w-4/12"
          src={errorImage}
          alt="error image presentation"
        />
        <p className="text-[1rem] md:text-[1.2rem] w-10/12">
          Parece que la página que estás buscando no se encuentra disponible
        </p>
        <Link
          className="text-[1rem] md:text-[1.2rem] uppercase pt-2 pb-1 px-8 border-2 border-white rounded-md font-bold hover:bg-[#252424] active:bg-[#494646] focus:bg-[#676565]"
          to="/"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error;
