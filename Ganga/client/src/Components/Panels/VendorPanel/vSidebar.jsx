import React from "react";
import s from "./vendor.module.css";

export default function VendedorSidebar({
  productos,
  verProductos,
  ventas,
  verVentas,
}) {
  const toggle = () => {
    verProductos((productos = true));
    verVentas((ventas = false));
  };

  const Toggle = () => {
    verProductos((productos = false));
    verVentas((ventas = true));
  };

  const Togle = () => {
    verVentas((ventas = false));
    verProductos((productos = false));
  };

  return (
    <div className={s.sidebar}>
      <div className="">
        <h3 className="p-10 pt-32 pl-16 text-3xl opacity-60">Opciones</h3>
        <ul>
          <li className="p-8 pr-48 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Togle}>Tus Datos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={toggle}>Tus Productos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Toggle}>Tus Ventas</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
