// import { unstable_useId } from "@mui/utils";
import axios from "axios";

import {
  GET_PRODUCT,
  GET_INFO_GOOGLE,
  LOCAL_LOGIN,
  GET_PRODUCT_BY_NAME,
  FILTER_PRICE_BY_RANGE,
  ORDER_BY_PRICE,
  URL,
  SIGNUP,
  GET_USER,
  GET_CATEGORIES,
  GET_DETAIL_PRODUCT,
  USER_MESSAGE,
  FILTER_BY_SEARCH,
  GET_SUBCATEGORIES,
  GET_ALL_USERS,
  FILTER_BY_SUB_CATEGORY,
  GET_FILTER_BY_CATEGORY,
  GET_SUB_CAT_BY_NAME,
  PUT_USER,
  ADD_PRODUCT,
  DECRESE_PRODUCT,
  SUM_PRODUCT,
  CLEAR_CART,
  DELETE_ITEM,
  MERCADO_PAGO,
  MERCADO_PAGO2,
  SUCCESS_MAIL,
  FAIL_MAIL,
  DELETE_USER,
  DELETE_PRODUCT,
  LOGOUT,
  UPDATE_STOCK,
  POST_ORDER,
  GET_ALL_ORDERS
} from "./const";

export function getProduct() {
  return async function (dispatch) {
    let product = await axios.get("http://localhost:3001/product");
    dispatch({
      type: GET_PRODUCT,
      payload: product.data,
    });
  };
}

export function getProductByName(name) {
  return async function (dispatch) {
    try {
      let product = await axios.get(URL + "product?name=" + name);
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: product.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function filterPriceByRange(price1, price2) {
  return {
    type: FILTER_PRICE_BY_RANGE,
    price1,
    price2,
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

// action para obtener la sesion activa
export function getUserInfoGoogle(payload) {
  return async function (dispatch) {
    const arr = await axios.get(`${URL}sessionActive/`, {
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

export function getUser() {
  return async function (dispatch) {
    const info = await axios.get("http://localhost:3001/sessionActive");
    return dispatch({
      type: GET_USER,
      payload: info,
    });
  };
}

// action para crear un usuario
export function signUp(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}user/`, payload)
      .then((response) => {
        dispatch({
          type: SIGNUP,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function getCategories() {
  return async function (dispatch) {
    const info = await axios.get("http://localhost:3001/category");
    return dispatch({
      type: GET_CATEGORIES,
      payload: info.data,
    });
  };
}

export function getDetailsProduct(id) {
  return async (dispatch) => {
    try {
      let urlId = await axios.get(URL + "product/", {
        params: { id: id },
      });
      dispatch({
        type: GET_DETAIL_PRODUCT,
        payload: urlId.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function filterBySearch(payload) {
  return {
    type: FILTER_BY_SEARCH,
    payload,
  };
}

export function userMessage(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}userMessage/`, payload)
      .then((response) => {
        dispatch({
          type: USER_MESSAGE,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function postProducts(payload) {
  return async function (dispatch) {
    let response = await axios.post(URL + "product/", payload);
    return response;
  };
}

export function getSubcategory(payload) {
  return {
    type: GET_SUBCATEGORIES,
    payload,
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    let user = await axios.get(URL + "user");
    dispatch({
      type: GET_ALL_USERS,
      payload: user.data,
    });
  };
}

export function deleteUser(payload) {
  return async function (dispatch) {
    axios
      .delete(URL + "user?id=" + payload)
      .then((response) => {
        dispatch({
          type: DELETE_USER,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function deleteProduct(payload) {
  return async function (dispatch) {
    axios
      .delete(URL + "product?id=" + payload)
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function updateUser(payload) {
  return async function (dispatch) {
    await axios
      .put(`${URL}user`, payload)
      .then((response) => {
        dispatch({
          type: PUT_USER,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function filterBySubCat(payload) {
  return {
    type: FILTER_BY_SUB_CATEGORY,
    payload
  }
}

export function getFilterByCategory(payload) {
  console.log(payload)
  return {
    type: GET_FILTER_BY_CATEGORY,
    payload
  }
}

export function getSubCategoryByName(payload) {
  return {
    type: GET_SUB_CAT_BY_NAME,
    payload
  }
}

// export function geUserInfo(id){
//   return async (dispatch) => {
//     try {
//       let urlId = await axios.get(URL + 'User/info', {
//         params: { id: id }
//       })
//       dispatch({
//         type: GET_DETAIL_PRODUCT,
//         payload: urlId.data
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// mercadopago
export function compraMP(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}mercadoPago2`, payload,)
      .then((response) => {

        dispatch({
          type: MERCADO_PAGO,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function compraMP2(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}mercadoPago`, payload,)
      .then((response) => {

        dispatch({
          type: MERCADO_PAGO2,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function successMail(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}successMail`, payload, { withCredentials: true })
      .then((response) => {

        dispatch({
          type: SUCCESS_MAIL,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function failMail(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}failMail`, payload, { withCredentials: true })
      .then((response) => {

        dispatch({
          type: FAIL_MAIL,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

// cerrar sesion
export function logout() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/loginGoogle/logout", { withCredentials: true });
    dispatch({
      type: LOGOUT,
      payload: response.data,
    });
  };
}

// actualizar stock de los productos despues de la compra
export function updateStock(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}product/update`, payload)
      .then((response) => {

        dispatch({
          type: UPDATE_STOCK,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

// postear una orden de compra 
export function postOrder(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}order`, payload)
      .then((response) => {

        dispatch({
          type: POST_ORDER,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function getAllOrders() {
  return async function (dispatch) {
    let orders = await axios.get(URL + "order");
    dispatch({
      type: GET_ALL_ORDERS,
      payload: orders.data
    });
  };
}

// export function getAllUsers() {
//   return async function (dispatch) {
//     let user = await axios.get(URL + "user");
//     dispatch({
//       type: GET_ALL_USERS,
//       payload: user.data,
//     });
//   };
// }

// carrito
export function addProduct(payload) {
  // --------> payload {id:"id usario", item: {id:"id producto"}, que: >=1}({id:input, item:{id: input2}, que: input3})
  console.log("soy el payload de manipulateCart: ", payload); // payload para toda la accion (podes añadir el producto por primera vez, sumar o restar(modificar que o cant)) ---> {id:"id del usuario", item: {id:"id del producto"}, cant:"1"(SIEMPRE QUE QUERRAMOS AÑADIR AL CARRITO), que:"+ o -"(SI LO MANDO VACIO ME BORRA EL PRODUCTO)}
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/user/addCart",
      payload
    );
    dispatch({
      type: ADD_PRODUCT,
      payload: response.data,
    });
  };
}

// carrito
export function decreseProduct(payload) {
  // --------> payload {id:"id usario", item: {id:"id producto"}, que: >=1}({id:input, item:{id: input2}, que: input3})
  console.log("soy el payload de manipulateCart: ", payload); // payload para toda la accion (podes añadir el producto por primera vez, sumar o restar(modificar que o cant)) ---> {id:"id del usuario", item: {id:"id del producto"}, cant:"1"(SIEMPRE QUE QUERRAMOS AÑADIR AL CARRITO), que:"+ o -"(SI LO MANDO VACIO ME BORRA EL PRODUCTO)}
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/user/addCart",
      payload
    );
    dispatch({
      type: DECRESE_PRODUCT,
      payload: response.data,
    });
  };
}

// carrito
export function clearCart(payload) {
  console.log("soy el payload de clearCart: ", payload);
  return async function (dispatch) {
    const response = axios.put(
      `http://localhost:3001/user/clearCart?id=${payload}`
    );
    console.log("soy el response de clearCart: ", response);
    dispatch({
      type: CLEAR_CART,
      payload: response.data,
    });
  };
}

// carrito
export function deleteItem(payload) {
  console.log("soy el payload de deleteItem: ", payload);
  return async function (dispatch) {
    const response = axios.put(
      `http://localhost:3001/user/deleteProduct`, payload
    );
    console.log("soy el response de deleteItem: ", response);
    dispatch({
      type: DELETE_ITEM,
      payload: response.data,
    });
  };
}