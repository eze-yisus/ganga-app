import React from 'react';
import s from './vendor.module.css';

export default function VendorSidebar({productos, verProductos}) {

    const toggle = () => {
        verProductos((productos = true));
      };

      const Toggle = () => {
        verProductos((productos = false));
      };

    return (
        <div className={s.sidebar}>
            <h3 className="p-10 pt-32 pl-16 text-3xl opacity-60">opciones</h3>
            <ul>
                <li className="p-8 pr-48 text-xl hover:bg-gray-400">
                    <button onClick={Toggle}>Datos</button>
                </li>
                <li className="p-8 pr-48 text-xl hover:bg-gray-400">
                    <button onClick={toggle}>Mis Productos</button>
                </li>
            </ul>
        </div>
    )
}
