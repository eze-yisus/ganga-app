import React from "react";
import s from "./vendor.module.css";

export default function VendedorSidebar({
  productos,
  verProductos,
  ventas,
  verVentas,
  compras,
  verCompras
}) {
  const toggle = () => {
    verProductos((productos = true));
    verVentas((ventas = false));
    verCompras((compras = false));
  };

  const Toggle = () => {
    verProductos((productos = false));
    verVentas((ventas = true));
    verCompras((compras = false));
  };

  const Togle = () => {
    verVentas((ventas = false));
    verProductos((productos = false));
    verCompras((compras = false));
  };

  const togle = () => {
    verVentas((ventas = false));
    verProductos((productos = false));
    verCompras((compras = true));
  };

  return (
    <div className={s.sidebar}>
      <div className="">
        <h3 className="p-10 pt-32 pl-16 text-3xl text-white font-bold">Opciones</h3>
        <ul>
          <li className="p-8 pr-48 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Togle} className="text-white">Mis Datos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={toggle} className="text-white">Mis Productos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Toggle} className="text-white">Mis Ventas</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={togle} className="text-white">Mis Compras</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
