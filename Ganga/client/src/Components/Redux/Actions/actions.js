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
  POST_NEWSLETTER,
  DELETE_NEWSLETTER
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
    console.log("soy el arr ", arr)
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
    let response = await axios.post(URL + 'product/', payload)
    console.log("Soy respuesta de la actions", response.data)
    return response
  }
}

export function getSubcategory(payload) {
  console.log(payload)
  return {
    type: GET_SUBCATEGORIES,
    payload
  }
}
export function getAllUsers(){
  return async function (dispatch) {
    let user = await axios.get(URL + 'user')
    dispatch({
      type: GET_ALL_USERS,
      payload: user.data
    })
  }
}

export const postNewsletter = (payload) => { 
  // console.log('entrando a newsletter', payload) 
  return async function (dispatch){
      try {
          const res = await axios.post(`/newsletter/subscribe`, payload );
          dispatch({
            type: POST_NEWSLETTER,
            payload: res.data,
          });
      } catch (err) {
          console.log( err);
      }
  }
};

export const deleteNewsletter = (payload) => {  
  return async function (dispatch) {
      try {
          const res = await axios.post(`/newsletter/unsubscribe`, payload );
          dispatch({
            type: DELETE_NEWSLETTER,
            payload: res.data,
          });
      } catch (err) {
          console.log( err);
      }
  }
};

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
