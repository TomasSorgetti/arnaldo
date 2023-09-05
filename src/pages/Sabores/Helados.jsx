import { useSelector } from "react-redux";

const Helados = () => {
  const { data } = useSelector((state) => state);

  return (
      <div className="flex flex-col gap-6">
          {data?.action === "ver todos" ?
              <h1>TODOS LOS SABORES</h1>
              : <h1 className="uppercase">{data.action}</h1>
          }
      {data.filtred?.map(({ name, description }, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <div>image</div>
          <div>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Helados;
