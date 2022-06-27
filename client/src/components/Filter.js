import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

function Filter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Row
          className="justify-content-center shadow-lg p-3 mb-5 bg-white rounded"
          style={{ marginTop: "35px" }}
        >
          <Col className="mx-0" style={{ marginTop: "-3px" }}>
            <input
              value={search}
              type="text"
              className="form-control w-100"
              placeholder="Search Pizzas"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col className="mx-0">
            <select
              className="form-control w-100 mt-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all"> All </option>
              <option value="veg"> Veg </option>
              <option value="nonveg"> Non-Veg </option>
            </select>
          </Col>
          <Col className="mx-0">
            <button
              type="button"
              className="btn btn_cart w-100 mt-2"
              style={{ height: "35px" }}
              onClick={() => {
                dispatch(filterPizzas(search, category));
              }}
            >
              {" "}
              FILTER{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Filter;
