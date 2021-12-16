import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPencilSquare } from "react-icons/bs";
import Swal from 'sweetalert2';

import NewUsersChart from "./aCharts/NewUsers";
import s from "./admin.module.css";
import { deleteUser } from "../../Redux/Actions/actions";

export default function UserList({ users }) {
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "Nombre", headerName: "Nombre", width: 130 },
    { field: "Apellido", headerName: "Apellido", width: 160 },
    { field: "Correo", headerName: "Correo", width: 150 },
    {
      field: "Fecha",
      headerName: "Fecha de Nacimiento",
      type: "number",
      width: 150,
    },
    { field: "Dirección", headerName: "Zona", width: 150 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        let id = params.row.id;
        return (
          <>
            <Link to={"/user/" + id}>
              <button className={s.editar}><BsPencilSquare/></button>
            </Link>
            <button onClick={() => handleDelete(id)}>
              {" "}
              <TiDeleteOutline className={s.delete} />
            </button>
          </>
        );
      },
    },
  ];

  const Rows = users?.map((u) => {
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

  function handleDelete(id) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se borraran todos los datos del usuario.",
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
          'El usuario ha sido eliminado.',
          'success'
          )
          dispatch(deleteUser(id));
          setRows(rows.filter((i) => i.id !== id));
      }
    })
  }

  return (
    <div>
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Usuarios</h4>
      <Link to="/registrar">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <NewUsersChart />
      <div className={s.listaUsuarios}>
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
