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

function majorProductListReducer(state= {products:[]}, action){
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

function audioProductsReducer(state= {audioProducts:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {audioProductsloading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {audioProductsloading: false, audioProducts: action.payload};
        case PRODUCT_LIST_FAIL:
            return {audioProductsloading: false, audioProductserror: action.payload};
        default:
            return state;
    }
}


function computerProductsReducer(state= {computerProducts:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {computerProductsloading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {computerProductsloading: false, computerProducts: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, computerProductserror: action.payload};
        default:
            return state;
    }
}

function televisionProductsReducer(state= {televisionProducts:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {televisionProductsloading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {televisionProductsloading: false, televisionProducts: action.payload};
        case PRODUCT_LIST_FAIL:
            return {televisionProductsloading: false, televisionProductserror: action.payload};
        default:
            return state;
    }
}

function trendingProductsReducer(state= {trendingProducts:[]}, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {trendingProductsloading: true};
        case PRODUCTS_LIST_SUCCESS:
            return {trendingProductsloading: false, trendingProducts: action.payload};
        case PRODUCT_LIST_FAIL:
            return {trendingProductsloading: false, trendingProductserror: action.payload};
        default:
            return state;
    }
}


export { productListReducer, majorProductListReducer,  productDetailReducer, audioProductsReducer, computerProductsReducer, televisionProductsReducer, trendingProductsReducer }