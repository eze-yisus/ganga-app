import React, { useState } from "react";
import Nav from "../../Nav/NavBar/nav";
import VendedorSidebar from "./vSidebar";
import s from "./vendor.module.css";
import UserInfo from "../UserPanel/uInfo";

export default function VendorPanel() {
  const [datos] = useState(false);
  const [productos, verProductos] = useState(false);
  const [ventas, verVentas] = useState(false);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!ventas ? (
        <div>
          {!productos ? (
            <div>
              {!datos ? (
                <div className={s.container}>
                  <div>
                    <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                    />
                  </div>
                  <div className={s.body}>
                    <UserInfo />
                    <div className={s.newInfo}></div>
                  </div>
                </div>
              ) : (
                <div className={s.containerUsuarios}>
                  <div>
                  <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                    />
                  </div>
                  <div className={s.usuariosBody}>
                    tus productos
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={s.containerUsuarios}>
                  <div>
                  <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
                    />
                  </div>
                  <div className={s.usuariosBody}>
                    <h1 className="text-center pt-80">tus productos</h1>
                  </div>
                </div>
          )}
        </div>
      ) : (
        <div className={s.containerVendedores}>
          <div>
          <VendedorSidebar
                      productos={productos}
                      verProductos={verProductos}
                      ventas={ventas}
                      verVentas={verVentas}
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
