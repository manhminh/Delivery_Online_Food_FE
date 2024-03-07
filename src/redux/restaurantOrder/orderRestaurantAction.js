import {
  GET_RESTAURANTS_ORDER_FAILURE,
  GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./orderRestaurantActionType";

export const updateOrderStatus = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
  try {
    let { data } = await api.put(
      `/api/admin/orders/${reqData.orderId}/${reqData.orderStatus}`
    );

    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: data });
    console.log("update order status success: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getRestaurantsOrder =
  ({ restaurantId, orderStatus }) =>
  async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
    try {
      let { data } = await api.get(
        `/api/orders/restaurant/${restaurantId}?orderStatus=${orderStatus}`
      );
      dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data });
      console.log("get restaurants order success: ", data);
    } catch (error) {
      dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error });
      console.log("error: ", error);
    }
  };
