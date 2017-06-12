var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var jwtSecret = "fkajoi3/zmko";

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

/**
 * exp token -> number of seconds from 1970-01-01T00:00:00Z UTC
 */
app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60), /* Signing a token with 1 hour of expiration */
    username: user.username
  }, jwtSecret);
  res.send({
    token: token,
    user: user
  });
})

app.listen(3000, function(){
  console.log('app started listen on port 3000');
})


function authenticate(req, res, next) {
  var body = req.body;
  if (!body.username || !body.password) {
    // note: inizialmente invece di "send" era "end" ma la response non inviava un oggetto json
    return res.status(400).send({'error' : 'devi inserire una username o password'});
  }
  if (body.username !== user.username || body.password !== user.password) {
    return res.status(401).send({'error' : 'username o password errati'});
  }
  next();
}
