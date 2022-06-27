import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

function Home() {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzasReducer);

  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <>
      <Filter />
      <div className="row" style={{ marginTop: "-5px" }}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong!!!" />
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
