import axios from "axios"

const addToCart = (productID, qty) => async (dispatch) =>{
    try {   
        const {data} = await axios.get('/api/product/' + productID) && await axios.get('/api/p/' + productID);
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
                countInStock: data.countInStock
            }
        })
    } catch (error) {
        
    }
}

export { addToCart }