import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from 'sweetalert2';
import { BsPencilSquare } from "react-icons/bs";

import { deleteProduct } from "../../Redux/Actions/actions";

import s from "../AdminPanel/admin.module.css";

export default function VendorProducts({ id }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  const vendorProducts = products.filter((p) => p.owner === id);
  const categories = useSelector((state) => state.categories)
  const subcategories = useSelector((state) => state.dbSubcategories)

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log("vp", vendorProducts);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "Nombre", headerName: "Nombre", width: 200 },
    { field: "Precio", headerName: "Precio", type: "number", width: 100 },
    { field: "Categoria", headerName: "Categoria", width: 200 },
    { field: "Subcategoria", headerName: "Subcategoria", width: 200 },
    { field: "Marca", headerName: "Marca", width: 200 },
    { field: "Stock", headerName: "Stock", type: "number", width: 70 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <>
            <Link to={"/product/" + id}>
              <button className={s.editar}> <BsPencilSquare/> </button>
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
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se borraran todos los datos del producto.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado.',
          'success'
          )
          dispatch(deleteProduct(id));
          setRows(rows.filter((i) => i.id !== id));
          window.location.reload();
      }
    })
  }

  let Rows = vendorProducts?.map((p) => {
    const MyCategory = categories.filter(c => c.id === p.categoryId);
    const myCategory = MyCategory[0].name;
    const mySubcategory = subcategories.filter(s=> s.id === p.subcategoryId);
    console.log("mySubcategory", mySubcategory);
   
    let mySubCategory= "";
  if (mySubcategory?.length === 0  ) {
       mySubCategory = "no definida"
      
    } else {
       mySubCategory = mySubcategory[0].name;
  
    }
   
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$ " + p.price,
      Categoria: myCategory,
      Subcategoria: mySubCategory,
      Stock: p.stock,
      Marca:p.brand
    };
  });

  const [rows, setRows] = useState(Rows);
  return (
    <div className={s.listaProductos}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>
  );
}
