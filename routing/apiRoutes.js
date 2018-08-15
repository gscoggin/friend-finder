//required data files/packages
var friends = require("../app/data/friends.js");

module.exports = function(app) {

//routes to send and receive data to the server. 
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
  var newSurvey = req.body;

  console.log(newSurvey);

  friends.push(newSurvey);

  res.json(newSurvey);

});

}
