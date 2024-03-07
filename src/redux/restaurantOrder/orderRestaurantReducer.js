import {
  GET_RESTAURANTS_ORDER_FAILURE,
  GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./orderRestaurantActionType";

const inititalState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderRestaurantReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_RESTAURANTS_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };

    case UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: state.orders.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case GET_RESTAURANTS_ORDER_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default orderRestaurantReducer;
