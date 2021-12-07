import React from "react";
import s from './Pagination.module.css'

export default function Pagination({ elementsPerPage, allProduct, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProduct?.length / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={s.paginacion}>
      <ul >
        {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number} >
            <button
             className={s.btn}
              onClick={() => paginate(number)}
              >{number}
              </button>
         </li>
        ))}
      </ul>
    </nav>
  );
}
