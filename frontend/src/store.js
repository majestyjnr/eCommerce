import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { dealDetailReducer, productDetailReducer, productListReducer } from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducer'

const cartItems = Cookie.getJSON('cartItems') || []

const initialState = {cart: {cartItems}}
const reducer = combineReducers ({
    productList: productListReducer,
    productDetail: productDetailReducer,
    dealDetail: dealDetailReducer,
    cart: cartReducer
})      


// ***Thunk*** is a middleware for redux that allows us to async updation inside action in the redux

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store    