import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";

import { deleteProduct, getProduct } from "../../Redux/Actions/actions";
import ProductsChart from "./aCharts/Products";
import s from "./admin.module.css";

export default function ProductList({products}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  



  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "Nombre", headerName: "Nombre", width: 200 },
    { field: "Precio", headerName: "Precio", type: "number", width: 100 },
    { field: "Categoria", headerName: "Categoria", width: 160 },
    { field: "Stock", headerName: "Stock", type: "number", width: 100 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <>
            <Link to={"/product/" + id}>
              <button className={s.editar}> edit </button>
            </Link>
            <button onClick={() => handleDelete(id)}>
              {" "}
              <TiDeleteOutline className={s.delete} />{" "}
            </button>
          </>
        );
      },
    },
  ];

  function handleDelete(id) {
    dispatch(deleteProduct(id));
    setRows(rows.filter((i) => i.id !== id));
  }

  let Rows = products?.map((p) => {
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$" + p.price,
      Categoria: p.categories,
      Stock: p.stock,
    };
  });

  const [rows, setRows] = useState(Rows);

  return (
    <div>
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Productos</h4>
      <Link to="/create">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <ProductsChart />
      <div className={s.listaProductos}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

//DELETE: http://localhost:3001/product?id=
