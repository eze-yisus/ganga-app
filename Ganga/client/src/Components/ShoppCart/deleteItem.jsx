import React, { useState, /*useEffect*/ } from "react";
import { /*useSelector,*/ useDispatch } from "react-redux";
import { decreseProduct } from "../Redux/Actions/actions";

export function DeleteItem({ idUser, idProd, quantP }) {
    const dispatch = useDispatch()
  
    function handleDeleteItem(e) {
    dispatch(
      decreseProduct({ id: idUser, item: { id: idProd }, cant: quantP, que: "-" })
    );
    window.location.reload();
  }

  return (
    <div>
      <button
        onClick={handleDeleteItem}
        class="text-gray-700 md:ml-4"
      >
        <small class="text-blue-500">Borrar item</small>
      </button>
    </div>
  );
}
