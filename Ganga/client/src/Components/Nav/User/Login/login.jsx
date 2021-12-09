import React, { useEffect } from "react";
import LoginForm from "./loginForm";
import s from "./login.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoGoogle } from "../../../Redux/Actions/actions";
import foto from "../../../Resources/zapatilla.jpeg";
import fondo from "../../../Resources/fondo forms.jpeg";


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
        <LoginForm />
      </div>
    </div>
  );
}
