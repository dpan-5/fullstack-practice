const db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  app.get("/", (req, res) => {
    db.People.findAll({}).then(function (response) {
      //   console.log("TEST HERE " + JSON.stringify(response));
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
    // console.log("NEXT TEST " + JSON.stringify(body));
    db.People.create(body).then(function (results) {
      res.json(results);
    });
  });

  app.delete("/api/people/:id", (req, res) => {
    var id = req.params.id;
    db.People.destroy({
      where: { id: id },
    }).then(function (results) {
      res.json(results);
    });
  });

  app.put("/api/people/", (req, res) => {
    body = req.body;
    console.log(body);
    console.log(body.id.id);
    // console.log($(this).text());
    db.People.update(
      {
        person_name: body.person_name,
        city_name: body.city_name,
        age: body.age,
      },
      { where: { id: body.id.id } }
    ).then(function (response) {
      res.json(response);
    });
  });
};
