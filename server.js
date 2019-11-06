const express = require("express");
const carRouter = require("./carRouter");

const app = express();

app.use(express.json());

app.use("/api/cars", carRouter);

app.get("/", (req, res) => {
  res.send("data schema project");
});

module.exports = app;
