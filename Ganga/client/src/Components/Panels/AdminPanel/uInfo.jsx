import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../../Nav/NavBar/nav";
import { IoMdArrowRoundBack } from "react-icons/io";
import Boton from "../../Nav/boton";
import User from "../../Nav/User/user";


import { updateUser, getAllUsers, getUserInfoGoogle} from "../../Redux/Actions/actions";
import s from './admin.module.css';
import UserPurchaseList from "./userPurchaseList";
import VendorProducts from "./vendorProducts";


export default function UserInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allUsers = useSelector((state) => state.allUsers);
    const orders = useSelector((state) => state.orders);
    const user = useSelector((state) => state.getInfoGoogle);

    useEffect(() => {
      dispatch(getUserInfoGoogle());
    }, [dispatch]);
  
    
    const { id } = useParams()
    const userfil = allUsers.filter((el) => el.id === id)
   
    

    
    const name = userfil[0]?.name;
    const surname = userfil[0]?.surname;
    const mail = userfil[0]?.mail;
    const cellphone = userfil[0]?.cellphone;
    const birthdate = userfil[0]?.birthdate;
    const address = userfil[0]?.address;
    const country = userfil[0]?.country;
    const province = userfil[0]?.province;
    const cp = userfil[0]?.cp;
    const seller = userfil[0]?.seller;
    const officialStore = userfil[0]?.officialStore;
    // const image = userfil[0]?.image;

    const [input, setInput] = useState({
        id: userfil[0]?.id,
        name: name,
        surname: surname,
        mail: mail,
        cellphone: cellphone,
        address: address,
        birthdate: birthdate,
        country: country,
        province: province,
        cp: cp,
        seller: seller,
        officialStore: officialStore
        // image: image,
    })


    useEffect(() => {
        dispatch(updateUser(input))
        dispatch(getAllUsers())
    }, [dispatch, input])

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
        
    }

    return (
        <div>
              {user && user.login ? (
        <div>
          <div className="absolute top-5 right-20 z-50 mr-10 w-28">
            <User />
          </div>
          <Nav />
        </div>
      ) : null}
            <div className="absolute top-18 p-5">
                <Link to="/panel">
                <Boton
      parametro={"/panel"}
      icono={<IoMdArrowRoundBack />} />
                </Link>
            </div>
            <h3 className="text-center text-3xl pt-5">Modificar tus datos</h3>
            <form className="text-center" onSubmit={submit}>


        <div class="flex items-center justify-center content-center">
                <div className="px-1 py-4">
                    <div>
                        <label> Nombre </label>
                    </div>
                    <input className="w-60 text-center bg-gray-700 text-white rounded"
                        onChange={handleChange}
                        type="text"
                        value={input.name}
                        name="name"
                        placeholder="Nombre"
                        />
                </div>
                <div className="px-1 py-4">
                    <div>
                        <label> Apellido </label>
                    </div>
                    <input className="w-60 text-center bg-gray-700 text-white rounded"
                        onChange={handleChange}
                        type="text"
                        value={input.surname}
                        name="surname"
                        placeholder="Apellido"
                        />
                </div>
                        </div>


                        <div class="flex items-center justify-center content-center">
                        <div className="px-8 py-4">
                    <div>
                        <label> Fecha de Nacimiento </label>
                    </div>
                    <input className="w-60 text-center rounded bg-gray-700 text-white h-6"
                        onChange={handleChange}
                        type="date"
                        value={input.birthdate}
                        name="birthdate"
                        placeholder="Fecha de Nacimiento"
                    />
                </div>
                <div className="px-8 py-4">
                    <div>
                        <label> Número de celular </label>
                    </div>
                    <input className="w-60 text-center rounded bg-gray-700 text-white appearance-none"
                        onChange={handleChange}
                        type="number"
                        value={input.cellphone}
                        name="cellphone"
                        placeholder="Número de celular"
                    />
                </div>
                <div className="px-8 py-4">
                    <div>
                        <label> Correo Electronico </label>
                    </div>
                    <input className="w-60 text-center rounded bg-gray-700 text-white"
                        onChange={handleChange}
                        type="mail"
                        value={input.mail}
                        name="mail"
                        placeholder="Correo"
                    />
                </div>
                        </div>



        <div class="flex items-center justify-center content-center">
        <div className="px-8 py-4">
                    <div>
                        <label> País </label>
                    </div>
                    <input className="w-60 rounded text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.country}
                        name="country"
                        placeholder="País"
                    />
                </div>
                <div className="px-8 py-4">
                    <div>
                        <label> Departamento </label>
                    </div>
                    <input className="w-60 rounded text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.province}
                        name="province"
                        placeholder="Departamento"
                    />
                </div>
                <div className="px-8 py-4">
                    <div>
                        <label> Código Postal </label>
                    </div>
                    <input className="w-60 rounded text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.cp}
                        name="cp"
                        placeholder="Código postal"
                    />
                </div>
        </div>                
                
                <div className="px-8 py-4">
                    <div>
                        <label> Dirección </label>
                    </div>
                    <input className="w-96 rounded text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.address}
                        name="address"
                        placeholder="Dirección"
                    />
                </div>
                
                <div className="px-8 py-4">
                    <div>
                        <label> Tienda Oficial </label>
                    </div>
                    <select className="text-center bg-gray-700 text-white rounded" name="officialStore" onChange={handleChange}>
                        <option selected="true" disabled="disabled" >Seleccionar </option>
                        <option value="true" >true </option>
                        <option value="false" >false </option>
                    </select>
                </div>
                <div className="px-8 py-4">
                    <div>
                        <label> Permisos </label>
                    </div>
                    <select className="text-center bg-gray-700 text-white rounded" name="seller" onChange={handleChange}>
                        <option selected="" disabled="disabled" >Seleccionar </option>
                        <option value="true" >Vendedor </option>
                        <option value="false" >Usuario </option>
                    </select>
                </div>
                <div className="px-8 py-4">
                    <button className={s.btnActualizar} type="submit">
                        Actualizar
                    </button>
                </div>

            </form>
            {!seller?  <UserPurchaseList users={allUsers} orders={orders}/> : <VendorProducts id={id}/>}
        </div>
    )
}