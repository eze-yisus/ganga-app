import { useEffect } from "react";
import { compraMP2, addProduct } from "../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

export function MercadoPago2({ title, unit_price, id, item_id }) {
  const dispatch = useDispatch();
  const mp2 = useSelector((state) => state.mp2);

  

  let objMp = {
    title: title,
    unit_price: Number(unit_price),
    quantity: 1,
  };

  // console.log("objeto MP " + objMp.unit_price);

  useEffect(() => {
    if (mp2?.length >= 10) {
      window.location.assign(mp2);
    }
  }, [mp2]);

  const onClick_compraMP2 = (e) => {
    dispatch(
      addProduct({ id: id, item: { id: item_id }, cant: 1, que: "+" })
    );
    dispatch(compraMP2(objMp));
  };



  return (
    <div>
      <button onClick={onClick_compraMP2}> Comprar </button>
    </div>
  );
}
