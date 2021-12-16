import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPencilSquare } from "react-icons/bs";
import Swal from 'sweetalert2';

import { deleteProduct, getCategories, getDbSubcategories, allReviews } from "../../Redux/Actions/actions";

import s from "../AdminPanel/admin.module.css";

export default function VendorProductList({ products, user }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)
    const subcategories = useSelector((state) => state.dbSubcategories)
    let myProducts = products.filter((p) => p.owner === user.id);
   
    useEffect(() => {
      dispatch(allReviews())
      dispatch(getCategories());
      dispatch(getDbSubcategories());
    },[dispatch]);

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
          'Tu producto ha sido eliminado.',
          'success'
          )
          dispatch(deleteProduct(id));
          setRows(rows.filter((i) => i.id !== id));
      }
    })
  }

  let Rows = myProducts?.map((p) => {
    const MyCategory = categories.filter(c => c.id === p.categoryId);
    const myCategory = MyCategory[0].name;
    const mySubcategory = subcategories.filter(s=> s.id === p.subcategoryId);
   
    let mySubCategory= "";
  if (mySubcategory?.length === 0  ) {
       mySubCategory = "no definida"
      
    } else {
       mySubCategory = mySubcategory[0].name;
  
    }
   
   
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$" + p.price,
      Categoria: myCategory,
      Subcategoria: mySubCategory,
      Stock: p.stock,
      Marca: p.brand,
    };
  });

  const [rows, setRows] = useState(Rows);

  return (
    <div>
      <h4 className="text-5xl text-center font-light pt-10 pb-12">
        Mis Productos
      </h4>
      <Link to="/create">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <div className={s.listaProductos}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </div>
  );
}

              