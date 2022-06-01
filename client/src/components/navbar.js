import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);

  const userstate = useSelector((state) => state.loginUserReducer);
  const { currUser } = userstate;
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-2 bg-body rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong> PIZZA BOX </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currUser ? (
                <div className="dropdown mt-2">
                  <a
                    style={{ color: "black" }}
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currUser.name}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <li> Logout </li>
                    </div>
                  </div>
                </div>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart {cartstate.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
