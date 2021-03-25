import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { dealDetailReducer, productDetailReducer, productListReducer } from './reducers/productReducers'

const initialState = {}
const reducer = combineReducers ({
    productList: productListReducer,
    productDetail: productDetailReducer,
    dealDetail: dealDetailReducer,
})      

// ***Thunk*** is a middleware for redux that allows us to async updation inside action in the redux

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store    