import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { ImSearch } from "react-icons/im";

import { getUser, getCategories } from "../../Redux/Actions/actions";
import Logo from "../Logo/logo";
import User from "../User/user";

export default function Nav() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const userGoogle = useSelector((state) => state.getInfoGoogle);
  const categories = useSelector((state) => state.categories);

  console.log(user);

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  function handleCat(e) {
    e.preventDefault();
    let nombre = e.target.value
    navigate("/categorias/" + nombre);

  }

  function handleSubmit() { }

  function handleInput() { }

  return (
    <div>
      <nav className="flex justify-between items-center h-20  text-black">
        <Link to="/" className="pl-10">
          <div className=" w-30">
            <Logo />
          </div>
        </Link>

        <div className="pr-10">
          <span>
            <select className="w-28" onChange={handleCat}>
              <option> categorias </option>
              {
                categories.map((el, i) =>
                (

                  <option key={el.name + i}>
                    {el.name}
                  </option>

                )
                )
              }
            </select>
          </span>

          <Link to="/catalogo" className="px-6">
            <span>Catalogo</span>
          </Link>

          <Link to="/" className="px-6">
            <span>Nosotros</span>
          </Link>

          <Link to="/" className="pl-6 pr-8">
            <span>Contacto</span>
          </Link>

          <input
            type="text"
            onChange={handleInput}
            className="bg-gray-300 pt-2 pb-1 ml-10 h-8 border-gray-500 border-l-2 border-t-2 border-b-2"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className=" px-1  h-8 bg-gray-300 mr-4 mb-2 border-gray-500 border-r-2 border-t-2 border-b-2"
          >
            <ImSearch />
          </button>

          <Link to="/carrito" className="pl-6 pr-10">
            <button>
              <IoIosCart />
            </button>
          </Link>
          {
            userGoogle && userGoogle.login ?
              <User /> :
              <>
                <Link to="/registrarme" className="pl-4">
                  <span>Crear cuenta</span>
                </Link>

                <Link to="/ingresar" className="pl-4">
                  <span>Iniciar Sesión</span>
                </Link>
              </>
          }


        </div>
      </nav>
    </div>
  );
}

// {/* {
//     el.subcategories.map((s, i) => 
//     (
//      <option key={i}>{s}</option>
//     )
//    )
//   } */}