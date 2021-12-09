import React from "react";
import s from "./admin.module.css";

export default function AdminWidgets({sales, products, today}) {

 
 let promedioS = sales / today;
 let promedioP = products / today;

  return (
    <div className={s.widgets}>
      <div className={s.widgetBox}>
        <div className="pb-3">
          <span className="text-xl opacity-90">Ventas</span>
        </div>
        <span className="text-3xl">${sales}</span>
        <div className="pt-5">
          <span className="text-base opacity-80"> ${promedioS}</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
      <div className={s.widgetBox}>
        <div className="pb-2">
          <span className="text-xl opacity-90">Productos</span>
        </div>
        <span className="text-2xl">{products}</span>
        <div>
          <span className="text-xs opacity-70">vendidos</span>
        </div>
        <div className="pt-2">
          <span className="text-base">{promedioP}</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
      <div className={s.widgetBox}>
        <div className="pb-3">
          <span className="text-xl opacity-90">Usuarios nuevos</span>
        </div>
        <span className="text-3xl">21.389</span>
        <div className="pt-5">
          <span className="text-base opacity-80">880</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
    </div>
  );
}
