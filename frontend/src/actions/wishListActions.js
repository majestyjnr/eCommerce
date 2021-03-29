import axios from 'axios'
import Cookie from 'js-cookie'
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from '../constants/wishListConstants';

const addToWishList = (productId) => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:9000/api/p/' + productId);
        dispatch({
            type: WISHLIST_ADD_ITEM, payload:{
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
            }
        })
    } catch (error) {
        
    }
}

const removeItemFromWishList = (productId) => async (dispatch) => {
    try {
        dispatch({type: WISHLIST_REMOVE_ITEM, payload: productId})

    } catch (error) {
        
    }
}

export {
    addToWishList, removeItemFromWishList
}