import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDetailsProduct,
  addProduct,
  getUserInfoGoogle,
} from "../Redux/Actions/actions";
import Nav from "../../Components/Nav/NavBar/nav";
import a from "./productoId.module.css";
import { MercadoPago2 } from "../MercadoPago/mercadoPago2";

export default function ProductId() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, /*state*/ setState] = useState([]);
  const info = useSelector((state) => state.detailProduct);
  const User = useSelector((state) => state.getInfoGoogle);
  const { id } = useParams();

  // const getDetails = () => {
  //   if (Object.keys(state).length === 0) dispatch(getDetailsProduct(id));
  // };

  // useEffect(() => {
  //   getDetails();
  //   return () => {
  //     setState([]);
  //   };
  // },[]);

  function handleAddToCart() {
    console.log("id User", User.id);
    console.log("Product id:", info.id);
    dispatch(
      addProduct({ id: User.id, item: { id: info.id }, cant: 1, que: "+" })
    );
    navigate("/shopCart");
  }

  useEffect(() => {
    dispatch(getDetailsProduct(id));
    // dispatch(getUserInfoGoogle())
  }, [dispatch, id]);

  useEffect(() => {
    setState(info);
  }, [info]);

  return (
    <div>
      <Nav />
      <div className={a.todo}>
        <div className={a.container}>
          <>
            <div className={a.derecho}>
              <div className={a.div1}>
                <img src={info.image} className={a.img} alt="" />
              </div>
              <div className={a.div2}>
                <div className={a.name}>
                  <h1>{info.name}</h1>
                </div>
                <div className={a.descrip}>
                  <p>{info.description}</p>
                </div>
                <div className={a.start}>⭐⭐⭐⭐⭐</div>
                <div className={a.price}>
                  <h2>$ {info.price}</h2>
                </div>
              </div>
            </div>

            <div className={a.izq}>
              <div className={a.pago}>
                <h3> DESCRIPCION DEL PAGO</h3>
              </div>
              <div className={a.div3}>
                {/* <button className={a.bnt}>Comprar</button> */}
                <button className={a.bnt}>
                  <MercadoPago2 title={info.name} unit_price={info.price} />
                </button>
                <button onClick={handleAddToCart} className={a.bnt}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
