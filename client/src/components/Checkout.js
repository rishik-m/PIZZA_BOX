import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeorder } from "../actions/orderActions";
import StripeCheckout from "react-stripe-checkout";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function Checkout({ subtotal }) {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();

  function onToken(token) {
    console.log(token);
    dispatch(placeorder(subtotal, token));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order placed successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={onToken}
        currency="INR"
        stripeKey="pk_test_51L5UThKEl5INxxJqGSWenYyXaFRv540JQ2k8W1jGL4l1bxd4dWpGkgIXpZO96QcD6LhCbJonkNE6prFGbSPPw0c300Sa9Qdixv"
      >
        <button className="btn btn_cart"> PAY NOW </button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
