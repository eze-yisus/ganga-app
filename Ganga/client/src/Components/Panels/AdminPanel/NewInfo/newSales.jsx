import React from "react";
import s from "../admin.module.css";

export default function NewSales({today, sales}) {

  let Sales = sales.filter(s => s.fecha === today);
  let transacciones = Sales.map(s => {
    return {
     total: s.total,
     productos: s.products.reduce((a,b) => a + b, 0),
     usuario: s.usuario[0].name + " " + s.usuario[0].surname
    }
  })
 

  return (
    <div className={s.newSalesContainer}>
      <div className="py-5 text-center">
        <h3 className="text-2xl"> Ultimas transacciones</h3>
      </div>
      <table className={s.newSale}>
        <tr>
          <th className="h-10">
            <span>Usuario</span>
          </th>
          <th>
            <span>Productos comprados</span>
          </th>
          <th>
            <span>Total</span>
          </th>
        </tr>
       { transacciones.map(t=> {
         return (
          <>
        <tr className={s.sale}>
          <td className="h-10">
            <span>{t.usuario}</span>
          </td>
          <td className="pb-4">
            <span> {t.productos} </span>
          </td>
          <td className="pb-4">
            <span> $ {t.total}</span>
          </td>
        </tr>
        </>
       )
    })
    }
      </table>
    </div>
  );
}
