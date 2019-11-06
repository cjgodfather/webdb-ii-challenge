const route = require("express").Router();

const knex = require("./data/dbConfig");

route.get("/", (req, res) => {
  knex("car-dealer").then(cars => {
    res.status(200).json(cars);
  });
});

route.post("/", (req, res) => {
  knex("car-dealer")
    .insert(req.body)
    .then(res => console.log(res));
});

module.exports = route;
