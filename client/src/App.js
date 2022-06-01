import React from "react";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/navbar";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Orders from "./screens/Orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
