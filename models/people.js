const { Sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var People = sequelize.define("People", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    person_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        // allowNull: false,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isThreat: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return People;
};
