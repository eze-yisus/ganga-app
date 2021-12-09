import React from 'react'
import s from './cardUsers.module.css';


export default function CardUser({name, surname, mail, address, birthdate} ) {
    return (
        <div className={s.card}>
            <div>
                <h1>{name} {surname}</h1>
            </div>
            <div>
                <h1>{mail}</h1>
            </div>
            <div>
                <h1>{birthdate}</h1>
            </div>
            <div>
                <h1>{address}</h1>
            </div>
        </div>
    )
}

 
