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
import Admin from "./screens/Admin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
