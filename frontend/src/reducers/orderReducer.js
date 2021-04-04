const {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
} = require("../constants/orderConstants");

function createOrderReducer(state = {order: []}, action) {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case CREATE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
        return state;
  }
}

function orderDetailsReducer(state = { order: [] }, action) {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { loading: true };
    case GET_ORDER_SUCCESS:
      return { loading: false, order: action.payload };
    case GET_ORDER_FAIL:
      return { loading: false, orderError: action.payload };
    default:
        return state;
  }
}

// function getUserOrdersReducer(state = { orders: [] }, action) {
//   switch (action.type) {
//     case ALL_ORDERS_REQUEST:
//       return { loading: true };
//     case ALL_ORDERS_SUCCESS:
//       return { loading: false, orders: action.payload };
//     case ALL_ORDERS_FAIL:
//       return { loading: false, error: action.payload };
//   }
// }

export { createOrderReducer, orderDetailsReducer };
