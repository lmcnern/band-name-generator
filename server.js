'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

var Adjective = require('./lib/adjectives.js');
var Verb = require('./lib/verbs.js');
var Noun = require('./lib/nouns.js');
var getRandomWord = require('./lib/getRandomWord.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

var postWord = require('./lib/postWord.js');


app.get('/adjectives', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verbs', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/nouns', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/adjectives', function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.post('/verbs', function(req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});

app.post('/nouns', function(req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server live at http://localhost:' + port);
});
