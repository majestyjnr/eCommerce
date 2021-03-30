import axios from "axios"
import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL } from "../constants/productConstants"

// Get Today's Deals
const listTodaysDealsProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/products/td')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

// For Today's Deals (Product Detail)
const dealProductDetail = (productId) => async (dispatch) =>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
        const {data} = await axios.get('http://localhost:9000/api/products/td/' + productId)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
    }
}

// Get All Products {This is also Known as the Best Sellers}
const listMajorProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/products')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

// Get All TV Products
const listTVProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/products/tvs')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

// Get All TV Products
const listAudioProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/products/audios')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

// Get All Computer Products
const listComputerProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/products/computers')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

// Get All Trending Products
const listTrendingProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/products/trending')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

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



export {
    listTodaysDealsProducts, 
    detailsOfProduct, 
    dealProductDetail,
    listMajorProducts,
    listTVProducts,
    listTrendingProducts,
    listBestSellerProducts,
    listAudioProducts,
    listComputerProducts
}