import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./user/userReducer";
import restaurantReducer from "./restaurant/restaurantReducer";
import menuItemReducer from "./menu/menuReducer";
import cartReducer from "./cart/cartReducer";
import orderReducer from "./order/orderReducer";
import orderRestaurantReducer from "./restaurantOrder/orderRestaurantReducer";
import ingredientsReducer from "./ingredients/ingredientsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuItemReducer,
  cart: cartReducer,
  order: orderReducer,
  restaurantOrder: orderRestaurantReducer,
  ingredient: ingredientsReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
