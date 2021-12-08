import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";

import { updateUser, getAllUsers } from "../../Redux/Actions/actions";
import s from './admin.module.css';


export default function UserInfo() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.allUsers)
    // const userfil = useSelector((state) => state.getInfoGoogle)
    const { id } = useParams()
    const userfil = allUsers.filter((el) => el.id === id)


    const navigate = useNavigate();



    console.log("user", userfil)

    const name = userfil[0]?.name
    const surname = userfil[0]?.surname
    const mail = userfil[0]?.mail
    // const birthdate = userfil.birthdate
    const address = userfil[0]?.address

    const [input, setInput] = useState({
        id: userfil[0]?.id,
        name: name,
        surname: surname,
        mail: mail,
        // birthdate: birthdate,
        address: address,
    })

    useEffect(() => {
        dispatch(updateUser(input))
        dispatch(getAllUsers())
    }, [dispatch])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(updateUser(input));
        navigate("/panel")
        window.location.reload();
    }

    return (
        <div>
            <div className="p-5">
                <Link to="/panel">
                    <button type="button">
                        {"<-Volver"}
                    </button>
                </Link>
            </div>
            <h3 className="text-center text-3xl">Modificar tus datos</h3>
            <form className="text-center" onSubmit={submit}>
                <div className="p-5">
                    <div>
                        <label> Nombre </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.name}
                        name="name"
                        placeholder="Nombre"
                    />
                </div>
                <div className="p-5">
                    <div>
                        <label> Apellido </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.surname}
                        name="surname"
                        placeholder="Apellido"
                    />
                </div>
                <div className="p-5">
                    <div>
                        <label> Correo </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.mail}
                        name="mail"
                        placeholder="Correo"
                    />
                </div>
                {/* <div>
                    <input
                        onChange={handleChange}
                        type="date"
                        value={input.birthdate}
                        name="birthdate"
                        placeholder="Fecha de Nacimiento"
                    />
                </div> */}
                <div className="p-5">
                    <div>
                        <label> Zona </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.address}
                        name="address"
                        placeholder="Zona"
                    />
                </div>
                <div className="p-5">
                    <button className={s.btnActualizar} type="submit">
                        Actualizar
                    </button>
                </div>

            </form>
        </div>
    )
}