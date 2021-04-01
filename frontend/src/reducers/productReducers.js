import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL, AUDIO_PRODUCTS_LIST_REQUEST, AUDIO_PRODUCTS_LIST_SUCCESS, AUDIO_PRODUCT_LIST_FAIL, COMPUTER_PRODUCTS_LIST_REQUEST, COMPUTER_PRODUCTS_LIST_SUCCESS, COMPUTER_PRODUCT_LIST_FAIL, TV_PRODUCTS_LIST_REQUEST, TV_PRODUCTS_LIST_SUCCESS, TV_PRODUCT_LIST_FAIL, TRENDING_PRODUCT_LIST_FAIL, TRENDING_PRODUCTS_LIST_SUCCESS, TRENDING_PRODUCTS_LIST_REQUEST } from "../constants/productConstants";

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
        case AUDIO_PRODUCTS_LIST_REQUEST:
            return {audioProductsloading: true};
        case AUDIO_PRODUCTS_LIST_SUCCESS:
            return {audioProductsloading: false, audioProducts: action.payload};
        case AUDIO_PRODUCT_LIST_FAIL:
            return {audioProductsloading: false, audioProductserror: action.payload};
        default:
            return state;
    }
}


function computerProductsReducer(state= {computerProducts:[]}, action){
    switch(action.type){
        case COMPUTER_PRODUCTS_LIST_REQUEST:
            return {computerProductsloading: true};
        case COMPUTER_PRODUCTS_LIST_SUCCESS:
            return {computerProductsloading: false, computerProducts: action.payload};
        case COMPUTER_PRODUCT_LIST_FAIL:
            return {loading: false, computerProductserror: action.payload};
        default:
            return state;
    }
}

function televisionProductsReducer(state= {televisionProducts:[]}, action){
    switch(action.type){
        case TV_PRODUCTS_LIST_REQUEST:
            return {televisionProductsloading: true};
        case TV_PRODUCTS_LIST_SUCCESS:
            return {televisionProductsloading: false, televisionProducts: action.payload};
        case TV_PRODUCT_LIST_FAIL:
            return {televisionProductsloading: false, televisionProductserror: action.payload};
        default:
            return state;
    }
}

function trendingProductsReducer(state= {trendingProducts:[]}, action){
    switch(action.type){
        case TRENDING_PRODUCTS_LIST_REQUEST:
            return {trendingProductsloading: true};
        case TRENDING_PRODUCTS_LIST_SUCCESS:
            return {trendingProductsloading: false, trendingProducts: action.payload};
        case TRENDING_PRODUCT_LIST_FAIL:
            return {trendingProductsloading: false, trendingProductserror: action.payload};
        default:
            return state;
    }
}


export { productListReducer, majorProductListReducer,  productDetailReducer, audioProductsReducer, computerProductsReducer, televisionProductsReducer, trendingProductsReducer }