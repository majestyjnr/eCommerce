import axios from 'axios'
import Cookie from 'js-cookie'
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from '../constants/userConstants'

const signIn = (email, password) => async (dispatch) =>{
    try {
        dispatch({type: USER_SIGNIN_REQUEST, payload: (email, password)})
        const {data} = await axios.post('http://localhost:9000/api/user/signin', {email, password})
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message})
    }
}

export {
    signIn
}