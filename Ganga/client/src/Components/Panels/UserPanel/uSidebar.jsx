import React from 'react';
import s from './user.module.css'

export default function UserSidebar({productos, verProductos}) {

    const toggle = () => {
        verProductos((productos = true));
      };

      const Toggle = () => {
        verProductos((productos = false));
      };

      
    return (
        <div className={s.sidebar}>
            <h3 className="p-10 pt-32 pl-16 text-3xl text-white font-bold">Opciones</h3>
            <ul>
                <li className="p-8  text-xl hover:bg-gray-400">
                    <button onClick={Toggle} className="text-white">Mis Datos</button>
                </li>
                <li className="p-8 text-xl hover:bg-gray-400">
                    <button onClick={toggle} className="text-white">Mis Compras</button>
                </li>
            </ul>
        </div>
    )
}
