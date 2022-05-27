import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ marginTop: "38px" }}>
        <div className="col-md-5 mt-5 text-start">
          <h2 style={{ fontSize: "35px" }} className="text-center m-3">
            {" "}
            Login{" "}
          </h2>
          <div>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={login} className="btn_cart mt-3">
              {" "}
              LOGIN{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
