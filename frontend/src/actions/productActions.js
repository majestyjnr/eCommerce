import axios from "axios"
import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL } from "../constants/productConstants"

// Get Today's Deals
const listProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/todays-deals')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

// Get All Products

// For Main Products (Product Details)
const detailsOfProduct = (productId) => async (dispatch) =>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
        const {data} = await axios.get('http://localhost:9000/api/product/' + productId)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}

// For Today's Deals (Product Detail)
const dealDetail = (productId) => async (dispatch) =>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
        const {data} = await axios.get('http://localhost:9000/api/p/' + productId)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}



export {listProducts, detailsOfProduct, dealDetail}