import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { LoginG } from "../../User/LoginGoogle/loginG";
import { signUp, localLogin } from "../../../Redux/Actions/actions";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    surname: "",
    mail: "",
    password: "",
    cellphone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Ingrese su nombre.";
    } else if (!input.surname) {
      errors.surname = "Ingrese su apellido.";
    } else if (!input.mail) {
      errors.mail = "Ingrese su correo.";
    } else if (!input.password) {
      errors.password = "Ingrese su contraseña.";
    } else if (!input.cellphone) {
      errors.cellphone = "Ingrese su numero de telefono.";
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
    // dispatch(inserteAccionAqui(input))
    dispatch(signUp(input));
    setTimeout(() => {
      dispatch(localLogin(input));
      navigate("/");
    }, 200);
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-left pl-20 pb-3 pt-5 text-2xl">Registrate</h2>
        <hr className="border-black mr-10 ml-20 " />

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
            name="surname"
            type="text"
            placeholder="apellido"
            value={input.surname}
            onChange={handleChange}
          ></input>
          {errors.surname && <p>{errors.surname}</p>}
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
            name="cellphone"
            type="number"
            placeholder="cellphone"
            value={input.cellphone}
            onChange={handleChange}
          ></input>
          {errors.cellphone && <p>{errors.cellphone}</p>}
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
              input.surname &&
              input.password &&
              input.mail &&
              input.cellphone &&
              input.address
            )
          }
        >
          Crear cuenta
        </button>
      </form>

      <div>
        <h5 className=" text-lg py-4">
          O puedes registrarte usando tu cuenta de Google
        </h5>
        <LoginG />
      </div>

      <h5 className="py-4 text-lg"> ¿Ya tienes una cuenta?</h5>
      <Link to="/ingresar">
        <button className="text-red-400 pb-3  text-lg"> Entra aquí</button>
      </Link>
    </div>
  );
}
