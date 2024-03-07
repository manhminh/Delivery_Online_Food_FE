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

const initialState = {
  ingredients: [],
  ingredient: null,
  categories: [],
  isLoading: false,
  error: null,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
    case CREATE_INGREDIENTS_REQUEST:
    case UPDATE_STOCK_INGREDIENTS_REQUEST:
    case GET_INGREDIENTS_CATEGORY_REQUEST:
    case CREATE_INGREDIENTS_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload,
      };

    case GET_INGREDIENTS_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };

    case CREATE_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: [...state.ingredients, action.payload],
      };

    case CREATE_INGREDIENTS_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: [...state.categories, action.payload],
      };

    case UPDATE_STOCK_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: state.ingredients.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        ingredient: action.payload,
      };

    case GET_INGREDIENTS_FAILURE:
    case CREATE_INGREDIENTS_FAILURE:
    case UPDATE_STOCK_INGREDIENTS_FAILURE:
    case GET_INGREDIENTS_CATEGORY_FAILURE:
    case CREATE_INGREDIENTS_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ingredientsReducer;
