import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
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
const initialState = {
  restaurants: [],
  userRestaurant: null,
  restaurant: null,
  isLoading: false,
  error: null,
  events: [],
  restaurantsEvents: [],
  categories: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESTAURANT_REQUEST:
    case GET_ALL_RESTAURANTS_REQUEST:
    case DELETE_RESTAURANT_REQUEST:
    case UPDATE_RESTAURANT_REQUEST:
    case UPDATE_RESTAURANT_STATUS_REQUEST:
    case GET_RESTAURANT_BY_ID_REQUEST:
    case GET_RESTAURANT_BY_USER_ID_REQUEST:
    case CREATE_EVENT_REQUEST:
    case GET_ALL_EVENTS_REQUEST:
    case DELETE_EVENT_REQUEST:
    case GET_RESTAURANTS_EVENTS_REQUEST:
    case CREATE_CATEGORY_REQUEST:
    case GET_RESTAURANTS_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        userRestaurant: action.payload,
        restaurants: [action.payload, ...state.restaurants],
      };

    case GET_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurants: action.payload,
      };

    case GET_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurant: action.payload,
      };

    case GET_RESTAURANT_BY_USER_ID_SUCCESS:
    case UPDATE_RESTAURANT_STATUS_SUCCESS:
    case UPDATE_RESTAURANT_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userRestaurant: action.payload,
      };

    case DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,

        restaurants: state.restaurants.filter(
          (item) => item.id !== action.payload
        ),

        userRestaurant: state.userRestaurant.filter(
          (item) => item.id !== action.payload
        ),
      };

    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: [...state.events, action.payload],
        restaurantsEvents: [...state.restaurantsEvents, action.payload],
      };

    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: action.payload,
      };

    case GET_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurantsEvents: action.payload,
      };

    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: state.events.filter((item) => item.id !== action.payload),
        restaurantsEvents: state.restaurantsEvents.filter(
          (item) => item.id !== action.payload
        ),
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: [...state.categories, action.payload],
      };

    case GET_RESTAURANTS_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };

    case CREATE_RESTAURANT_FAILURE:
    case GET_ALL_RESTAURANTS_FAILURE:
    case DELETE_RESTAURANT_FAILURE:
    case UPDATE_RESTAURANT_FAILURE:
    case UPDATE_RESTAURANT_STATUS_FAILURE:
    case GET_RESTAURANT_BY_ID_FAILURE:
    case GET_RESTAURANT_BY_USER_ID_FAILURE:
    case CREATE_EVENT_FAILURE:
    case GET_ALL_EVENTS_FAILURE:
    case DELETE_EVENT_FAILURE:
    case GET_RESTAURANTS_EVENTS_FAILURE:
    case CREATE_CATEGORY_FAILURE:
    case GET_RESTAURANTS_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
