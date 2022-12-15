require("dotenv").config();
const express = require("express");
const dbConnection = require("./config/dbConnection");
const app = express();

dbConnection();

module.exports = app;
