import { useSelector } from "react-redux";
import tac from "../../assets/images/iconos/iconos_lista_sabores/gluten.png";
const Helados = () => {
  const { data } = useSelector((state) => state);

  return (
    <div className="flex flex-col gap-6 px-5">
      {data?.action === "ver todos" ? (
        <h1>TODOS LOS SABORES</h1>
      ) : (
        <h1 className="uppercase">{data.action}</h1>
      )}
      {data.filtred?.map(({ image, name, description, tacc }, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <img
            className="w-[72px] h-[72px]"
            src={image}
            alt="sabor de helado"
          />
          <div>
            <h1 className="text-[0.9rem] uppercase font-semibold">{name}</h1>
            <p className="text-[0.63rem] font-normal">
              {description}
            </p>
            {tacc && <img src={tac} alt="gluten free logo" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Helados;
