const express = require("express");

const db = require("./db");

const Pizza = require("./models/pizzaModel");

const app = express();

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizzas/", pizzasRoute);

app.get("/", (req, res) => res.send("Server Working!!!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
