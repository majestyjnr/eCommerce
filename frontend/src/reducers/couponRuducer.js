import { APPLY_COUPON_FAILED, APPLY_COUPON_REQUEST, APPLY_COUPON_SUCCESS } from "../constants/couponConstants";

function couponRuducer(state={ couponDetails:[]}, action){
    switch(action.type){
        case APPLY_COUPON_REQUEST:
            return {couponLoading: true}
        case APPLY_COUPON_SUCCESS:
            return {couponLoading: false, couponDetails: action.payload }
        case APPLY_COUPON_FAILED:
            return {couponLoading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    couponRuducer
}

