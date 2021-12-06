import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from "react-router-dom";
import Card from "../../Card/card";
import { getCategories, getProduct, orderByPrice, getUser, getSubCategoryByName, getFilterByCategory, filterBySubCat} from "../../Redux/Actions/actions";
import s from './categories.module.css'
import FilterPrice from "../Filter/filterPrice";

import { IoIosCart } from "react-icons/io";

import Logo from "../Logo/logo";
import User from '../User/user'
import { VscDebugRestart } from "react-icons/vsc";

export default function Categorias() {

  const dispatch = useDispatch();

  const { nombre } = useParams();
  const allProduct = useSelector((state) => state.product);
  const subcategories = useSelector((state) => state.subcategories);
  const userGoogle = useSelector((state) => state.getInfoGoogle);
  const [, setOrden] = useState("");

useEffect(() => {
  dispatch(getFilterByCategory(nombre))
},[])

  useEffect(() => {  
    dispatch(getSubCategoryByName(nombre));
  },[])

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])


  function handleClick(e) {
    e.preventDefault();
    dispatch(getProduct());
  }

  function handleSubCat(e) {
    e.preventDefault();
   dispatch(filterBySubCat(e.target.value))
   
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div>
      <nav className="flex justify-between items-center h-20  text-black">
        <Link to="/" className="pl-10">
          <div className=" w-30">
            <Logo />
          </div>
        </Link>

        <div>
          <select className="w-40" onChange={handleSubCat}>
            <option > SubCategorias </option>
             {
              subcategories[0]?.subcategories.map((el, i) =>
              (
                <option key={i} value={el}>
                  {el}
                </option>
              ))
            } 
          </select>
        </div>


        <div className=" w-30">
          <button onClick={handleClick}>
            <VscDebugRestart />
          </button>
        </div>



        <div className="px-6">
          <FilterPrice />
        </div>



        <div className="pr-10">
          <select className="w-38" onChange={(e) => handleOrder(e)}>
            <option value="All"> Orden por Precio: </option>
            <option value="Menor-Mayor"> Mayor a Menor </option>
            <option value="Mayor-Menor"> Menor a Mayor </option>
          </select>
        </div>


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
      </nav>

      <div className={s.cards}>
        {allProduct?.length === 0 ? (
          <div>
            <h1>Cargando...</h1>
          </div>
        ) : (
          allProduct.map((el, i) => {
            return (
              <div key={"card" + i}>
                <Card
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  id={el.id}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
