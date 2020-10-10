const db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  app.get("/", (req, res) => {
    db.People.findAll({}).then(function (response) {
      res.json(response);
    });
  });
};
