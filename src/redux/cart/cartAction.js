import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  GET_ALL_CART_ITEMS_REQUEST,
  GET_ALL_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./cartActionType";

export const findCart = () => async (dispatch) => {
  dispatch({ type: FIND_CART_REQUEST });
  try {
    let { data } = await api.get(`/api/cart`);
    dispatch({ type: FIND_CART_SUCCESS, payload: data });
    console.log("find cart success: ", data);
  } catch (error) {
    dispatch({ type: FIND_CART_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};

export const getAllCartItems = (cartId) => async (dispatch) => {
  dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
  try {
    let { data } = await api.get(`/api/cart/${cartId}/items`);
    dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: data });
    console.log("get all cart items success: ", data);
  } catch (error) {
    dispatch({ type: FIND_CART_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
    let { data } = await api.post(`/api/cart/add`, reqData.cartItem);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    console.log("add item to cart success: ", data);
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    let { data } = await api.put(
      `/api/cart/cart-item/update`,
      reqData.cartItem
    );
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    console.log("update cart item success: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};

export const removeCartItem = (itemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    let { data } = await api.put(`/cart-item/${itemId}/remove`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
    console.log("remove cart item success: ", data);
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};

export const clearCart = () => async (dispatch) => {
  dispatch({ type: CLEAR_CART_REQUEST });

  try {
    let { data } = await api.put(`/api/cart/clear`);

    dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
    console.log("clear cart success: ", data);
  } catch (error) {
    dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
    console.log("error: ", error);
  }
};
