import {
  GET_PRODUCT,
  GET_INFO_GOOGLE,
  LOCAL_LOGIN,
  GET_PRODUCT_BY_NAME,
  SIGNUP,
  FILTER_PRICE_BY_RANGE,
  ORDER_BY_PRICE,
  GET_USER,
  GET_CATEGORIES,
  GET_DETAIL_PRODUCT,
  FILTER_BY_SEARCH,
  USER_MESSAGE,
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
  GET_ALL_ORDERS,
  PRODUCTS_BY_NAME,
  POST_NEWSLETTER,
  DELETE_NEWSLETTER,
  ADD_REVIEW,
  ALL_REVIEWS,
  APPROVE_PRODUCT,
  PUT_PRODUCT,
  POST_PRODUCT,
  DB_SUBCATEGORIES,
  DELETE_PRODUCT2
  
} from "../Actions/const";

const initialState = {
  product: [],
  allProducts2: [],
  getInfoGoogle: [],
  user: [],
  allUsers: [],
  categories: [],
  detailProduct: [],
  subcategories: [],
  updateUser: [],
  updateProduct: [],
  mp: [],
  mp2: [],
  orders: [],
  // cart
  addProduct: [],
  decreseProduct: [],
  clearCart: [],
  newReview: [],
  allReviews: [],
  productApproved: [],
  postProduct: [],
  dbSubcategories: []
};

function rootReducer(state = initialState, { type, payload, price1, price2 }) {
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        allProducts2: payload,
        product: payload,
      };
    }
    case GET_PRODUCT_BY_NAME: {
      return {
        ...state,
        product: payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: payload.data,
      };
    }
    case GET_INFO_GOOGLE:
      return {
        ...state,
        getInfoGoogle: payload,
      };
    case LOCAL_LOGIN:
      return {
        ...state,
      };
    case SIGNUP:
      return {
        ...state,
      };
    case FILTER_PRICE_BY_RANGE: {
      const products = state.allProducts2;
      let filterPrice = products.filter(
        (el) => el.price >= payload.price1 && el.price <= payload.price2
      );
      return {
        ...state,
        product: filterPrice,
      };
    }
    case ORDER_BY_PRICE: {
      let sortedProducts =
        payload === "Mayor-Menor"
          ? state.product.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              } else if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : state.product.sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              } else if (a.price > b.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        product: payload === "All" ? state.products : sortedProducts,
      };
    }
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: payload,
      };
    }
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: payload,
      };
    case FILTER_BY_SEARCH:
      let resultado = state.product.filter(
        (el) =>
          el.name.toLowerCase().includes(payload.toLowerCase()) ||
          el.categories.toLowerCase().includes(payload.toLowerCase())
      );

      return {
        ...state,
        product: resultado,
      };
    case USER_MESSAGE:
      return {
        ...state,
      };
    case GET_SUBCATEGORIES:
      let subcatego = state.categories.filter((el) => el.id === payload);
      return {
        ...state,
        subcategories: subcatego,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case GET_FILTER_BY_CATEGORY:
      console.log(payload, "ljdwboubdlwnb");
      let filter = state.allProducts2.filter((el) => el.categories === payload);
      return {
        ...state,
        product: filter,
      };

    case FILTER_BY_SUB_CATEGORY:
      let filter2 = state.allProducts2?.filter((el) => el.subcategories[0] === payload)

      return {
        ...state,
        product: filter2,
      };

    case GET_SUB_CAT_BY_NAME:
      let filter3 = state.categories.filter((el) => el.name === payload);
      return {
        ...state,
        subcategories: filter3,
      };
    case PUT_USER:
      return {
        ...state,
        updateUser: payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: payload,
      };
    case DECRESE_PRODUCT:
      return {
        ...state,
        decreseProduct: payload,
      };

    case CLEAR_CART:
      return {
        ...state,
        clearCart: payload,
      };

    case DELETE_ITEM:
      return {
        ...state,
      };

    case MERCADO_PAGO:
      return {
        ...state,
        mp: payload[0].url,
      };

    case MERCADO_PAGO2:
      return {
        ...state,
        mp2: payload[0].url,
      };

    case SUCCESS_MAIL:
      return {
        ...state,
      };

    case FAIL_MAIL:
      return {
        ...state,
      };

    case DELETE_USER:
      return {
        ...state,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
      };
      
    case DELETE_PRODUCT2:
      return {
        ...state
      };
    case PRODUCTS_BY_NAME:
      let filter4 = state.allProducts2.filter((el) =>
        el.name.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        product: filter4,
      };
    case LOGOUT:
      return {
        ...state,
        // getInfoGoogle: payload,
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case POST_NEWSLETTER:
      return {
        ...state,
      };
    case DELETE_NEWSLETTER:
      return {
        ...state,
      };
      
    case ADD_REVIEW: 
    return {
      ...state,
      newReview: payload
    }
    case PUT_PRODUCT:
      return {
        ...state,
        updateProduct: payload,
      };
    
    case ALL_REVIEWS:

    return {
      ...state,
      allReviews: payload
    }

    case APPROVE_PRODUCT:
    return {
      ...state,
      productApproved: payload
    }

    case POST_PRODUCT:
      return {
        ...state,
        postProduct: payload
      }
    
    case DB_SUBCATEGORIES:
    return {
      ...state,
      dbSubcategories: payload
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
