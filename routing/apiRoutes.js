//required data files/packages
var friends = require("../app/data/friends.js");

//exports this module to the server, close at the bottom of the file. 
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

app.post("api/friends", function(req, res) {
  var user = [];
  var chosenDifference = 0;
  var chosenFriend;
  
  for (var i = 0; i < friendsArr.length; i++) {
      var totalDifference = 0;
      for (var k = 0; k < friendsArr[i].scores.length; k++) {
          totalDifference += Math.abs(friendsArr[i].scores[k] - user[k]);
      }
      if (chosenDifference < totalDifference) {
          chosenDifference = totalDifference;
          chosenFriend = friendsArr[i];
      }
      console.log(user);
      console.log(friendsArr);
      console.log(chosenDifference);
      console.log(chosenFriend);

  }

  res.json(chosenFriend);

});


//make sure this is at the end of the file -- closes module.exports. 
}