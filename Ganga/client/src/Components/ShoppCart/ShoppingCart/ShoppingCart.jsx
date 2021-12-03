import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Offcanvas } from "react-bootstrap";
import ItemsCart from "../ItemsCart/ItemsCart";
import { clearCart, updateCart } from "../../redux/actions/index";
import style from "./ShoppingCart.module.css";
import { emptyCart } from "../../cart/index";
import { isAuthorized, decodeToken } from "../../utils/index";
import { useHistory, useLocation } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [clear, setClear] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  const productsCart = useSelector(
    (state) => state.carritoReducer.productsCarrito
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
  }, [cartFromLocalStorage]);

  useEffect(() => {
    if (clear) {
      localStorage.setItem("cart", JSON.stringify([]));
      dispatch(updateCart([]));
    }
    return () => {
      setClear(false);
      localStorage.setItem("cart", JSON.stringify([]));
    };
  }, [dispatch, clear]);

  const handleClearCart = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    setClear(true);
    const validate = isAuthorized();
    if (validate) {
      const user = decodeToken();
      const username = user.username;
      emptyCart({ username: username });
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    history.push("/checkout");
    handleClose();
  };

  const desc = productsCart?.reduce((acc, curr) => {
    let result = 0;
    if (curr.Carrito_Products) {
      if (curr.offer >= curr.categories?.[0].offer) {
        result =
          acc +
          parseInt(
            curr.price - Math.round(parseInt(curr.price * curr.offer) / 100)
          ) *
            curr.Carrito_Products.quantity;
      } else if (curr.offer < curr.categories?.[0].offer) {
        result =
          acc +
          parseInt(
            curr.price -
              Math.round(
                parseInt(curr.price * curr.categories?.[0].offer) / 100
              )
          ) *
            curr.Carrito_Products.quantity;
      } else {
        result = acc + parseInt(curr.price) * curr.Carrito_Products.quantity;
      }
    }
    if (curr.quantity) {
      if (curr.offer >= curr.categories?.[0].offer) {
        result =
          acc +
          parseInt(
            curr.price - Math.round(parseInt(curr.price * curr.offer) / 100)
          ) *
            curr.quantity;
      } else if (curr.offer < curr.categories?.[0].offer) {
        result =
          acc +
          parseInt(
            curr.price -
              Math.round(
                parseInt(curr.price * curr.categories?.[0].offer) / 100
              )
          ) *
            curr.quantity;
      } else {
        result = acc + parseInt(curr.price) * curr.quantity;
      }
    }
    return result;
  }, 0);

  const totalQuantity = productsCart?.reduce((acc, curr) => {
    const result = curr.Carrito_Products
      ? acc + curr.Carrito_Products.quantity
      : acc + curr.quantity;
    return result;
  }, 0);

  const format = (num) => {
    num = num + "";
    var str = "";
    for (var i = num.length - 1, j = 1; i >= 0; i--, j++) {
      if (j % 3 === 0 && i !== 0) {
        str += num[i] + ".";
        continue;
      }
      str += num[i];
    }
    return str.split("").reverse().join("");
  };

  return (
    <>
      <div
        className={
          path === "category" ||
          path === "home" ||
          path === "product" ||
          path === "search"
            ? null
            : style.hidden
        }
      >
        <button onClick={toggleShow} className={style.carrito}>
          <BsBag className={style.bag} />
        </button>
        {productsCart.length !== 0 && (
          <div className={style.itemcarrito}>
            <div className={style.qitems}>{totalQuantity}</div>
          </div>
        )}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          scroll="true"
          backdrop="true"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className={style.title}>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ItemsCart />
            {cartFromLocalStorage.length !== 0 ? (
              <div className={style.container}>
                <div className={style.continue}>
                  <Button
                    className={style.shop}
                    variant="dark"
                    type="submit"
                    onClick={() => handleClose()}
                  >
                    Seguir comprando
                  </Button>
                </div>
                <div className={style.bntcontainer}>
                  <div className={style.total}>total ${format(desc)}</div>
                  <div>
                    <Button
                      className={style.vaciar}
                      onClick={(e) => handleClearCart(e)}
                      variant="dark"
                      type="submit"
                    >
                      vaciar carrito
                    </Button>
                  </div>
                </div>

                <div>
                  <Button
                    className={style.checkout}
                    variant="dark"
                    type="submit"
                    onClick={(e) => {
                      handleCheckout(e);
                    }}
                  >
                    terminar compra
                  </Button>
                </div>
              </div>
            ) : (
              <div className={style.add}>
                el carrito esta vacio
                <Button
                  className={style.shop}
                  variant="dark"
                  type="submit"
                  onClick={() => handleClose()}
                >
                  agregar productos
                </Button>
              </div>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default ShoppingCart;
