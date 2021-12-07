import React from "react";
import { Link } from "react-router-dom";
import s from './card.module.css'

export default function Card({ image, name, price, id }) {
    return (
        < div className={s.container}>
            <Link to={`/${id}`}>
                <div className={s.div1}>
                    <img className={s.img} src={image} alt={`imagen de ${name}`} />
                </div>

                <div className={s.name}>
                    <h1>{name.toUpperCase()}</h1>
                </div>

                <div className={s.div2}>
                    <h3>$ {price} </h3>
                </div>

                <div className={s.star}>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </Link>


        </div>
    )
}
