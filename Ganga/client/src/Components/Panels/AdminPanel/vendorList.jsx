import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

import RevenueChart from "./aCharts/Revenue";
import s from "./admin.module.css";
import { deleteUser } from "../../Redux/Actions/actions";

export default function VendorList({ vendors }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "Nombre", headerName: "Nombre", width: 130 },
    { field: "Apellido", headerName: "Apellido", width: 160 },
    { field: "Correo", headerName: "Correo", width: 150 },
    //{ field: "Productos", headerName: "Variedad de productos", type: "number", width: 150,},
    //{ field: "Stock", headerName: "stock", type: "number", width: 150 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        let id = params.row.id;
        return (
          <>
            <Link to={"/user/" + id}>
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
    dispatch(deleteUser(id));
    setRows(rows.filter((i) => i.id !== id));
  }

  const Rows = vendors?.map((u) => {
    return {
      id: u.id,
      Nombre: u.name,
      Apellido: u.surname,
      Correo: u.mail,
      Fecha: u.birthdate,
      Dirección: u.address,
    };
  });

  const [rows, setRows] = useState(Rows);

  return (
    <div>
      <h4 className="text-5xl text-center font-light pt-10 pb-12">
        Vendedores
      </h4>
      <Link to="/registrar">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <RevenueChart />
      <div className={s.listaVendedores}>
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
