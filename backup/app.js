var users = require('./users');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container</body></html>');
});

app.get("/user", function (req, res) {
  res.json(users.findAll());
})

app.listen(3000);
console.log('Running on http://localhost:3000');
