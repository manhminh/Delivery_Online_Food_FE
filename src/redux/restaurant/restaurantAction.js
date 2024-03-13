import api from "../../config/api";
import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_SUCCESS,
} from "./restaurantActionType";

export const getAllRestaurants = () => async (dispatch) => {
  dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
  try {
    let { data } = await api.get(`/api/restaurants`);
    dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
    console.log("get all restaurants success: ", data);
  } catch (error) {
    dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};

export const getRestaurantById = (id) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
  try {
    let { data } = await api.get(`/api/restaurants/${id}`);
    dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data });
    console.log("get restaurant by id success: ", data);
  } catch (error) {
    dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getRestaurantByUserId = () => async (dispatch) => {
  dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
  try {
    let data = await api.get(`/api/admin/restaurants/user`);
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
    console.log("get restaurant by user id success: ", data);
  } catch (error) {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const createRestaurant = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_RESTAURANT_REQUEST });
  try {
    let { data } = await api.post(
      `/api/admin/restaurants`,
      reqData.restaurantData
    );
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    console.log("create restaurant success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const updateRestaurant = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_RESTAURANT_REQUEST });
  try {
    let { data } = await api.put(
      `/api/admin/restaurants/${reqData.id}`,
      reqData.restaurantData
    );
    dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data });
    console.log("update restaurant success: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const deleteRestaurant = (id) => async (dispatch) => {
  dispatch({ type: DELETE_RESTAURANT_REQUEST });
  try {
    let { data } = await api.delete(`/api/admin/restaurants/${id}`);
    dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: data });
    console.log("delete restaurant success: ", data);
  } catch (error) {
    dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const updateRestaurantStatus = (id) => async (dispatch) => {
  dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
  try {
    let { data } = await api.put(`/api/admin/restaurants/${id}/status`);
    dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data });
    console.log("update restaurant status success: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const createEvent = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_EVENT_REQUEST });
  try {
    let { data } = await api.post(
      `/api/admin/events/restaurant/${reqData.id}`,
      reqData.eventData
    );

    dispatch({ type: CREATE_EVENT_SUCCESS, payload: data });
    console.log("create event success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_EVENT_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getAllEvents = () => async (dispatch) => {
  dispatch({ type: GET_ALL_EVENTS_REQUEST });
  try {
    let { data } = await api.get(`/api/events}`);
    dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data });
    console.log("get all events success: ", data);
  } catch (error) {
    dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  dispatch({ type: DELETE_EVENT_REQUEST });
  try {
    let { data } = await api.delete(`/api/admin/events/${id}`);
    dispatch({ type: DELETE_EVENT_SUCCESS, payload: data });
    console.log("delete event success: ", data);
  } catch (error) {
    dispatch({ type: DELETE_EVENT_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getRestaurantsEvents = (id) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
  try {
    let { data } = await api.get(`/api/admin/events/restaurant/${id}`);
    dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: data });
    console.log("get restaurants events success: ", data);
  } catch (error) {
    dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const createCategory = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_CATEGORY_REQUEST });
  try {
    let { data } = await api.post(
      `/api/admin/categories`,
      reqData.categoryData
    );
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    console.log("create category success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getRestaurantsCategory = (id) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
  try {
    let { data } = await api.get(`/api/categories/restaurant/${id}`);

    dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: data });
    console.log("get restaurants category success: ", data);
  } catch (error) {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
    console.log("error: ", error);
  }
};
