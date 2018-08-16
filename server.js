//required NPM dependencies
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

//setup Express
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//including the data from apiRoutes and the HTML from htmlRoutes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});