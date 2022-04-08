import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";

function Home() {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzasReducer);

  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <>
      <div className="row" style={{ marginTop: "-5px" }}>
        {loading ? (
          <h1> LOADING... </h1>
        ) : error ? (
          <h1> Something went wrong!!! </h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4" key={pizza._id}>
                <Pizza pizza={pizza} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Home;
