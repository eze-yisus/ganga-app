import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import Nav from "../../Nav/NavBar/nav";
import UserSidebar from "./uSidebar";
import InfoUser from "../UserPanel/infoUser";
import s from "./user.module.css";
import { getAllOrders } from "../../Redux/Actions/actions";
import PurchaseList from "./uPurchaseList";

export default function UserPanel({user}) {

  const dispatch = useDispatch();

  const [productos, verProductos] = useState(false);
  const orders = useSelector((state) => state.orders);

  console.log("user", user);
  console.log("orders",orders);

  const userOrders = orders.filter(o => o.userId === user.id);
  console.log(userOrders, "uo")


  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);


  return (
    <div className="bg-gray-100">
      <Nav />
      {!productos ? (
        <div className={s.container}>
          <UserSidebar productos={productos} verProductos={verProductos} />
          <div className={s.body}>
          <InfoUser/>
          </div>
          
        </div>
      ) : (
        <div className={s.container}>
          <UserSidebar productos={productos} verProductos={verProductos} />
          <div className={s.body}>
            <PurchaseList orders={userOrders}/>
          </div>
        </div>
      )}
    </div>
  );
}
