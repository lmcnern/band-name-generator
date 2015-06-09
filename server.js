var express = require("express"); //looking for express.js in node_modules directory
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port: ' + port);
});

app.get("/", function (req, res) {
  res.send("hello universe!");
});

var quotes = [
 "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];
app.get("/quote", function (req, res){
 var randomIndex =
Math.floor(Math.random()*quotes.length);
 res.send(quotes[randomIndex]);
});

var adj = [
"blue",
"bouncy",
"happy",
"hype",
"thirsty",
"ancient",
"slippery",
"swag"
];

app.get("/adjective", function (req, res){
  var randomIndex =
  Math.floor(Math.random()*adj.length);
  res.json({word: adj[randomIndex]});
});
