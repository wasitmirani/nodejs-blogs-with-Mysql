const { json } = require("body-parser");
const express = require("express");
var router = express.Router();
let con = require("./db_connection");

router.get("/get/posts", (req, res) => {
  console.log("this is root file");

  con.connect(function (err) {
    con.query("SELECT * FROM  posts", function (err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(rows));
    });
  });
});

module.exports = router;
