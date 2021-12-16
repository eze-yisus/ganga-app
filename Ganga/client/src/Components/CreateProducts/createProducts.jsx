import React, { useState, useEffect } from 'react'
import { getCategories, getDbSubcategories, getSubcategory, postProducts } from '../Redux/Actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io"
import Boton from "../Nav/boton";
import Swal from 'sweetalert2';
import s from './createProducts.module.css'

function validate(input) {
  let errores = {};
  if (!input.name) {

    errores.name = "Se requiere un Nombre"
  } else if (!input.mark) {

    errores.mark = 'Se requiere una Marca'
  } else if (!input.description) {

    errores.description = 'Se requiere una Descripción'
  } else if (input.price <= 0) {

    errores.price = 'Se requiere un precio mayor a 0'
  } else if (input.status) {
    errores.status = 'Se requiere un status'

  } else if (!input.image) {
    errores.image = 'Es obligatorio una imagen del prducto'

  } else if (!input.idCategory) {
    errores.idCategory = 'es obligatorio una Categoria'
  }
  return errores
}




export default function CreateProducts() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const getInfoGoogle = useSelector((state) => state.getInfoGoogle);
  const subcategories = useSelector((state) => state.dbSubcategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDbSubcategories());
  }, [dispatch]);

  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const navigate = useNavigate();


  const [input, setInput] = useState({
    name: " ",
    brand: " ",
    description: " ",
    price: " ",
    status: " ",
    stock: "1",
    image: " ",
    idUser: getInfoGoogle.id,
    idCategory: " ",
    idSubcategory: " ",
    approved: "false"
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  function handleSelect(e) {
    setInput({
      ...input,
      status: e.target.value,
    })
  }
  function handleSelect1(e) {
    setInput({
      ...input,
      idCategory: e.target.value,
    })
    e.preventDefault();
    dispatch(getSubcategory(e.target.value))
  }
  function handleSelect2(e) {
    setInput({
      ...input,
      idSubcategory: [e.target.value]
    })
  }

  // function handleSelectStock(e) {
  //   setInput({
  //     ...input,
  //     stock: [e.target.value]
  //   })
  // }
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "htnah6yo");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djrddcab5/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
  };





  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(input))
    setInput({
      name: " ",
      brand: " ",
      description: " ",
      price: " ",
      status: " ",
      stock: "1",
      image: " ",
      idUser: " ",
      idCategory: " ",
      idSubcategory: " ",
      approved: "false"
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu producto se ha subido con exito!',
      text: 'El Administrador debe aprobar tu publicacion para que sea visible para todos.',
      showConfirmButton: false,
      timer: 3000
    })
    navigate("/panel");
    
    // alert("Producto Subido con exito, esperando aprobacion del Administrador");
  }


  return (
    <div className={s.body}>
      <Boton
        parametro={"/panel"}
        icono={<IoMdArrowRoundBack />} />

      <form className={s.form} onSubmit={handleSubmit}>

        <div className={s.grid1}>
          <div className={s.derec}>
            <div className={s.name}>
              <label >Nombre:</label>
              <div>
                <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='text' name="name" value={input.name} autoComplete="off" required />
                {error.name && (
                  <p>{error.name}</p>
                )}
              </div>
            </div>
            <div className={s.price}>
              <label>Precio: </label>
              <div>
                <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='Number' name="price" value={input.price} autoComplete="off" required />
                {error.price && (
                  <p >{error.price}</p>
                )}
              </div>
            </div>

            <div className={s.product}>
              <label>Tu producto es:</label>
              <select className="text-center bg-gray-700 text-white" name="status" value={input.status} onChange={handleSelect}>
                <option value="" >Nuevo o Usado</option>
                <option value="nuevo">Nuevo </option>
                <option value="usado">Usado </option>
              </select>
            </div>

            {(input.status === "nuevo") ?
              (<div className={s.stock}>  <label>Stock: </label>
                <input className="text-center bg-gray-700 text-white" onChange={handleChange} type="number" name="stock" value={input.stock} autoComplete="off" />
              </div>) : (<p></p>)
            }
          </div>

          <div className={s.izq}>
            <div className={s.grid2}>
              <div>
                <div className={s.marca}>
                  <label>Marca: </label>
                  <div>
                    <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='text' name="brand" value={input.brand} autoComplete="off" required />
                    {error.mark && (
                      <p >{error.mark}</p>
                    )}
                  </div>
                </div>

                <div className={s.descri}>
                  <label>Descripción: </label>
                  <div >
                    <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='text' name="description" value={input.description} autoComplete="off" required />
                    {error.description && (
                      <p >{error.description}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className={s.cate}>
                <label > Categoria: </label>
                <select className="text-center bg-gray-700 text-white" name="idCategory" onChange={handleSelect1} >
                  {
                    categories.map((p, i) => (
                      <option key={i} value={p.id}>{p.name}</option>
                    ))

                  }
                </select>
              </div>

              <div>
                <label > SubCategoria: </label>
                <select className="text-center bg-gray-700 text-white" name="idSubcategory" onChange={handleSelect2} >
                  {(
                    subcategories && subcategories.map((p, i) => (
                      <option key={i} value={p.id}>{p.name}</option>
                    ))
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>



        <div className={s.grid5}>
          <div className={s.grid3}>
            <div>
              <div className="pt-0 pb-2">
                <label>Imagen</label>
              </div>
              <div className="text-center bg-gray-700 text-white">
                <input

                  className={s.inputs}
                  onChange={uploadImage}
                  type="file"
                  name="image"
                  required="required"
                  accept="image/png,image/jpeg"
                />
                {error.image ? <p>{error.image}</p> : null}
              </div>
              <div className={s.imgName}>{(input.image = image)}</div>
              <label>
                {loading ? (
                  <img className={s.imagenSubida} src={image} alt="No hay imagen" />
                ) : (
                  <p>Aun no has subido una imagen</p>
                )}
              </label>
            </div>
            <div className="p-5">
              <button className={s.crear} type='submit'>Publicar Producto</button>
            </div>
          </div>
        </div>
      </form>


    </div >
  )

}