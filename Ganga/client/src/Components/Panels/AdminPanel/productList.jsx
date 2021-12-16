import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPencilSquare } from "react-icons/bs";
import Swal from 'sweetalert2';

import { deleteProduct, getDbSubcategories} from "../../Redux/Actions/actions";
import ProductsChart from "./aCharts/Products";
import s from "./admin.module.css";

export default function ProductList({products}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const subcategories = useSelector((state) => state.dbSubcategories);
  products = products.filter(p => p.approved === true);

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
          'El producto ha sido eliminado.',
          'success'
          )
          dispatch(deleteProduct(id));
          setRows(rows.filter((i) => i.id !== id));
      }
    })
  }

  let Rows = products?.map((p) => {
    if (p.categories === null) {
      p.categories = categories.filter(c => c.id === p.categoryId);
      p.categories = p.categories[0].name;
    } 
   
    if (p.subcategoryId > 0) {
      let sub = subcategories.filter(s=> s.id === p.subcategoryId);
      let Sub = sub[0]?.name
      p.subcategories = Sub;
    } 

    if (p.brand === null || p.brand === undefined) {
      p.brand = "Ganga"
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
          // checkboxSelection
        />
      </div>
    </div>
  );
}

