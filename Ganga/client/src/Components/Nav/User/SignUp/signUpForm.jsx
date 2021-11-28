import React, { useState /*useEffect*/ } from "react";
import { useDispatch /*useSelector*/ } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { FcGoogle  } from "react-icons/fc";
import { LoginG } from "../../User/LoginGoogle/loginG";
import { signUp, localLogin } from "../../../Redux/Actions/actions";

// import s from "./signup.module.css";

export default function SignUpForm() {
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
      errors.mail = "Ingrese el correo con el que se ha registrado";
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
    // dispatch(inserteAccionAqui(input))
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
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-left pl-10 pb-3 pt-5 text-2xl">Registrate</h2>
        <hr className="border-black mx-10" />

        <div className="pt-6">
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

        <div className="pt-6">
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

        <div className="pt-6">
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

        <div className="pt-6">
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

        <div className="pt-6">
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

        <div className="py-6">
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
          className="border-gray-400 border-2 rounded px-3 py-1 text-xl"
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
      </form>

      <div>
        <h5 className=" text-lg py-6">
          O puedes registrarte usando tu cuenta de Google
        </h5>
        {/* <button className="border-2 border-black px-2 text-xl"//onClick= {}
          >
            <FcGoogle  className="inline-block px-1 w-10 h-10"/> Crear cuenta \o/
          </button> */}
        <LoginG />
      </div>

      <h5 className="pt-6 pb-4 text-lg"> ¿Ya tienes una cuenta?</h5>
      <Link to="/ingresar">
        <button className="text-red-400 pb-5  text-lg"> Entra aquí</button>
      </Link>
    </div>
  );
}
