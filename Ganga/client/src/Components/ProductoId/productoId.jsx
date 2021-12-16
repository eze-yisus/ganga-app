import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDetailsProduct,
  addProduct,
  allReviews,
  officialStore,
} from "../Redux/Actions/actions";
import Nav from "../../Components/Nav/NavBar/nav";
import a from "./productoId.module.css";
import { MercadoPago2 } from "../MercadoPago/mercadoPago2";
import Swal from 'sweetalert2';
import { IoMdArrowRoundBack } from "react-icons/io"
import { BsPatchCheckFill } from "react-icons/bs";
import Boton from "../Nav/boton"
import CardReviews from "./cardReviews";
import User from "../Nav/User/user";


export default function ProductId() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, /*state*/ setState] = useState([]);
  const info = useSelector((state) => state.detailProduct);
  const user = useSelector((state) => state.getInfoGoogle);
  const Reviews = useSelector((state) => state.allReviews)
  const official = useSelector((state) => state.officialStore); //officialStore
  const { id } = useParams();

  // const getDetails = () => {
  //   if (Object.keys(state).length === 0) dispatch(getDetailsProduct(id));
  // };

  useEffect(() => {
    dispatch(allReviews())
  }, [dispatch]);
  // const productReviews = Reviews.filter((review) => review.productId === id)
  // console.log('soy el productReviews: ', productReviews)
  // console.log('soy el Tamaño: ', productReviews.length)

   
    const productReviews = Reviews.filter((review) => review.productId === id)
  //   let promedio = 0
  //   console.log(productReviews, "PERRA")
  
  //   for (var i = 0; i < productReviews.length; i++) {
  //     promedio = promedio + productReviews[i].qualificacion / productReviews.length
  //     console.log(promedio,"intrmedio")
  //     promedio = Math.round(promedio)
  //   }
   
  
  // console.log(promedio, "PROMEDIO")

  function handleAddToCart() {

    if (!user.login) {
      navigate("/ingresar");
      return
    }
    dispatch(
      addProduct({ id: user.id, item: { id: info.id }, cant: 1, que: "+" })
    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu producto se ha agregado al carrito.',
      showConfirmButton: false,
      timer: 2000
    })

    // alert("Tu producto se ha agregado al carrito.")
  }

  useEffect(() => {
    dispatch(getDetailsProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    setState(info);
  }, [info]);

   //officialStore
   useEffect(() => {
    dispatch(officialStore(info?.userId));
  }, [dispatch, info.userId]);

  return (
    <div className={a.body}>
      {user && user.login ? (
        <div>
          <div className="absolute top-5 right-20 z-50 mr-10 w-28">
            <User />
          </div>
          <Nav />
        </div>
      ) : null}
      <div className="absolute top-12 left-1">
        <Boton
          parametro={"/catalogo"}
          icono={<IoMdArrowRoundBack />} />
      </div>
      <div className="absolute top-30 right-1">
          {official?.officialStore ? (
            <div className={a.verificate}>
              <div className={a.logoVerificate}><BsPatchCheckFill/></div>
          <h6> Tienda Oficial: <strong>{official.name}</strong></h6>
        </div>
      ) : null}
          </div>
      <div className={a.containerAll}>

        <div className={a.containerDerecho}>

          <div className={a.containerSubDerecho}>
            <div className={a.div1}>
              <img src={info.image} className={a.img} alt="" />
            </div>

            <div className={a.div2}>

              <div className={a.nombre}>
                <strong className={a.name}>{info.name}</strong>
              </div>
              <div className={a.start}>

                <div>

                <div className={a.containerButton}>
              {user.login && info.stock > 0 && (
                <button className={a.button}>
                  <MercadoPago2
                    title={info.name}
                    unit_price={info.price}
                    id={user.id}
                    item_id={info.id}
                  />
                </button>
              )}
              {info.stock > 0 && (
                <button onClick={handleAddToCart} className={a.button}>
                  Agregar al carrito
                </button>
              )}
         
            </div>
                  
                </div>
              </div>

            </div>
          </div>

          <div className={a.constainerSubIzquierdo}>

            <div className={a.containerDescription}>
              <div className={a.descrip}>
                <strong>{info.description}</strong>
              </div>

            </div>
            <div className={a.containerPrice}>
                <div className={a.stock}>
                  <strong>Stock: {info.stock}</strong>
                </div>

              <div className={a.colorPrecio}>
                <strong>Su precio en un pago:</strong>
              </div>

              <div className={a.price}>
                <strong>$ {info.price}</strong>
              </div>

            </div>


            <div className={a.brand}>
                    <strong>{info.brand}</strong>
                  </div>

          </div>

        </div >




         
          <div className={a.containerReveiws}>
          <div className={a.titulo}>
            <h1>Opiniones sobre <strong>{info.name}</strong></h1>
          </div>
      
          <div>
            {
              productReviews?.length < 1 ?
                <div className={a.span}>
                  <strong>Aun no hay opiniones del Producto</strong>
                </div> :
                <div className={a.opinion}>
                  {
                    productReviews?.map((el) => {
                      if (el.qualificacion === 1) {
                        el.qualificacion = "⭐";
                      } else if (el.qualificacion === 2) {
                        el.qualificacion = "⭐⭐";
                      } else if (el.qualificacion === 3) {
                        el.qualificacion = "⭐⭐⭐";
                      } else if (el.qualificacion === 4) {
                        el.qualificacion = "⭐⭐⭐⭐";
                      } else if (el.qualificacion === 5) {
                        el.qualificacion = "⭐⭐⭐⭐⭐";
                      } else if (el.qualificacion === 6) {
                        el.qualificacion = "⭐⭐⭐⭐⭐⭐";
                      } else if (el.qualificacion === 7) {
                        el.qualificacion = "⭐⭐⭐⭐⭐⭐⭐";
                      } else if (el.qualificacion === 8) {
                        el.qualificacion = "⭐⭐⭐⭐⭐⭐⭐⭐";
                      } else if  (el.qualificacion === 9) {
                        el.qualificacion = "⭐⭐⭐⭐⭐⭐⭐⭐⭐";
                      } else if  (el.qualificacion === 10) {
                        el.qualificacion = "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐";
                      }
                      return (

                        <div key={el.id}>
                          <CardReviews
                            calific={el.qualificacion}
                            opinion={el.description}
                          />

                        </div>
                      )
                    })
                  }
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}