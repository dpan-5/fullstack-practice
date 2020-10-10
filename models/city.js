const { Sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var City = sequelize.define("City", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        // allowNull: false,
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  });
  return City;
};
