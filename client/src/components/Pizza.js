import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function add_cart() {
    dispatch(addToCart(pizza, quantity, varient));
  }

  return (
    <div className="m-5 shadow-lg p-3 mb-5 bg-body rounded">
      <div onClick={handleShow}>
        <h1> {pizza.name} </h1>
        <img
          src={pizza.image}
          alt=""
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p> Varients </p>
          <select
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
            className="form-control"
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}> {varient} </option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p> Quantity </p>
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            className="form-control"
          >
            {[...Array(10).keys()].map((obj, ind) => {
              return <option value={ind + 1}> {ind + 1} </option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <h1 className="mt-1">
            {" "}
            Price: ₹ {pizza.prices[0][varient] * quantity}{" "}
          </h1>
        </div>
        <div className="w-100 m-1">
          <button className="btn btn_cart" onClick={add_cart}>
            {" "}
            ADD TO CART{" "}
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {pizza.name} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt=""
            className="img-fluid"
            style={{ height: "400px" }}
          />
          <p> {pizza.description} </p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn_cart" onClick={handleClose}>
            {" "}
            CLOSE{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
