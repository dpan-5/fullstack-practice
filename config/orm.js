var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
  // selectAndOrder: function(whatToSelect, table, orderCol) {
  //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },

  selectWhere: function (tableInput, colToSearch, valOfCol, callback) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },

  findWhoHasMost: function (
    tableOneCol,
    tableTwoForeignKey,
    tableOne,
    tableTwo
  ) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [
        tableOneCol,
        tableOneCol,
        tableOne,
        tableTwo,
        tableTwo,
        tableTwoForeignKey,
        tableOne,
        tableOneCol,
      ],
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },

  joinWhereCond: function (
    tableOne,
    tableTwo,
    tableOneCol,
    tableTwoCol,
    queryInput,
    queryVal,
    callback
  ) {
    const queryString =
      "select * from ?? inner join ?? on ??.?? = ??.?? where ??.?? = ?;";

    connection.query(
      queryString,
      [
        tableOne,
        tableTwo,
        tableOne,
        tableOneCol,
        tableTwo,
        tableTwoCol,
        tableTwo,
        queryInput,
        queryVal,
      ],
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

module.exports = orm;
