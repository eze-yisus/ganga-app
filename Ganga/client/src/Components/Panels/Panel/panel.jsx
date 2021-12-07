import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserPanel from '../UserPanel/uPanel';
import VendorPanel from "../VendorPanel/vPanel";
import AdminPanel from "../AdminPanel/aPanel";
import { getUserInfoGoogle } from "../../Redux/Actions/actions";


export default function Panel() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.getInfoGoogle);
  
    useEffect(() => {
        dispatch(getUserInfoGoogle());
      }, [dispatch]);
    return (
        <div>
     { user.login ? 
     <div>
        {
            user && user.admin ?
            <AdminPanel/> : null 
        }
        {
            !user.admin && user.seller ? 
            <VendorPanel/> : null
        }
        {
            !user.admin && !user.seller ? 
            <UserPanel/> : null
        }   
    </div>
    : <h1>cargando...</h1> }
        </div>
    )
}
