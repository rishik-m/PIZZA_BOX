import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();

  function register() {
    if (password !== conpassword) {
      alert("Passwords do not matched!!!");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ marginTop: "38px" }}>
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registered" />}
          <h2 style={{ fontSize: "35px" }} className="text-center m-3">
            {" "}
            Register{" "}
          </h2>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={conpassword}
              onChange={(e) => setConpassword(e.target.value)}
              required
            />
            <button onClick={register} className="btn btn_cart mt-3 mb-3">
              {" "}
              Register{" "}
            </button>
            <br />
            <a style={{ color: "black" }} href="/login">
              {" "}
              Click Here To Login{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
