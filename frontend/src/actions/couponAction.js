import axios from 'axios'
import Cookie from 'js-cookie'
import { APPLY_COUPON_FAILED, APPLY_COUPON_REQUEST, APPLY_COUPON_SUCCESS, COUPON_DEACTIVATE_REQUEST, COUPON_DEACTIVATE_SUCCESS } from "../constants/couponConstants";

const applyCoupon = (coupon) => async (dispatch, getState) => {
    try {
        dispatch({type: APPLY_COUPON_REQUEST})       
        const {data} = await axios.get('http://localhost:9000/api/coupon/' + coupon);
        dispatch({type: APPLY_COUPON_SUCCESS, payload: data})

        dispatch({type: COUPON_DEACTIVATE_REQUEST})
        const {feedback} = await axios.post('http://localhost:9000/api/deactivate-coupon/' + coupon);
        dispatch({type: COUPON_DEACTIVATE_SUCCESS, payload: feedback})

        const {coupon: {couponDetails}} = getState();
        Cookie.set("couponDetails", JSON.stringify(couponDetails));
    } catch (error) {
        dispatch({type: APPLY_COUPON_FAILED, payload: error.message})
    }
}

export {
    applyCoupon
}