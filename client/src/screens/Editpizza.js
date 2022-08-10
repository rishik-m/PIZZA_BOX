import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function Editpizza({ match }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [smallprice, setSmallprice] = useState("");
  const [medprice, setMedprice] = useState("");
  const [largeprice, setLargeprice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const pizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = pizzabyidstate;

  const editpizzastate = useSelector((state) => state.editPizzaReducer);
  const { editloading, editsuccess, editerror } = editpizzastate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id == match.params.pizzaid) {
        setName(pizza.name);
        setSmallprice(pizza.prices[0]["small"]);
        setMedprice(pizza.prices[0]["medium"]);
        setLargeprice(pizza.prices[0]["large"]);
        setImage(pizza.image);
        setDescription(pizza.description);
        setCategory(pizza.category);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);

  function handleform(e) {
    e.preventDefault();

    const editedpizza = {
      _id: match.params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: medprice,
        large: largeprice,
      },
    };

    dispatch(editPizza(editedpizza));
  }

  return (
    <div>
      <h1> Edit Pizza: {match.params.pizzaid} </h1>
      <div className="text-start">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Pizza details edited successfully" />}
        {editloading && <Loading />}

        <form onSubmit={handleform}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setSmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={medprice}
            onChange={(e) => {
              setMedprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setLargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image URL"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className=" btn btn_cart mt-3" type="submit">
            {" "}
            Edit Pizza{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editpizza;
