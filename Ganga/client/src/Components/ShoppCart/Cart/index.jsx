import axios from "axios";
import {
  ADD_OR_EDIT_CART,
  REMOVE_CART,
  CREATE_CART_LOGIN,
  EMPTY_CART,
  GET_CARRITO_USERNAME,
  GET_ALL_ORDER,
  GET_ORDER_DETAIL,
  ADD_OFFER_CATEGORY,
  ADD_OFFER_PRODUCT,
  GET_OFFER,
} from "../consts";
import { getToken } from "../utils";

export const addOrEditCart = async (payload) => {
  return await axios.post(`${ADD_OR_EDIT_CART}`, payload);
};

export const removeProductCart = async (payload) => {
  return await axios.delete(`${REMOVE_CART}`, { data: payload });
};

export const createCartLogin = async (payload) => {
  return await axios.post(`${CREATE_CART_LOGIN}`, payload);
};

export const emptyCart = async (payload) => {
  return await axios.delete(`${EMPTY_CART}`, { data: payload });
};

export const getByUsername = async (payload) => {
  return await axios.get(`${GET_CARRITO_USERNAME}`, { params: payload });
};

export const getAllOrder = async () => {
  return await axios.get(`${GET_ALL_ORDER}`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getOrderId = async (id) => {
  return await axios.get(`${GET_ORDER_DETAIL}` + id);
};

export const offerCategory = async (offCat, valor) => {
  return await axios.put(`${ADD_OFFER_CATEGORY}`, {
    categoryID: offCat.idCat,
    offerDay: valor,
    inOffer: offCat.offCat,
  });
};

export const offerProduct = async (productOff, valor) => {
  return await axios.put(`${ADD_OFFER_PRODUCT}`, {
    productID: productOff.idProduct,
    offerDay: valor,
    inOffer: productOff.offProduct,
  });
};

export const getOffer = async (offerday) => {
  return await axios.put(`${GET_OFFER}`, { offerday: offerday });
};

// export const getOrderId = async (id) => {
//   return await axios.get(`${GET_ORDER_DETAIL}/${id}`);
// };
