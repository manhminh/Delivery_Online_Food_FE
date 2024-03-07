import axios from "axios";
import {
  ADD_TO_FAVORITE_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  RESGISTER_USER_FAILURE,
  RESGISTER_USER_REQUEST,
  RESGISTER_USER_SUCCESS,
} from "./userActionType";
import api, { API_BASE_URL } from "../../config/api";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: RESGISTER_USER_REQUEST });

  try {
    let { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      reqData.userData
    );

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurants");
    } else {
      reqData.navigate("/");
    }

    dispatch({ type: RESGISTER_USER_SUCCESS, payload: data.jwt });
    console.log("register user success: ", data);
  } catch (error) {
    dispatch({ type: RESGISTER_USER_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  try {
    let { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      reqData.userData
    );

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurants");
    } else {
      reqData.navigate("/");
    }

    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
    console.log("login user success: ", data);
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  try {
    let { data } = await api.get(`/api/user/profile`);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("get user success: ", data);
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const addToFavorite = (restaurantId) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });

  try {
    let { data } = await api.put(
      `/api/restaurants/${restaurantId}/add-to-favorites`
    );

    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
    console.log("add to favorite success: ", data);
  } catch (error) {
    dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    console.log("logout success");
  } catch (error) {
    console.log("error: ", error);
  }
};
