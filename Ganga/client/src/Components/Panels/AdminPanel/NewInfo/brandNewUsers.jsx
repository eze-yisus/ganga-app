import React from "react";
import { Link } from "react-router-dom";

import s from "../admin.module.css";


export default function BrandNewUsers({today, users}) {

  let newUsers = users.filter(u => u.createdAt.slice(8, 10) === today);
  return (
    <div className={s.newUsersContainer}>
      <div className="py-5 text-center">
        <span className="text-2xl -ml-8">Usuarios nuevos</span>
      </div>
      <ul className="flex flex-wrap align-center items-center justify-center">
      {
        newUsers.map(u=> {
          return (

        <li className={s.newUser}>
        <Link to={"/user/" + u.id}>
          <div className=" text-center">
            <div className="pt-5 text-base">{u.name + " " + u.surname}</div>
            <div className="pt-1 text-base">{u.mail}</div>
            <div className="pt-1 text-base">{u.address}</div>
            <div className="pt-1 text-base">{u.admin? "Admin": u.seller? "Vendedor" : "Usuario"}</div>
          </div>
          </Link>
        </li>
          )
        })
      }
      </ul>
    </div>
  );
}
