require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const constants = require("./constants/constants");
const dbConfig = require("./config/database");

const booksRoute = require("./routes/v1/booksRoute");

const app = express();
const port = process.env.SERVER_PORT || 5443;

mongoose.connect(dbConfig.url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", booksRoute);

app.listen(port, () => {
  console.log(`${constants.SERVER_LISTENING_TEXT} ${port}`);
});
