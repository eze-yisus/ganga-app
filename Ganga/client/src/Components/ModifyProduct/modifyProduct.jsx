import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getDetailsProduct, getCategories, /*getSubcategory,*/ updateProduct, getDbSubcategories } from '../Redux/Actions/actions'
import s from './modifyProduct.module.css'
import Boton from '../Nav/boton'
import { IoMdArrowRoundBack } from "react-icons/io"

export default function ModifyProduct() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const Info = useSelector((state) => state.detailProduct);
    const categories = useSelector((state) => state.categories)
    // const getInfoGoogle = useSelector((state) => state.getInfoGoogle)
    const subcategories = useSelector((state) => state.dbSubcategories) // aca no hay subcategorias cargadas creo

    useEffect(() => {
        dispatch(getDetailsProduct());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDbSubcategories());
    }, [dispatch]);

    let info = Info?.filter((i) => i.id === id);
    info = info[0];


    const [input, setInput] = useState({
        name: info?.name,
        brand: info?.brand,
        description: info?.description,
        price: info?.price,
        status: info?.status,
        stock: info?.stock,
        image: info?.image,
        id: id,
        idCategory: info?.idCategory,
        idSubcategory: info?.idSubcategory,
    })
    console.log("inputs", )

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

    const [errors, /*setErrors*/] = useState({});

    // function validate(input) {
    //   let errors = {};
    //   if (!input.name) {
    //     errors.name = "Debe poner el nombre de su producto.";
    //   } else if (!input.price) {
    //     errors.price = "Debe poner el Precio de su Producto.";
    //   } else if (!input.description) {
    //     errors.description = "Debe tener una descripción";
    //   } else if (!input.stock) {
    //     errors.stock = "Debe igresar la cantidad de stock.";
    //   } else if (input.brand === "") {
    //     errors.brand = "Debe colocar la marca del producto";
    //   }else if (input.status === "") {
    //     errors.status = "Debe seleccionar la condicion del Producto";
    //   }
    //   return errors;
    // }
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect1(e) {
        setInput({
            ...input,
            idCategory: e.target.value,
        })
        e.preventDefault();
    }


    function handleSelect2(e) {
        setInput({
            ...input,
            idSubcategory: [e.target.value]
        })
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(input));
        // setInput({
        //     id: id,
        //     name: " ",
        //     brand: " ",
        //     description: " ",
        //     price: " ",
        //     status: " ",
        //     stock: " ",
        //     image: " ",
        //     idCategory: " ",
        //     idSubcategory: " ",
        // })
        navigate("/panel")
        //  window.location.reload();
    }

    return (
            <div className={s.body}>
                <Boton
                    parametro={"/panel"}
                    icono={<IoMdArrowRoundBack />}
                />
                <form onSubmit={submit} className={s.form} >
                    <div>
                        <h1 className="text-center bg-gray-400 text-white text-5xl" >Modificar datos del Producto</h1>
                    </div>

                    <div className={s.grid1}>
                        <div className={s.derec}>
                            <div className={s.name}>
                                <label >Nombre: </label>
                                <div>
                                    <input
                                        value={input.name}
                                        className="text-center bg-gray-700 text-white rounded"
                                        onChange={handleChange}
                                        type='text'
                                        name="name"
                                        // placeholder="Nombre del Producto"
                                    />
                                </div>
                                <div>
                                    {errors.name ? <p>{errors.name}</p> : null}
                                </div>
                            </div>
                            <div className={s.price}>
                                <label>Precio: </label>
                                <div>
                                    <input
                                        value={input.price}
                                        className="text-center bg-gray-700 text-white rounded"
                                        onChange={handleChange}
                                        type='Number'
                                        name="price"
                                        autoComplete="off"
                                        required />
                                </div>
                                <div>
                                    {errors.price ? <p>{errors.price}</p> : null}
                                </div>
                            </div>

                            <div className={s.product}>
                                <div>
                                <label>Tu producto es: </label>
                                </div>
                                <select
                                    className="text-center bg-gray-700 text-white rounded"
                                    name="status"
                                    onChange={handleChange} >
                                    <option value="" >Nuevo o Usado</option>
                                    <option value="nuevo">Nuevo</option>
                                    <option value="usado">Usado</option>
                                </select>
                                <div>
                                {errors.status ? <p>{errors.status}</p> : null}
                                </div>
                            </div>

                            {(input.status === "nuevo") ?
                                (<div className={s.stock}>  <label> Stock: </label>
                                    <input
                                        className="text-center bg-gray-700 text-white"
                                        type="number"
                                        name="stock"
                                        value={input.stock}
                                        onChange={handleChange}
                                        autoComplete="off" />
                                </div>) : <p></p>
                            }
                            {errors.stock ? <p>{errors.stock}</p> : null}
                        </div>

                        <div className={s.izq}>
                            <div className={s.grid2}>
                                <div>
                                    <div className={s.marca}>
                                        <label>Marca: </label>
                                        <div>
                                            <input
                                                className="text-center bg-gray-700 text-white rounded"
                                                type='text'
                                                name="brand"
                                                onChange={handleChange}
                                                value={input.brand}
                                                autoComplete="off" required />
                                        </div>
                                        <div>
                                            {errors.brand && (
                                                <p >{errors.brand}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className={s.descri}>
                                        <label>Descripción: </label>
                                        <div >
                                            <input
                                                className="text-justify bg-gray-700 text-white w-full h-20 rounded"
                                                value={input.description}
                                                type='text'
                                                onChange={handleChange}
                                                name="description"
                                                autoComplete="off" required />
                                        </div>
                                        <div>
                                            {errors.description && (
                                                <p >{errors.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                <div className={s.cate}>
                                    <div>
                                    <label > Categoria: </label>
                                    </div>
                                    <select className="text-center bg-gray-700 text-white rounded"
                                        name="idCategory"
                                        onChange={handleSelect1}  >
                                        {
                                            categories && categories?.map((p, i) => (
                                                <option key={i} value={p.id}>{p.name}</option>
                                            ))

                                        }
                                    </select>
                                </div>

                                <div>
                                    <div>
                                    <label > SubCategoria: </label>
                                    </div>
                                    <select className="text-center bg-gray-700 text-white rounded" name="idSubcategory" onChange={handleSelect2}>
                                        {(
                                            subcategories && subcategories?.map((p, i) => (
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
                                <div className={s.uno}>
                                    <label className="text-center bg-gray-700 text-white">Cargar una Nueva Imagen</label>
                                </div>
                                <div className="text-center bg-gray-700 text-white rounded">
                                    <input
                                        className={s.inputs}
                                        onChange={uploadImage}
                                        type="file"
                                        name="image"
                                        required="required"
                                        accept="image/png,image/jpeg"
                                    />
                                </div>
                                <div>
                                    {errors.image ? <p>{errors.image}</p> : null}
                                </div>
                                <div className={s.imgName}>{(input.image = image)}</div>
                                <label>
                                    {loading ? (
                                        <img className={s.imagenSubida} src={image} alt="No hay imagen" />
                                    ) : (
                                        <p>Aun no has subido una imagen</p>
                                    )}
                                </label>
                                <div className={s.btn}>
                                    <button className={s.crear} type='submit'>Modificar Producto</button>
                                </div>
                            </div>
                        </div>
                        <div className={s.grid6}>
                            <div className={s.nameProdc} >
                                <h1 className="text-center bg-gray-700 text-white">Imagen de tu producto</h1>
                            </div>
                            <div >
                                <img className={s.imgCargada} src={info?.image} alt="imagen del producto" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}