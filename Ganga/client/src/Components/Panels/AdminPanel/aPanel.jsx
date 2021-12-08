import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../Nav/NavBar/nav";
import AdminSidebar from "./aSidebar";
import AdminWidgets from "./aWidgets";
import ActiveUsers from "./aCharts/ActiveUsers";
import UserList from "./userList";
import BrandNewUsers from "./NewInfo/brandNewUsers";
import NewSales from "./NewInfo/newSales";
import ProductList from "./productList";
import VendorList from "./vendorList";
import { getAllUsers, getProduct } from "../../Redux/Actions/actions";
import s from "./admin.module.css";

export default function AdminPanel() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [usuarios, verUsuarios] = useState(false);
  const [productos, verProductos] = useState(false);
  const [vendedores, verVendedores] = useState(false);
  const products = useSelector((state) => state.product);

  console.log("allUsers", allUsers)

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const vendors = allUsers?.filter((u) => u.seller === true);
  const users = allUsers?.filter((u) => u.seller === false);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!vendedores ? (
        <div>
          {!productos ? (
            <div>
              {!usuarios ? (
                <div className={s.container}>
                  <AdminSidebar
                    usuarios={usuarios}
                    verUsuarios={verUsuarios}
                    productos={productos}
                    verProductos={verProductos}
                    vendedores={vendedores}
                    verVendedores={verVendedores}
                  />
                  <div className={s.body}>
                    <h4 className="text-3xl text-center font-light font-serif p-5">
                      Info del Mes
                    </h4>
                    <AdminWidgets />
                    <ActiveUsers />
                    <div className={s.newInfo}>
                      <BrandNewUsers />
                      <NewSales />
                    </div>
                  </div>
                </div>
              ) : (
                <div  className={s.container}>
                  <AdminSidebar
                    usuarios={usuarios}
                    verUsuarios={verUsuarios}
                    productos={productos}
                    verProductos={verProductos}
                    vendedores={vendedores}
                    verVendedores={verVendedores}
                  />
                   <div className={s.body}>
                    <UserList users={users} />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div  className={s.container}>
              <AdminSidebar
                usuarios={usuarios}
                verUsuarios={verUsuarios}
                productos={productos}
                verProductos={verProductos}
                vendedores={vendedores}
                verVendedores={verVendedores}
              />
              <div className={s.body}>
                <ProductList  products={products}/>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div  className={s.container}>
          <AdminSidebar
            usuarios={usuarios}
            verUsuarios={verUsuarios}
            productos={productos}
            verProductos={verProductos}
            vendedores={vendedores}
            verVendedores={verVendedores}
          />
           <div className={s.body}>
            <VendorList vendors={vendors} />
          </div>
        </div>
      )}
    </div>
  );
}
