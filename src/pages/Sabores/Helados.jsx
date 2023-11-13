import { useSelector } from "react-redux";
import tac from "../../assets/images/iconos/iconos_lista_sabores/gluten.png";
const Helados = () => {
  const { data } = useSelector((state) => state);

  return (
    <div className="flex flex-col gap-6 px-5 mt-2 lg:px-10 xl:px-16 border-b-2 border-white pb-6 2xl:pl-20 lg:pb-12">
      {data?.action === "ver todos" ? (
        <h2 className="uppercase text-[1.5rem] font-bold lg:text-[3rem] 2xl:text-[3.8rem]">
          TODOS LOS SABORES
        </h2>
      ) : (
        <h2 className="uppercase text-[1.5rem] font-bold lg:text-[3rem] 2xl:text-[3.8rem]">
          {data.action}
        </h2>
      )}
      <div className="flex flex-col gap-4 lg:gap-6 lg:w-full lg:flex-row lg:flex-wrap 2xl:gap-10">
        {data.filtred?.map(({ image, name, description, tacc }, index) => (
          <div className="flex gap-2 items-center lg:w-[48%]" key={index}>
            <img
              className="w-[72px] h-[72px] lg:w-[150px] lg:h-[150px] 2xl:w-[199px] 2xl:h-[199px]"
              src={image}
              alt="sabor de helado"
            />
            <div className="flex flex-col justify-between h-full 2xl:pl-1">
              <h4 className="text-[0.9rem] uppercase font-semibold lg:text-[1.25rem] xl:text-[1.5rem]">
                {name}
              </h4>
              <p className="text-[0.63rem] font-normal lg:text-[1rem] xl:text-[1.25rem]">
                {description}
              </p>
              {tacc && (
                <img
                  className="w-[15px] h-[15px] lg:h-[30px] lg:w-[30px]"
                  src={tac}
                  alt="gluten free logo"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Helados;
