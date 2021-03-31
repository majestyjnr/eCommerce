import axios from 'axios'
import Cookie from 'js-cookie'
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from '../constants/wishListConstants';

const addToWishList = (productId) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get('http://localhost:9000/api/product/' + productId);
        dispatch({
            type: WISHLIST_ADD_ITEM, payload:{
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
            }
        })

        const {wishList: {wishListItems}} = getState();
        Cookie.set('wishListItems', JSON.stringify(wishListItems))

    } catch (error) {
        
    }
}

const removeItemFromWishList = (productId) => async (dispatch, getState) => {
    try {
        dispatch({type: WISHLIST_REMOVE_ITEM, payload: productId})

        const {wishList: {wishListItems}} = getState();
        Cookie.set('wishListItems', JSON.stringify(wishListItems))
    } catch (error) {
        
    }
}

export {
    addToWishList, removeItemFromWishList
}