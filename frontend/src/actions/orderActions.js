import axios from "axios";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GETS_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orderConstants";

const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST, payload: order });
    const { data } = await axios.post("http://localhost:9000/api/order", order);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAIL, payload: error.message });
  }
};

const getSingleOrder = (orderID) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST, payload: order });
    const { data } = await axios.get(
      "http://localhost:9000/api/order/" + orderID
    );
    dispatch({ type: GET_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GETS_ORDER_FAIL, payload: error.message });
  }
};

export { createOrder, getSingleOrder };
