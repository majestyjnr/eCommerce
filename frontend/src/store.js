import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import {
  audioProductsReducer,
  computerProductsReducer,
  televisionProductsReducer,
  trendingProductsReducer,
  productDetailReducer,
  productListReducer,
  majorProductListReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducer";
import { userSignInReducer } from "./reducers/userReducers";
import { wishListReducer } from "./reducers/wishListReducer";
import { couponRuducer } from "./reducers/couponRuducer";

import {
  createOrderReducer,
  orderDetailsReducer,
} from "./reducers/orderReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;
const wishListItems = Cookie.getJSON("wishListItems") || [];
const couponDetails = Cookie.getJSON("couponDetails") || [];

const initialState = {
  cart: { cartItems },
  userSignIn: { userInfo },
  wishList: { wishListItems },
  coupon: { couponDetails },
};
const reducer = combineReducers({
  productList: productListReducer,
  majorProductsList: majorProductListReducer,
  productDetail: productDetailReducer,
  audioProductsList: audioProductsReducer,
  computerProductsList: computerProductsReducer,
  televisionProductsList: televisionProductsReducer,
  trendingProductsList: trendingProductsReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  userSignIn: userSignInReducer,
  coupon: couponRuducer,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
});

// ***Thunk*** is a middleware for redux that allows us to async updation inside action in the redux

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
