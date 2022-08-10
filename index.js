var express = require("express");
var connection = require("./connection");
var productRouter = require("./routes/product");
var app = express();

app.use(express.urlencoded({ exrtended: true }));
app.use(express.json());
app.use("/product", productRouter);

module.exports = app;
