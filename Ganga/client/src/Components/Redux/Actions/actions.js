// import { unstable_useId } from "@mui/utils";
import axios from "axios";

import {
  GET_PRODUCT,
  GET_INFO_GOOGLE,
  LOCAL_LOGIN,
  GET_PRODUCT_BY_NAME,
  FILTER_PRICE_BY_RANGE,
  ORDER_BY_PRICE,
  // URL,
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
  GET_ALL_ORDERS,
  PRODUCTS_BY_NAME,
  POST_NEWSLETTER,
  DELETE_NEWSLETTER,
  ADD_REVIEW,
  ALL_REVIEWS,
  APPROVE_PRODUCT,
  PUT_PRODUCT,
  POST_PRODUCT,
  DB_SUBCATEGORIES
} from "./const";

export function getProduct() {
  return async function (dispatch) {
    let product = await axios.get(`/product`);
    dispatch({
      type: GET_PRODUCT,
      payload: product.data,
    });
  };
}

// carrito
export function addProduct(payload) {
  // --------> payload {id:"id usario", item: {id:"id producto"}, que: >=1}({id:input, item:{id: input2}, que: input3})
  // console.log("soy el payload de manipulateCart: ", payload); // payload para toda la accion (podes añadir el producto por primera vez, sumar o restar(modificar que o cant)) ---> {id:"id del usuario", item: {id:"id del producto"}, cant:"1"(SIEMPRE QUE QUERRAMOS AÑADIR AL CARRITO), que:"+ o -"(SI LO MANDO VACIO ME BORRA EL PRODUCTO)}
  return async function (dispatch) {
    const response = await axios.post(
      `/user/addCart`,
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
  // console.log("soy el payload de manipulateCart: ", payload); // payload para toda la accion (podes añadir el producto por primera vez, sumar o restar(modificar que o cant)) ---> {id:"id del usuario", item: {id:"id del producto"}, cant:"1"(SIEMPRE QUE QUERRAMOS AÑADIR AL CARRITO), que:"+ o -"(SI LO MANDO VACIO ME BORRA EL PRODUCTO)}
  return async function (dispatch) {
    const response = await axios.post(
      `/user/addCart`,
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
  // console.log("soy el payload de clearCart: ", payload);
  return async function (dispatch) {
    const response = axios.put(
      `/user/clearCart?id=${payload}`
    );
    // console.log("soy el response de clearCart: ", response);
    dispatch({
      type: CLEAR_CART,
      payload: response.data,
    });
  };
}

// carrito
export function deleteItem(payload) {
  // console.log("soy el payload de deleteItem: ", payload);
  return async function (dispatch) {
    const response = axios.put(
      `/user/deleteProduct`, payload
    );
    // console.log("soy el response de deleteItem: ", response);
    dispatch({
      type: DELETE_ITEM,
      payload: response.data,
    });
  };
}

export function getProductByName(name) {
  return async function (dispatch) {
    try {
      let product = await axios.get(`/product?name=${name}`);
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
    const arr = await axios.get(`/sessionActive/`, {
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
      .post(`/localLogin/`, payload, { withCredentials: true })
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
    const info = await axios.get(`/sessionActive`);
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
      .post(`/user/`, payload)
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
    const info = await axios.get(`/category`);
    return dispatch({
      type: GET_CATEGORIES,
      payload: info.data,
    });
  };
}

export function getDetailsProduct(id) {
  return async (dispatch) => {
    try {
      let urlId = await axios.get(`/product/`, {
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
      .post(`/userMessage/`, payload)
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
  // console.log('soy el payload de postProducts: ', payload)
  return async function (dispatch) {
    let response = await axios.post(`/product/`, payload);
    // console.log('soy el response de postProducts: ', response)
    dispatch({
      type: POST_PRODUCT,
      payload: response.data 
    })
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
    let user = await axios.get(`/user`);
    dispatch({
      type: GET_ALL_USERS,
      payload: user.data,
    });
  };
}

export function deleteUser(payload) {
  return async function (dispatch) {
    axios
      .delete(`/user?id=${payload}`)
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
      .delete(`/product?id=${payload}`)
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
      .put(`/user`, payload)
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

export function productsByName(payload) {
  console.log(payload)
  return {
    type: PRODUCTS_BY_NAME,
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
      .post(`/mercadoPago2`, payload,)
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
      .post(`/mercadoPago`, payload,)
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
      .post(`/successMail`, payload, { withCredentials: true })
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
      .post(`/failMail`, payload, { withCredentials: true })
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
    let response = await axios.get(`/loginGoogle/logout`, { withCredentials: true });
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
      .post(`/product/update`, payload)
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
      .post(`/order`, payload)
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
    let orders = await axios.get(`/order`);
    dispatch({
      type: GET_ALL_ORDERS,
      payload: orders.data
    });
  };
}

export const postNewsletter = (payload) => {
  // console.log('entrando a newsletter', payload) 
  return async function (dispatch) {
    try {
      const res = await axios.post(`/newsletter/subscribe`, payload);
      dispatch({
        type: POST_NEWSLETTER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const deleteNewsletter = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/newsletter/unsubscribe`, payload);
      dispatch({
        type: DELETE_NEWSLETTER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export function addReview(payload) {
  // console.log('soy el payload de addReview: ', payload)
  return async function(dispatch) {
    const response = await axios.post(`/review`, payload)
    // console.log('soy el response de addReview: ', response)
    dispatch({
      type: ADD_REVIEW,
      payload: response.data,
    })
  }
}

export function updateProduct(payload){
  // console.log(payload, "lkbldnflinwfdre")
return async function (dispatch) {
  await axios.put(`/product/` , payload)
  .then((response) => {
    dispatch({
      type:PUT_PRODUCT,
      payload: response.data
    })
  })
  .catch((error) => console.log(error));
}
}

export function allReviews() {
  return async function(dispatch) {
    const response = await axios.get(`/review`)
    // const response = await axios.get(`${URL}product/info?id=${payload}`, payload)
    // console.log('soy el response de allReviews: ', response)
    dispatch({
      type: ALL_REVIEWS,
      payload: response.data
    })
  }
}

export function approveProduct(payload) {
  // console.log('soy el payload de approveProduct: ', payload)
  return async function(dispatch) {
    const response = await axios.put(`/product/aprobar?id=${payload}`)
    // console.log('soy el response de approveProduct: ', response)
    dispatch({
      type: APPROVE_PRODUCT,
      payload: response.data
    })
  }
}

export function getDbSubcategories() {
  return async function(dispatch) {
    const response = await axios.get(`/subcategory`)
    dispatch({
      type: DB_SUBCATEGORIES,
      payload: response.data
    })
  }
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
