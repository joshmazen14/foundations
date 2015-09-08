//Problem: We need a simple way to look at a user's badge count and Javascript points.
//Solution: Use node.js to connect to Treehouse's API to get profile information to print out.
var http = require("http");



//Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
  console.log(message);
}

//Print out error messages
function printError(error) {
  console.error(error.message)
}

function get(username){
  //Connect to the API URL (http://teamtreehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";
    //Read the data
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      if (response.statusCode === 200) {
        try{
          //Parse the data
          var profile = JSON.parse(body)
          //Print the data out
          printMessage(username, profile.badges.length, profile.points.Javascript)
        } catch(error) {
          //Parse error
          printError(error)
        }
      }
      else {
        //Status Code Error
        printError({message: "There was a problem getting information for the user " + username + ". ("+http.STATUS_CODES[response.statusCode] +")"})
      }
    });
    
    
  });
  
  //Connection error
  request.on("error", printError)
}

module.exports.get = get;