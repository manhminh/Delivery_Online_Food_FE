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

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    let { data } = await api.post(`/api/orders`, reqData.orderData);

    if (data.payment_url) {
      window.location.href = data.payment_url;
    }

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    console.log("create order success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getUsersOrders = () => async (dispatch) => {
  dispatch({ type: GET_USERS_ORDERS_REQUEST });
  try {
    let { data } = await api.get(`/api/orders/user`);
    dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getUsersNotifycations = () => async (dispatch) => {
  dispatch({ type: GET_USERS_NOTIFICATION_REQUEST });
  try {
    let { data } = await api.get(`/api/notifications`);
    dispatch({ type: GET_USERS_NOTIFICATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USERS_NOTIFICATION_FAILURE, payload: error });
    console.log("error: ", error);
  }
};
