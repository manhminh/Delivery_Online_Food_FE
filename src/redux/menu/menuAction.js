import api from "../../config/api";
import {
  CREATE_MENU_ITEM_FAILURE,
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,
  UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
} from "./menuActionType";

export const createMenuItem = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_MENU_ITEM_REQUEST });
  try {
    let { data } = await api.post(`/api/admin/food`, reqData.foodData);
    dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
    console.log("create menu item success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getMenuItemByRestaurantId = (reqData) => async (dispatch) => {
  dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });

  try {
    let { data } = await api.get(
      `/api/food/restaurant/${reqData.restaurantId}?isVegetarian=${reqData.isVegetarian}&isNonVeg=${reqData.isNonVeg}&isSeasonal=${reqData.isSeasonal}&foodCategory=${reqData.foodCategory}`
    );

    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
    console.log("get menu item by restaurant id success: ", data);
  } catch (error) {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const searchMenuItem = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_MENU_ITEM_REQUEST });

  try {
    let { data } = await api.get(`/api/food/search?query=${query}`);

    dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
    console.log("get menu item by restaurant id success: ", data);
  } catch (error) {
    dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

// export const getAllIngredientsOfMenuItem = () => async (dispatch) => {
//   dispatch({ type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_REQUEST });
//   try {
//     let { data } = await api.get(`/api/admin/ingredients`);
//     dispatch({ type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_SUCCESS, payload: data });
//     console.log("get all ingredients of menu item success: ", data);
//   } catch (error) {
//     dispatch({ type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_FAILURE, payload: error });
//     console.log("error: ", error);
//   }
// }

export const updateMenuItemsAvailability = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_REQUEST });
  try {
    let { data } = await api.put(
      `/api/admin/food/${reqData.foodId}`,
      reqData.foodData
    );
    dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, payload: data });
    console.log("update menu item availability success: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const deleteFood = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MENU_ITEM_REQUEST });
  try {
    let { data } = await api.delete(`/api/admin/food/${id}`);
    dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: data });
    console.log("delete food success: ", data);
  } catch (error) {
    dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
    console.log("error: ", error);
  }
};
