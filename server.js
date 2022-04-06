const express = require("express");

const db = require('./db');

const Pizza = require('./models/pizzaModel');

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Server Working!!!"));

app.get('/getpizzas', (req,res) => {
    Pizza.find({}, (err,data) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })
})

const port = process.env.PORT || 5000 
app.listen(port, () => console.log(`Listening on port ${port}!`));
