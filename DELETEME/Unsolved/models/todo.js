const { Sequelize, Op, Model, DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes){
    var Todo = sequelize.define("Todo",{
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140],
          // allowNull: false,
        }
        },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        }
    });
    return Todo;
};