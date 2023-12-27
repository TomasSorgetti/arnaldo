import { useState } from "react";
import errorImage from "../../assets/images/404/404_not_found.webp";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

const Error = () => {
  const [activeNav, setActiveNav] = useState(window.location.pathname);

  return (
    <div>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="flex flex-col items-center justify-center">
        <img
          className="mt-24 mb-10 w-11/12 sm:w-9/12 lg:w-5/12 lg:mt-40 xl:w-4/12"
          src={errorImage}
          alt="error image presentation"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          suscipit fugiat excepturi accusamus recusandae tenetur magni ducimus
          iusto pariatur dolorum porro perferendis minus, dolor nemo eaque
          neque, aut, natus provident.
        </p>
        <Link to="/">Inicio</Link>
      </div>
    </div>
  );
};

export default Error;
