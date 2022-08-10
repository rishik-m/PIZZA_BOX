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

export const getAllOrders = () => async (dispatch, getState) => {
  const currUser = getState().loginUserReducer.currUser;

  dispatch({ type: "GET_ALLORDERS_REQUEST" });

  try {
    const response = await axios.get("/api/orders/getallorders");
    console.log(response);
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_ALLORDERS_FAILED", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch) => {
  try {
    const response = await axios.post("/api/orders/deliverorder", { orderid });
    console.log(response);
    alert("Order Delivered");
    const orders = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: orders.data });
  } catch (error) {
    console.log(error);
  }
};
