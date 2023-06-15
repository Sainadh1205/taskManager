const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("express").Router();

const app = express();

app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, (error) => {
  if (!error) {
    console.log(
      "server is successfully running and App is listening on port " + 3000
    );
  } else {
    console.log("error occured, server can't start ", error);
  }
});
