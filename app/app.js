//var users = require('./users');
var express = require('express');
var bodyParser = require('body-parser');
//var mongojs = require('./db');
var mongojs = require('mongojs');
var db = require('./db').connect;
var app = express();

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
  db.users.count(function(err, result){
    if(result <= 0){
      db.users.insert(users.findAll(), function(err, docs){
        //insert new data
      });
    }
  res.send('<html><body>Hello from Node.js</body></html>');
  });
});

app.get('/user', function(req, res) {
  db.users.find(function(err, docs){
    res.json(docs);
  });
});

app.get('/find/:id', function(req, res){
  var id = req.params.id;
  db.users.findOne({_id: mongojs.ObjectId(id)}, function(err, docs) {
    res.json(docs);
  });
});

app.post('/newuser', function(req, res) {
  var json = req.body;
  res.send('Add new ' + json.name + ' Completed'); 
});

app.listen(3000);
console.log('Running on http://localhost:3000');
