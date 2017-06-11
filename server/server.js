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

app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({
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
    return res.status(400).send({'error' : 'devi inserire una username o password'}); // prima al posto di send c'era end.
  }
  if (body.username !== user.username || body.password !== user.password) {
    return res.status(401).send({'error' : 'username o password errati'});
  }
  next();
}
