import React from "react";
import { Link } from "react-router-dom";
import s from "./card.module.css";

export default function Card({ image, name, price, id }) {
  return (
    <div className={s.container}>
      <div className={s.div1}>
        <img className={s.img} src={image} alt="image" />
      </div>
      <div className={s.name}>
        <h1>{name.toUpperCase()}</h1>
      </div>
      <div className={s.div2}>
        <h3>{price} USD</h3>
      </div>
      <div className={s.star}>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div>
        <Link to="/id">
          <button className={s.div3}>Detalles</button>
        </Link>
      </div>
    </div>
  );
}
