import contact from "../../assets/images/imagenes_contacto/card_pagina_contacto.webp";
import { useState } from "react";
import Modals from "./Modals";

const Contacto = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [submited, setSubmited] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    cel: "",
    msg: "",
  });
  // const [errors, setErrors] = useState({
  //   nombre: "",
  //   empresa: "",
  //   email: "",
  //   cel: "",
  //   msg: "",
  // });
  const [reset, setReset] = useState({
    nombre: "",
    empresa: "",
    email: "",
    cel: "",
    msg: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    // setErrors(validate({ ...form, [property]: value }, errors));
    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
    if (!form.nombre && !form.email && !form.cel && !form.msg) {
      return;
    }
    if (form.nombre && form.email && form.cel && form.msg) {
      setForm(reset);
      setSubmited(false);
      handleOpen()
      setTimeout(() => {
        handleClose()
      },4000)
    }
  };

  return (
    <section className="font-heebo pt-[3.5rem] pb-8 border-b-2 border-white">
      <article className="relative h-[132px] overflow-hidden 2xl:h-[370px]">
        <img src={contact} alt="sabores header" />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-bold 2xl:text-[6.25rem] 2xl:pl-16">
          contacto
        </h3>
      </article>
      <p className="p-5 2xl:px-20 2xl:py-10 2xl:text-[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales
        id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
      </p>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-8 w-full p-5  2xl:w-[638px] m-auto 2xl:gap-12"
      >
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px] 2xl:text-[1.88rem] 2xl:top-[-25px]">
            Nombre y Apellido
          </label>
          <input
            onChange={handleChange}
            className={`rounded placeholder:text-[0.8rem] w-full h-[46px] bg-black  border px-2 focus:border-2 focus:outline-none 2xl:h-[99px] 2xl:placeholder:text-[1.5rem] 2xl:px-4 ${
              submited && form.nombre === ""
                ? "border-redError"
                : "border-white"
            }`}
            type="text"
            placeholder="Ingrese su nombre y apellido"
            name="nombre"
            value={form.nombre}
          />
          <span
            className={`h-6 w-6 text-black rounded-full bg-redError absolute right-2 top-3 text-center font-bold ${
              submited && form.nombre === "" ? "" : "hidden"
            }`}
          >
            !
          </span>
        </div>
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px] 2xl:text-[1.88rem] 2xl:top-[-25px]">
            Empresa
          </label>
          <input
            onChange={handleChange}
            className="rounded focus:outline-none placeholder:text-[0.8rem] w-full h-[46px] bg-black border-white border px-2 focus:border-2 2xl:h-[99px] 2xl:placeholder:text-[1.5rem] 2xl:px-4"
            type="text"
            placeholder="Ingrese el nombre de su empresa (opcional)"
            name="empresa"
            value={form.empresa}
          />
        </div>
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px] 2xl:text-[1.88rem] 2xl:top-[-25px]">
            Email
          </label>
          <input
            onChange={handleChange}
            className={`rounded focus:outline-none placeholder:text-[0.8rem] w-full h-[46px] bg-black  border px-2 focus:border-2 2xl:h-[99px] 2xl:placeholder:text-[1.5rem] 2xl:px-4 ${
              submited && form.email === "" ? "border-redError" : "border-white"
            }`}
            type="text"
            placeholder="Ingrese su email de contacto"
            name="email"
            value={form.email}
          />
          <span
            className={`h-6 w-6 text-black rounded-full bg-redError absolute right-2 top-3 text-center font-bold ${
              submited && form.email === "" ? "" : "hidden"
            }`}
          >
            !
          </span>
        </div>
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px] 2xl:text-[1.88rem] 2xl:top-[-25px]">
            Teléfono
          </label>
          <input
            onChange={handleChange}
            className={`rounded focus:outline-none placeholder:text-[0.8rem] w-full h-[46px] bg-black  border px-2 focus:border-2 2xl:h-[99px] 2xl:placeholder:text-[1.5rem] 2xl:px-4 ${
              submited && form.cel === "" ? "border-redError" : "border-white"
            }`}
            type="number"
            placeholder="Ingrese su teléfono de contacto"
            name="cel"
            value={form.cel}
          />
          <span
            className={`h-6 w-6 text-black rounded-full bg-redError absolute right-2 top-3 text-center font-bold ${
              submited && form.cel === "" ? "" : "hidden"
            }`}
          >
            !
          </span>
        </div>
        <div className="relative">
          <textarea
            onChange={handleChange}
            className={`rounded focus:outline-none focus:bg-white placeholder:text-black placeholder:font-medium w-full h-[150px] px-3 py-1 text-black bg-textAreaBg  border focus:border-2 2xl:placeholder:text-[1.5rem] 2xl:h-[321px] ${
              submited && form.msg === "" ? "border-redError" : "border-white"
            }`}
            name="msg"
            value={form.msg}
            placeholder="Mensaje"
          ></textarea>
          <span
            className={`z-10 h-6 w-6 text-black rounded-full bg-redError absolute right-2 top-2 text-center font-bold ${
              submited && form.msg === "" ? "" : "hidden"
            }`}
          >
            !
          </span>
        </div>
        <Modals open={open} setOpen={setOpen} />
        <button
          type="submit"
          className="uppercase font-bold w-full bg-buttonColor2 rounded py-2 mt-[-50px] 2xl:text-[1.15rem] 2xl:py-3"
        >
          enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
