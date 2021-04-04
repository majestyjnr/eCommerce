const {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GETS_ORDER_FAIL,
} = require("../constants/orderConstants");

function createOrderReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, success: action.payload };
    case CREATE_ORDER_FAIL:
      return { loading: false, error: action.payload };
  }
}

function orderDetailsReducer(state = { order: [] }, action) {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { loading: true };
    case GET_ORDER_SUCCESS:
      return { loading: false, order: action.payload };
    case GETS_ORDER_FAIL:
      return { loading: false, error: action.payload };
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
