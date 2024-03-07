import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_USERS_NOTIFICATION_FAILURE,
  GET_USERS_NOTIFICATION_REQUEST,
  GET_USERS_NOTIFICATION_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS,
} from "./orderActionType";

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
  notifications: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_USERS_ORDERS_REQUEST:
    case GET_USERS_NOTIFICATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: [action.payload, ...state.orders],
      };

    case GET_USERS_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notifications: action.payload,
      };

    case GET_USERS_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };

    case CREATE_ORDER_FAILURE:
    case GET_USERS_ORDERS_FAILURE:
    case GET_USERS_NOTIFICATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
