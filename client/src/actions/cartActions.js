export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    image: pizza.image,
    prices: pizza.prices,
    _id: pizza._id,
    varient: varient,
    quantity: Number(quantity),
    price: pizza.prices[0][varient] * quantity,
  };

  if (cartItem.quantity < 1) {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
