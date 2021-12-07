import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { ImSearch } from "react-icons/im";

import { getUserInfoGoogle, getCategories } from "../../Redux/Actions/actions";
import Logo from "../Logo/logo";
import User from "../User/user";
import j from "./nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user = useSelector((state) => state.user);
  const userGoogle = useSelector((state) => state.getInfoGoogle);
  const categories = useSelector((state) => state.categories);

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleCat(e) {
    e.preventDefault();
    let nombre = e.target.value;
    navigate("/categorias/" + nombre);
  }

  function handleSubmit() {}

  function handleInput() {}

  return (
    <div
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? j.nav : j.sticky}
    >
      <div /*className={j.navbar}*/>
        <nav className={j.NavContainer}>
          <Link to="/" className="pl-10">
            <div className={j.logo}>
              <Logo />
            </div>
          </Link>


          <div
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            className="pr-10"
          >
            <span>
              <select className="w-28" onChange={handleCat}>
                <option > Categorias </option>
                {categories?.map((el, i) => (
                  <option key={el.name + i}>{el.name}</option>
                ))}
              </select>
            </span>

            <Link to="/catalogo" className="px-6">
              <span>Catalogo</span>
            </Link>

            <Link to="/" className="px-6">
              <span>Nosotros</span>
            </Link>

            <input 
            // className="px-4"
              type="text"
              placeholder="Busca tu producto"
              onChange={handleInput}
              className="bg-gray-100 pt-3 pb-1 ml-10 h-7 border-gray-500"
              // border-l-2 border-t-2 border-b-2"
            />
            <button
              type="submit"
              onClick={handleSubmit}
             // className=" px-1  h-7 bg-gray-100 mr-4 mb-2 border-gray-500 border-r-2 border-t-2 border-b-2"
            >
              <ImSearch />
            </button>

            <Link to="/shopCart" className="pl-10 pr-10">
              <button>
                <IoIosCart />
              </button>
            </Link>
            {userGoogle && userGoogle.login ? (
              <User />
            ) : (
              <>
                <Link to="/registrarme" className="pl-4">
                  <span>Crear cuenta</span>
                </Link>

                <Link to="/ingresar" className="pl-4">
                  <span>Iniciar Sesión</span>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
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
