import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { productListReducer } from './src/reducers/productReducers'

const initialState = {}
const reducer = combineReducers ({
    productList: productListReducer,
})      // Thunk is a middleware for redux that allows us to async updation inside action in the redux
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))
export default store