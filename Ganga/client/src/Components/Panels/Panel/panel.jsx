import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserPanel from "../UserPanel/uPanel";
import VendorPanel from "../VendorPanel/vPanel";
import AdminPanel from "../AdminPanel/aPanel";
import { getUserInfoGoogle } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
import User from "../../Nav/User/user";
import download from "../../Resources/cargando.gif";

export default function Panel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getInfoGoogle);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);
  return (
    <div>
      {user && user.login ? (
        <div>
          <div className="absolute top-5 right-20 z-50 mr-10 w-28">
            <User />
          </div>
          <Nav />
        </div>
      ) : null}
      {user?.login && user?.login ? (
        <div>
          {user && user.admin ? <AdminPanel /> : null}
          {!user.admin && user.seller ? <VendorPanel user={user} /> : null}
          {!user.admin && !user.seller ? <UserPanel user={user} /> : null}
        </div>
      ) : (
          // <h1>Cargando...</h1>
        <div className="download">
            <img src={download} alt="" />
          </div>
      )}
    </div>
  );
}
