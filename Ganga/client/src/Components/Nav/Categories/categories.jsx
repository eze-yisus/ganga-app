import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../Card/card";
import User from "../User/user";
import {
  orderByPrice,
  getUser,
  getSubCategoryByName,
  getProduct,
  getFilterByCategory,
  filterBySubCat,
  getUserInfoGoogle
} from "../../Redux/Actions/actions";
import "./categories.css";
import FilterPrice2 from "../Filter/filterPrice2";
import Pagination from "../../Home/Pagination/pagination";
import Nav from "../NavBar/nav";
import download2 from "../../Resources/cargando.gif";
import FooterCategory from "../../Home/Footer/footerCategory";

export default function Categorias() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nombre } = useParams();
  const user = useSelector((state) => state.getInfoGoogle);
  const subcategories = useSelector((state) => state.subcategories);
  const allProduct = useSelector((state) => state.product);
  const [, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(12);
  const indexOfLastProducts = currentPage * elementsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - elementsPerPage;
  const currentProducts = allProduct?.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    dispatch(getFilterByCategory(nombre));
  }, [dispatch, nombre]);

  useEffect(() => {
    dispatch(getSubCategoryByName(nombre));
  }, [dispatch, nombre]);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    navigate("/catalogo");
    dispatch(getProduct());
  }

  function handleSubCat(e) {
    e.preventDefault();
    dispatch(filterBySubCat(e.target.value));
    setCurrentPage(1);
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="containerCategory">
      {/* <Nav className="flex justify-between items-center h-20 w-8 text-black" /> */}
      {user && user.login ? (
        <div>
          <div className="absolute top-5 right-20 z-50 mr-10 w-28">
            <User />
          </div>
          <Nav className="flex justify-between items-center h-20 w-8 text-black"/>
        </div>
      ) : null}
      <div className="bannerProdCategory">
        <h1 className="aloneCategory">SOLO AQUÍ EN GANGA</h1>
      </div>
      <div className="infCategory">
        <div className="filtrosCategory">
          <div className="conNameFilCategory">
            <h1 className="nameFilCategory">FILTROS:</h1>
          </div>
          <div className="inputContainerCategory">
            <FilterPrice2 />
          </div>
          <div className="selectFilterCategory">
            <select className="selectCategory" onChange={(e) => handleOrder(e)}>
              <option> ordena por precio: </option>
              <option value="Menor-Mayor"> Mayor a Menor </option>
              <option value="Mayor-Menor"> Menor a Mayor </option>
            </select>
          </div>
          <div className="selectFilterSubCategory">
            <select className="selectSubCategory" onChange={handleSubCat}>
              <option>elije por sub categoria</option>
              {subcategories[0]?.subcategories.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div className="conBorCategory">
            <button className="borCategory" onClick={handleClick}>
              Borra filtros
            </button>
          </div>
        </div>
      </div>
      <div className="containerCardsCategory">
        {currentProducts?.length === 0 ? (
          <div className="download2">
            <img src={download2} alt="" />
          </div>
        ) : (
          currentProducts?.map((el, i) => {
            return (
              <div>
                <div className="cardProductsCategory" key={"card" + i}>
                  <Card
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el.id}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination
        elementsPerPage={elementsPerPage}
        allProduct={allProduct}
        paginate={paginate}
      />
      <FooterCategory />
    </div>
  );
}
