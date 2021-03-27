import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

const addToCart = (productID, qty) => async (dispatch) =>{
    try {   
        // && await axios.get('/api/p/' + productID)
        const {data} = await axios.get('http://localhost:9000/api/p/' + productID);
        console.log(data)
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
    } catch (error) {
        
    }
}

export { addToCart }