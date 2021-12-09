import React, { useState } from "react";
import Nav from "../../Nav/NavBar/nav";
import VendedorSidebar from "./vSidebar";
import s from "./vendor.module.css";
import InfoUser from "../UserPanel/infoUser";

export default function VendorPanel() {
  const [datos] = useState(false);
  const [productos, verProductos] = useState(false);
  const [ventas, verVentas] = useState(false);
  const [compras, verCompras] = useState(false)

  return (
    <div className="bg-gray-100">
      <Nav />
      {!ventas ? (
        <div>
          {!productos ? (
            <div>
              {!compras ? (
                <div className={s.container}>
                  <div>
                    <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                      compras={compras}
                      verCompras={verCompras}
                    />
                  </div>
                  <div className={s.body}>
                    <InfoUser/>
                  </div>
                </div>
              ) : (
                <div className={s.container}>
                  <div>
                  <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                      compras={compras}
                      verCompras={verCompras}
                    />
                  </div>
                  <div className={s.usuariosBody}>
                    tus compras
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={s.container}>
                  <div>
                  <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                      compras={compras}
                      verCompras={verCompras}
                    />
                  </div>
                  <div className={s.usuariosBody}>
                    <h1 className="text-center pt-80">tus productos</h1>
                  </div>
                </div>
          )}
        </div>
      ) : (
        <div className={s.container}>
          <div>
          <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                      compras={compras}
                      verCompras={verCompras}
                    />
          </div>
          <div className={s.vendedoresBody}>
          <h1 className="text-center pt-80">tus ventas</h1>
          </div>
        </div>
      )}
    </div>
  );
}
