import axios from "axios";

export const placeorder = (subtotal, token) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });

  const currUser = getState().loginUserReducer.currUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const res = await axios.post("/api/orders/placeorder", {
      subtotal,
      token,
      currUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currUser = getState().loginUserReducer.currUser;

  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post("/api/orders/getuserorders", {
      userid: currUser._id,
    });
    console.log(response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};
