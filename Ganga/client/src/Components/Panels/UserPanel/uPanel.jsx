import React, { useState } from "react";

import Nav from "../../Nav/NavBar/nav";
import UserSidebar from "./uSidebar";
import UserInfo from "./uInfo";
import s from "./user.module.css";

export default function UserPanel() {
  const [productos, verProductos] = useState(false);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!productos ? (
        <div className={s.container}>
          <UserSidebar productos={productos} verProductos={verProductos} />
          <div className={s.body}></div>
          <UserInfo/>
        </div>
      ) : (
        <div className={s.container}>
          <UserSidebar productos={productos} verProductos={verProductos} />
          <div className={s.body}></div>
        </div>
      )}
    </div>
  );
}
