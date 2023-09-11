import contact from "../../assets/images/imagenes_contacto/card_pagina_contacto.webp";
import { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    cel: "",
    msg: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    empresa: "",
    email: "",
    cel: "",
    msg: "",
  });
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
    if (form.nombre && form.email && form.cel && form.msg) {
      console.log(form);
    }
  };
  return (
    <main>
      <section className="relative">
        <img src={contact} alt="sabores header" />
        <h3 className="absolute uppercase left-4 bottom-0 text-[2.5rem] font-black">
          contacto
        </h3>
      </section>
      <p className="p-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-8 w-full p-5"
      >
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Nombre y Apellido
          </label>
          <input
            onChange={handleChange}
            className="w-full h-[46px] bg-black border-white border px-2 pt-2 focus:border-2"
            type="text"
            placeholder="Ingrese su nombre y apellido"
            name="nombre"
            value={form.nombre}
          />
        </div>
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Empresa
          </label>
          <input
            onChange={handleChange}
            className="w-full h-[46px] bg-black border-white border px-2 pt-2 focus:border-2"
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
            className="w-full h-[46px] bg-black border-white border px-2 pt-2 focus:border-2"
            type="text"
            placeholder="Ingrese su email de contacto"
            name="email"
            value={form.email}
          />
        </div>
        <div className="relative">
          <label className="absolute top-[-14px] left-3 bg-black px-[2px]">
            Teléfono
          </label>
          <input
            onChange={handleChange}
            className="w-full h-[46px] bg-black border-white border px-2 pt-2 focus:border-2"
            type="number"
            placeholder="Ingrese su teléfono de contacto"
            name="cel"
            value={form.cel}
          />
        </div>
        <textarea
          onChange={handleChange}
          className="h-[150px] px-3 py-1 text-black bg-textAreaBg"
          name="msg"
          value={form.msg}
          placeholder="Mensaje"
        ></textarea>
        <button
          type="submit"
          className="uppercase w-full bg-buttonColor2 rounded-full py-2"
        >
          enviar
        </button>
      </form>
    </main>
  );
};

export default Contacto;
