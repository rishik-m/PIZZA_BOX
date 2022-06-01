const express = require("express");

const db = require("./db");

const Pizza = require("./models/pizzaModel");
const User = require("./models/userModel");

const app = express();

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

app.get("/", (req, res) => res.send("Server Working!!!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
