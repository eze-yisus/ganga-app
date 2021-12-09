import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { successMail, updateStock, clearCart, postOrder } from "../Redux/Actions/actions";

export function SuccessLogicMp({ user, sum }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let productos = user.Cart?.map((el) => {
      return {
        id: el.id,
        cant: el.quantity,
      };
    });
    dispatch(updateStock(productos));
    dispatch(clearCart(user.id));
    dispatch(successMail());
    // DESPACHAR LA ORDEN 
    dispatch(postOrder({ info: "orden de prueba", userInfo: user.id, productInfo:user.Cart ,total:sum }))
    // console.log(user);
  }, []);



  return <></>;
}
