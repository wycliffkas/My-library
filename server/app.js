const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");
const errorController = require("./controllers/error");

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/", mainRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ error: message, data: data });
});

app.use(errorController.get404);

mongoose
  .connect(
    process.env.MONGO_DB_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((error) => console.log(error));
