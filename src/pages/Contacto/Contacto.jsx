import contact from "../../assets/images/imagenes_contacto/card_pagina_contacto.webp";
import { useState } from "react";
import Swal from "sweetalert2";

const Contacto = () => {
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
      Swal.fire({
        title: "Success",
        text: "Esto es una prueba",
        icon: "success",
      });
    }
  };
  return (
    <section className="pt-[3.5rem]">
      <article className="relative h-[132px] overflow-hidden">
        <img src={contact} alt="sabores header" />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black">
          contacto
        </h3>
      </article>
      <p className="p-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-8 w-full p-5 border-b-2 border-white"
      >
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Nombre y Apellido
          </label>
          <input
            onChange={handleChange}
            className={`rounded placeholder:text-[0.8rem] w-full h-[46px] bg-black  border px-2 focus:border-2 focus:outline-none ${
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
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Empresa
          </label>
          <input
            onChange={handleChange}
            className="rounded focus:outline-none placeholder:text-[0.8rem] w-full h-[46px] bg-black border-white border px-2 focus:border-2"
            type="text"
            placeholder="Ingrese el nombre de su empresa (opcional)"
            name="empresa"
            value={form.empresa}
          />
        </div>
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Email
          </label>
          <input
            onChange={handleChange}
            className={`rounded focus:outline-none placeholder:text-[0.8rem] w-full h-[46px] bg-black  border px-2 focus:border-2 ${
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
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Teléfono
          </label>
          <input
            onChange={handleChange}
            className={`rounded focus:outline-none placeholder:text-[0.8rem] w-full h-[46px] bg-black  border px-2 focus:border-2 ${
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
            className={`rounded focus:outline-none focus:bg-white placeholder:text-black placeholder:font-medium w-full h-[150px] px-3 py-1 text-black bg-textAreaBg  border focus:border-2 ${
              submited && form.msg === ""
                ? "border-redError placeholder:text-redError"
                : "border-white"
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
        <button
          type="submit"
          className="uppercase w-full bg-buttonColor2 rounded-full py-2"
        >
          enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
