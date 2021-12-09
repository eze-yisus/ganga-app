import React, { useState, /*useEffect*/ } from "react";
import { /*useSelector,*/ useDispatch } from "react-redux";
import { addProduct, decreseProduct, /*getDetailsProduct*/ } from "../Redux/Actions/actions";
import s from "./counterInput.module.css";

export default function CounterInput({ idUser, idProd, quantP, stock }) {
  const dispatch = useDispatch();

  // console.log("Soy el idUs:", idUser)
  // console.log("Soy el idProd:", idProd)
  // console.log("Soy el Q:", quantP)
  // console.log("Soy el stock:", stock)

  const [cant, setCant] = useState(quantP);

  if (cant !== quantP) {
    window.location.reload();
  } // setTimeout para que espere la respuesta del back

  console.log("soy el cant:" + cant)

  if(cant > stock){
    decrement()
  }

  function decrement(e) {
    if (cant > 1) {
      setCant(cant - 1);
      dispatch(
        decreseProduct({ id: idUser, item: { id: idProd }, cant: 1, que: "-" })
      );
    }
  }

  function increment(e) {
    //if (cant < 7) {
    if (cant < stock) {
      setCant(cant + 1);
      dispatch(
        addProduct({ id: idUser, item: { id: idProd }, cant: 1, que: "+" })
      );
    } else {
      alert("No se puede superar la cantidad maxima de Stock");
    }
  }


  return (
    <div class="custom-number-input h-10 w-32">
      <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={decrement}
          class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>
        <div
          className={s.countInp}
          class="outline-none focus:outline-none text-center w-6 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
        >
          {cant}
        </div>
        <button
          onClick={increment}
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
