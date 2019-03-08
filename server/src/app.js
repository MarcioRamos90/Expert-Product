const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan")

const logger = require('./util/logger')

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}))

// add body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test method
app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

// catch all unhandler errors
app.use((req, res, err) => {
  console.error(err.stack);
  res.status(500).send(err);
});

module.exports = app;
