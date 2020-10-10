// const express = require("express");
// // const mysql = require("mysql");
// const exphbs = require("express-handlebars");
const connection = require("./config/connection");
const orm = require("./config/orm");
const exphbs = require("express-handlebars");

const express = require("express");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  orm.joinWhereCond(
    "cities",
    "people",
    "city_name",
    "city_name",
    "is_threat",
    1,
    function (result) {
      //   console.log(result);
      res.render("index", {
        threats: result,
      });
    }
  );
});

app.post("/api/people", function (req, res) {
  connection.query(
    "insert into people (person_name, age, is_threat, city_name) values (?, ?, ?, ?)",
    [req.body.name, req.body.age, req.body.threat, req.body.city],
    function (err, data) {
      if (err) throw err;
      res.status(200).end();
    }
  );
});

app.get("/api/image", function (req, res) {
  connection.query("select * from image", function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

app.delete("/api/people/:id", function (req, res) {
  var id = req.params.id;
  connection.query("delete from people where id=?", [id], function (err, data) {
    if (err) throw err;
    res.status(200).end();
  });
});

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
