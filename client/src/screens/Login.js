import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;

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
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: "35px" }} className="text-center m-3">
            {" "}
            Login{" "}
          </h2>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
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
            <button onClick={login} className="btn btn_cart mt-3 mb-3">
              {" "}
              LOGIN{" "}
            </button>
            <br />
            <a style={{ color: "black" }} href="/register">
              {" "}
              Click Here To Register{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
