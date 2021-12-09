import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoGoogle } from "../../../Redux/Actions/actions";

import SignUpForm from "./signUpForm";
import foto from "../../../Resources/zapatillas.jpeg";
import fondo from "../../../Resources/fondo forms.jpeg";
import s from "./signup.module.css";

export default function Login() {
    ///////
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { getInfoGoogle } = useSelector((state) => state);
  
    ///////////////////////////////////////////////
    useEffect(() => {
      dispatch(getUserInfoGoogle());
    }, [dispatch]);
  
    console.log(getInfoGoogle.login);
  
    if (getInfoGoogle.login === true) {
      // history.push("/home ")
      navigate("/");
    }
    //////////////////////////////////////////////
  return (
    <div>
      <img className={s.fondo} src={fondo} alt="" />
      <div className={s.left}>
        <img className={s.foto} src={foto} alt="" />
      </div>
      <div className={s.right}>
        <SignUpForm />
      </div>
    </div>
  );
}