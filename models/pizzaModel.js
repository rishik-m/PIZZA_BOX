const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema(
  {
    name: { type: String, require },
    varients: [],
    category: { type: String, require },
    description: { type: String, require },
    image: { type: String, require },
    prices: [],
  },
  {
    timestamps: true,
  }
);

const pizzaModel = mongoose.model("pizzas", pizzaSchema);

module.exports = pizzaModel;
