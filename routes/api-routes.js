const db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  app.get("/", (req, res) => {
    db.People.findAll({}).then(function (response) {
      console.log("TEST HERE " + JSON.stringify(response));
      res.render("index", { people: response.map((re) => re.toJSON()) });
    });
  });

  app.get("/api/people", (req, res) => {
    db.People.findAll({}).then(function (response) {
      res.json(response);
    });
  });

  app.get("/api/people/:id", (req, res) => {
    var id = req.params.id;
    db.People.findOne({ id: id }).then(function (response) {
      res.json(response);
    });
  });

  app.post("/api/people", function (req, res) {
    var body = req.body;
    console.log("NEXT TEST " + JSON.stringify(body));
    db.People.create(body).then(function (results) {
      res.json(results);
    });
  });
};
