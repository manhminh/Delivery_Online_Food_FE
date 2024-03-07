import {
  CREATE_INGREDIENTS_CATEGORY_FAILURE,
  CREATE_INGREDIENTS_CATEGORY_REQUEST,
  CREATE_INGREDIENTS_CATEGORY_SUCCESS,
  CREATE_INGREDIENTS_FAILURE,
  CREATE_INGREDIENTS_REQUEST,
  CREATE_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_CATEGORY_FAILURE,
  GET_INGREDIENTS_CATEGORY_REQUEST,
  GET_INGREDIENTS_CATEGORY_SUCCESS,
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  UPDATE_STOCK_INGREDIENTS_FAILURE,
  UPDATE_STOCK_INGREDIENTS_REQUEST,
  UPDATE_STOCK_INGREDIENTS_SUCCESS,
} from "./ingredientsActionType";

export const getIngredientsOfRestaurant =
  (restaurantId) => async (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    try {
      let { data } = await api.get(
        `/api/admin/ingredients/restaurant/${restaurantId}`
      );
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data });
      console.log("get ingredients of restaurant success: ", data);
    } catch (error) {
      dispatch({ type: GET_INGREDIENTS_FAILURE, payload: error });
      console.log("error: ", error);
    }
  };

export const createIngredients = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_INGREDIENTS_REQUEST });
  try {
    let { data } = await api.post(`/api/admin/ingredients`, reqData);
    dispatch({ type: CREATE_INGREDIENTS_SUCCESS, payload: data });
    console.log("create ingredients success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_INGREDIENTS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const createIngredientsCategory = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_INGREDIENTS_CATEGORY_REQUEST });
  try {
    let { data } = await api.post(`/api/admin/ingredients/category`, reqData);
    dispatch({ type: CREATE_INGREDIENTS_CATEGORY_SUCCESS, payload: data });
    console.log("create ingredients category success: ", data);
  } catch (error) {
    dispatch({ type: CREATE_INGREDIENTS_CATEGORY_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const getIngredientsCategory = (id) => async (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_CATEGORY_REQUEST });
  try {
    let { data } = await api.get(
      `/api/admin/ingredients/restaurant/${id}/category`
    );
    dispatch({ type: GET_INGREDIENTS_CATEGORY_SUCCESS, payload: data });
    console.log("get ingredients category success: ", data);
  } catch (error) {
    dispatch({ type: GET_INGREDIENTS_CATEGORY_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const updateStockIngredients = (id) => async (dispatch) => {
  dispatch({ type: UPDATE_STOCK_INGREDIENTS_REQUEST });
  try {
    let { data } = await api.put(`/api/admin/ingredients/${id}/stock`);
    dispatch({ type: UPDATE_STOCK_INGREDIENTS_SUCCESS, payload: data });
    console.log("update stock ingredients success: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_STOCK_INGREDIENTS_FAILURE, payload: error });
    console.log("error: ", error);
  }
};
