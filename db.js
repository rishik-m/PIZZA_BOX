const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://rishik:JuOcOFrYPJcOZRq0@cluster0.meff3.mongodb.net/mern_pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

db.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
