import { useEffect } from "react";
import { compraMP } from "../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

export function MercadoPago({cart}) {
  const dispatch = useDispatch();
  const mp = useSelector((state) => state.mp);

  const compras = cart?.map(el => {
    return{
        title: el.name,
        quantity: Number(el.quantity),
        unit_price: Number(el.price),
    }
})

// console.log(compras);

  useEffect(() => {
    if (mp.length >= 10) {
      window.location.assign(mp);
    }
  }, [mp]);


  const onClick_compraMP = (e) => {
    dispatch(compraMP(compras));
  };
  return (
    <div>
      <button class="font-bold uppercase" onClick={onClick_compraMP}>Comprar</button>
    </div>
  );
}
