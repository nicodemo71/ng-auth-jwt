var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');

var user = {
  username: 'plus',
  password: '12345'
}

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/random-user',function(req, res){
  var user = faker.helpers.userCard();
  user.avatar = faker.image.avatar();
  res.json(user);
})

app.post('/login', authenticate, function (req, res) {
  res.send(user);
})

app.listen(3000, function(){
  console.log('app started listen on port 3000');
})


function authenticate(req, res, next) {
  var body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end('devi inserire una username o password');
  }
  if (body.username !== user.username || body.password !== user.password) {
    res.status(401).end('username o password errati');
  }
  next();
}