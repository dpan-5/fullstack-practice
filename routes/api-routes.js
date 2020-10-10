const db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  app.get("/", (req, res) => {
    db.People.findAll({}).then(function (response) {
      res.render("index", { response });
    });
  });

  app.post("/api/people", function (req, res) {
    // connection.query(
    //   "insert into people (person_name, age, is_threat, city_name) values (?, ?, ?, ?)",
    //   [req.body.name, req.body.age, req.body.threat, req.body.city],
    //   function (err, data) {
    //     if (err) throw err;
    //     res.status(200).end();
    //   }
    // );
    var body = req.body;
    db.create(body).then(function (results) {
      res.json(results);
    });
  });
};
