import axios from "axios"
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const addToCart = (productID, qty) => async (dispatch, getState ) =>{
    try {   

        const {data} = await axios.get('http://localhost:9000/api/product/' + productID);
        
        dispatch({
            type: CART_ADD_ITEM, payload:{
                _id: data._id,
                productName: data.productName,
                productPrice: data.productPrice,
                productCategory: data.productCategory,
                productBrand: data.productBrand,
                productColor: data.productColor,
                productSize: data.productSize,
                productImage: data.productImage,
                productDescription: data.productDescription,
                productReviews: data.productReviews,
                countInStock: data.countInStock, 
                qty
            }
        })
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {
        
    }
}

const removeItemFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId})

    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCart, removeItemFromCart }