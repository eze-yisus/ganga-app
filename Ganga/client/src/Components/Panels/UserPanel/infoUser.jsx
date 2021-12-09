import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate} from "react-router-dom";

import { updateUser, getUserInfoGoogle } from "../../Redux/Actions/actions";
import s from './user.module.css';

export default function InfoUser() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.getInfoGoogle);

    useEffect(() => {
        dispatch(getUserInfoGoogle());
      }, [dispatch]);

      const name = user.name
      const surname = user.surname
      const mail = user.mail
      // const birthdate = userfil.birthdate
      const address = user.address
  
      const [input, setInput] = useState({
          id: user.id,
          name: name,
          surname: surname,
          mail: mail,
          // birthdate: birthdate,
          address: address,
      })

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
        <h3 className="text-center text-3xl m-5 mt-20">Modificar tus datos</h3>
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


