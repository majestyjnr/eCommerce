import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

const addToCart = (productID, qty) => async (dispatch) =>{
    try {   
        // && await axios.get('/api/p/' + productID)
        const {data} = await axios.get('/api/product/' + productID);
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
    } catch (error) {
        
    }
}

export { addToCart }