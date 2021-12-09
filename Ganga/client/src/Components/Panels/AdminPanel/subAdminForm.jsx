import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp, localLogin } from "../../Redux/Actions/actions";

// import s from "./signup.module.css";

export default function SubAdminForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    mail: "",
    password: "",
    numero: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Ingrese su nombre.";
    } else if (!input.lastname) {
      errors.lastname = "Ingrese su apellido.";
    } else if (!input.mail) {
      errors.mail = "Ingrese su correo.";
    } else if (!input.password) {
      errors.password = "Ingrese su contraseña.";
    } else if (!input.numero) {
      errors.numero = "Ingrese su numero de telefono.";
    } else if (!input.address) {
      errors.address = "Ingrese la dirección de su vivienda.";
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUp(input));
    setTimeout(() => {
      dispatch(localLogin(input));
    }, 1000);
    setInput({
      name: "",
      lastname: "",
      mail: "",
      password: "",
      numero: "",
      address: "",
    });
    navigate("/panel");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-left pl-20 pb-3 pt-5 text-2xl">
          Registra un nuevo admin
        </h2>
        <hr className="border-black mr-10 ml-20 " />
        <div className="text-center">
          <div className="pt-5">
            <input
              className="w-96 border-gray-400 border-2 rounded pl-2"
              name="name"
              type="text"
              placeholder="nombre"
              value={input.name}
              onChange={handleChange}
            ></input>
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className="pt-5">
            <input
              className="w-96 border-gray-400 border-2 rounded pl-2"
              name="lastname"
              type="text"
              placeholder="apellido"
              value={input.lastname}
              onChange={handleChange}
            ></input>
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>

          <div className="pt-5">
            <input
              className="w-96 border-gray-400 border-2 rounded pl-2"
              name="mail"
              type="email"
              placeholder="correo electrónico"
              value={input.mail}
              onChange={handleChange}
            ></input>
            {errors.mail && <p>{errors.mail}</p>}
          </div>

          <div className="pt-5">
            <input
              className="w-96 border-gray-400 border-2 rounded pl-2"
              name="password"
              type="password"
              placeholder="contraseña"
              value={input.password}
              onChange={handleChange}
            ></input>
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="pt-5">
            <input
              className="w-96 border-gray-400 border-2 rounded pl-2"
              name="numero"
              type="number"
              placeholder="numero"
              value={input.numero}
              onChange={handleChange}
            ></input>
            {errors.numero && <p>{errors.numero}</p>}
          </div>

          <div className="py-5">
            <input
              className="w-96 border-gray-400 border-2 rounded pl-2"
              name="address"
              type="text"
              placeholder="dirección"
              value={input.address}
              onChange={handleChange}
            ></input>
            {errors.address && <p>{errors.address}</p>}
          </div>

          <button
            className="border-gray-400 border-2 rounded px-2 py-1 text-xl"
            type="submit"
            value="submit"
            disabled={
              !(
                input.name &&
                input.lastname &&
                input.password &&
                input.mail &&
                input.numero &&
                input.address
              )
            }
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
}
