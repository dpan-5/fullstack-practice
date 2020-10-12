// const express = require("express");
// // const mysql = require("mysql");
// const exphbs = require("express-handlebars");
// const connection = require("./config/connection");
// const orm = require("./config/orm");
const exphbs = require("express-handlebars");
const http = require("http");
const express = require("express");
const db = require("./models");
const path = require("path");
const fs = require("fs");
const app = express();
var PORT = process.env.PORT || 8080;
const httpServer = http.createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);

db.sequelize.sync().then(function () {
  httpServer.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
