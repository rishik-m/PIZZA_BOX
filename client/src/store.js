import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currUser = localStorage.getItem("currUser")
  ? JSON.parse(localStorage.getItem("currUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currUser: currUser,
  },
};

const composedEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composedEnhancers(applyMiddleware(thunk))
);

export default store;
