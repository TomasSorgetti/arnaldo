import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeData } from "../../redux/actions/actions";

const Genders = () => {
  const dispatch = useDispatch();
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState("ver todos");

  useEffect(() => {
    dispatch(changeData("ver todos"));
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const originalGenders = [
    "ver todos",
    "chocolates",
    "dulces de leche",
    "cremas",
    "frutales",
  ];

  const [genders, setGenders] = useState([
    "ver todos",
    "chocolates",
    "dulces de leche",
    "cremas",
    "frutales",
  ]);

  const handleClick = (gender) => {
    setActive(gender);
    dispatch(changeData(gender));
    const gendersCopy = originalGenders.slice();
    let sortedGenders = gendersCopy.filter((item) => item !== gender);
    sortedGenders.unshift(gender);
    setGenders(sortedGenders);
    document.documentElement.scrollTo(0, 0);
  };

  return (
    <section className="sticky z-40 top-[54px] lg:pl-6 lg:top-[84px] xl:pl-10 2xl:pl-16">
      <motion.div
        ref={carousel}
        className="w-full bg-black overflow-hidden lg:hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="pl-4 w-[710px] h-24 flex gap-4 items-center 2xl:gap-6"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {genders.map((gender, index) => (
            <button
              onClick={() => handleClick(gender)}
              className={`h-10 w-auto text-[0.9rem] uppercase rounded-full px-5 py-2 2xl:text-[1.14rem] ${
                active === gender ? `bg-white text-black` : "bg-buttonColor"
              }`}
              key={index}
            >
              {gender}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <div className="hidden w-full bg-black overflow-hidden lg:block">
        <div className="pl-4 w-[710px] h-24 flex gap-4 items-center">
          {genders.map((gender, index) => (
            <button
              onClick={() => handleClick(gender)}
              className={`h-10 w-auto text-[0.9rem] uppercase rounded-full px-5 py-2 ${
                active === gender ? `bg-white text-black` : "bg-buttonColor"
              }`}
              key={index}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Genders;
