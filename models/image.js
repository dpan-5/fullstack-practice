const { Sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240],
        // allowNull: false,
      },
    },
  });
  return Image;
};
