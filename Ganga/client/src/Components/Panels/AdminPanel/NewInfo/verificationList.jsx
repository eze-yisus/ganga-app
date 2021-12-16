import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";
import { BsFillCheckCircleFill } from "react-icons/bs"

import s from "../admin.module.css";
import { approveProduct, deleteProduct, deleteProduct2, getProduct} from "../../../Redux/Actions/actions";
import { BsPencilSquare } from "react-icons/bs";

export default function VerificationList({ products }) {
    console.log("products", products);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const subcategories = useSelector((state) => state.dbSubcategories);
  
    // let newProducts = products.filter((p) => p.approved === false);
    // console.log("soy products: ", products);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "Nombre", headerName: "Nombre", width: 200 },
    { field: "Precio", headerName: "Precio", type: "number", width: 100 },
    { field: "Categoria", headerName: "Categoria", width: 160 },
    { field: "Subcategoria", headerName: "Subcategoria", width: 160 },
    { field: "Marca", headerName: "Marca", width: 100 },
    { field: "Stock", headerName: "Stock", type: "number", width: 70 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <>
            <button className={s.check} onClick={() => handleSubmit(id)}>
            <BsFillCheckCircleFill/>
            </button>

            <button onClick={() => handleDelete(id)}>
              {" "}
              <TiDeleteOutline className={s.delete} />{" "}
            </button>
          </>
        );
      },
    },
  ];

  function handleSubmit(id) {
    console.log("aprobadoo")
    // e.preventDefault();
    dispatch(approveProduct(id));
    console.log('soy el id del handleSubmit:', id)
    // dispatch(deleteProduct2(id));
    setRows(rows.filter((i) => i.id !== id));
    dispatch(getProduct());
    // window.location.reload();

  }

// page will reload whenever data is updated.
  function handleDelete(id) {
    setRows(rows.filter((i) => i.id !== id));
    dispatch(deleteProduct(id));
     window.location.reload();
  }

  let Rows = products?.map((p) => {
    if (p.categories === null) {
      p.categories = categories.filter(c => c.id === p.categoryId);
      p.categories = p.categories[0].name;
    } 
   
    if (p.subcategoryId > 0) {
      let sub = subcategories.filter(s=> s.id === p.subcategoryId);
      console.log("sub1", sub)
      sub = sub[0]?.name
      p.subcategories = sub;
      console.log("sub2", sub)
    } 

    if (p.brand === null || p.brand === undefined) {
      p.brand = "indefinida"
    }
  
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$" + p.price,
      Categoria: p.categories,
      Subcategoria: p.subcategories,
      Stock: p.stock,
      Marca: p.brand
    };
  });

  
  const [rows, setRows] = useState(Rows);
  console.log("rows", rows)

  return (
    <div>
      <h1 className="text-3xl p-8"> Productos a revisar:</h1>

      <div className={s.listaProductos}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          // checkboxSelection
        />
      </div>
    </div>
  );
}
