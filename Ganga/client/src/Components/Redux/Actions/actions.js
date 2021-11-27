import axios from "axios";

<<<<<<< HEAD
import { GET_PRODUCT, GET_PRODUCT_BY_NAME, GET_USER } from './const'
=======
import { GET_PRODUCT, GET_INFO_GOOGLE, LOCAL_LOGIN, URL } from "./const";
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6

export function getProduct() {
  return async function (dispatch) {
    let product = await axios.get("http://localhost:3001/product");
    dispatch({
      type: GET_PRODUCT,
      payload: product.data,
    });
  };
}

// action para obtener la sesion activa
export function getUserInfoGoogle(payload) {
  return async function (dispatch) {
    const arr = await axios.get(URL + "sessionActive/", {
      withCredentials: true,
    });
    return dispatch({
      type: GET_INFO_GOOGLE,
      payload: arr.data,
    });
  };
}

// action para hacer el local login
export function localLogin(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}localLogin/`, payload, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: LOCAL_LOGIN,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}
<<<<<<< HEAD

export function getProductByName(name) {
    return async function (dispatch) {
        try {
            let product = await axios.get('http://localhost:3001/product?name=' + name)
            return dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: product.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function getUser(){
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/sessionActive")
        return dispatch({
            type: GET_USER,
            payload: info
        })
    }
}
=======
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6
