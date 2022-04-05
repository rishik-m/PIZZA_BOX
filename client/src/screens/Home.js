import React from "react";
import pizzas from "../pizzadata";
import Pizza from "../components/Pizza";

function Home() {
  return (
    <>
      <div className="row" style={{ marginTop: "40px" }}>
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4">
              <Pizza pizza={pizza} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
