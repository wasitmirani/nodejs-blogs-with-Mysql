const express = require("express");
const app = express();
// var api = require('./routes/api');
var router = require("./router");

// app.use("/api", api);
app.use("/api", router);
app.listen(3000);
