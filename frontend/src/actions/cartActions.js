import axios from "axios"
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const addToCart = (productID, qty) => async (dispatch, getState ) =>{
    try {   
        // && await axios.get('/api/p/' + productID)
        const {data} = await axios.get('http://localhost:9000/api/p/' + productID);

        dispatch({
            type: CART_ADD_ITEM, payload:{
                _id: data[0]._id,
                productName: data[0].productName,
                productPrice: data[0].productPrice,
                productCategory: data[0].productCategory,
                productBrand: data[0].productBrand,
                productColor: data[0].productColor,
                productSize: data[0].productSize,
                productImage: data[0].productImage,
                productDescription: data[0].productDescription,
                productReviews: data[0].productReviews,
                countInStock: data[0].countInStock, 
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