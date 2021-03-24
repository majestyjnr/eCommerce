import axios from "axios"
import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstants"

const listProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCTS_LIST_REQUEST})
        const {data} = await axios.get('http://localhost:9000/api/todays-deals')
        dispatch({type: PRODUCTS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
} 

export {listProducts}