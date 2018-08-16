//required data files/packages
var friends = require("../app/data/friends.js");

//exports this module to the server, close at the bottom of the file. 
module.exports = function(app) {

//routes to send and receive data to the server. 
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// app.post("/api/friends", function(req, res) {
//   var newSurvey = req.body;

//   console.log(newSurvey);

//   friends.push(newSurvey);

//   res.json(newSurvey);

// });

app.post("/api/friends", function(req, res) {
  var newUser = req.body;
  
  console.log(newUser);
  var userScores = newUser.scores;
  // user.push(newUser);
  var chosenDifference = 0;
  var chosenFriend;
  
  for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for (var k = 0; k < friends[i].scores.length; k++) {
          totalDifference += Math.abs(parseInt(friends[i].scores[k]) - parseInt(userScores[k]));
      }
      if (chosenDifference < totalDifference) {
          chosenDifference = totalDifference;
          chosenFriend = friends[i];
      }
      console.log(newUser);
      console.log(friends);
      console.log(chosenDifference);
      console.log(chosenFriend);
  }
  friends.push(newUser);
  res.json(chosenFriend);

});


//make sure this is at the end of the file -- closes module.exports. 
}