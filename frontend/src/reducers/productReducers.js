import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL } from "../constants/productConstants";

function productListReducer(state= {products:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {loading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function productDetailReducer(state= { product: [] }, action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function audioProductsReducer(state= {products:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {loading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


function computerProductsReducer(state= {products:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {loading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function televisionProductsReducer(state= {products:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {loading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


export { productListReducer,  productDetailReducer, audioProductsReducer, computerProductsReducer, televisionProductsReducer }