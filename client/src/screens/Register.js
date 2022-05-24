import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");

  function registerUser() {
    if (password !== conpassword) {
      alert("Passwords do not matched!!!");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  }

  return (
    <div>
      <div className="row justify-content-center" style={{ marginTop: "38px" }}>
        <div className="col-md-5 mt-5 text-start">
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
            <button onClick={registerUser} className="btn_cart mt-3">
              {" "}
              Register{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
