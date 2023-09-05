import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeData } from "../../redux/actions/actions";
const Genders = () => {
    const dispatch = useDispatch()
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        dispatch(changeData("ver todos"));
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    const genders = [
      "ver todos",
      "chocolates",
      "dulces de leche",
      "cremas",
      "frutales",
    ];
    const handleClick = (gender,index) => {
        setActive(index)
        dispatch(changeData(gender));
    }
    return (
      <motion.div
        ref={carousel}
        className="w-full overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="pl-4 w-[710px] h-24 flex gap-4 items-center"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {genders.map((gender, index) => (
            <button
              onClick={() => handleClick(gender,index)}
              className={`h-10 w-auto text-[0.9rem] uppercase rounded-full px-5 py-2 ${
                index === active ? `bg-white text-black` : "bg-buttonColor"
              }`}
              key={index}
            >
              {gender}
            </button>
          ))}
        </motion.div>
      </motion.div>
    );
};

export default Genders;