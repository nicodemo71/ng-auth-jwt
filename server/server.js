var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
/*
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
*/
var jwtSecret = "fkajoi3/zmko";

var user = {
  username: 'plus',
  password: '12345'
}
/*
const FACEBOOK_APP_ID = 'xxxxxxxxxxxxxxxxx';
const FACEBOOK_APP_SECRET = 'xxxxxxxxxxxxxxxxxxxxxxxx';
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
*/

var app = express();

app.use(cors());
app.use(bodyParser.json());
// note: expressjwt evita di controllare il percorso di login perche' e' il punto di inizio.
app.use(expressJwt({secret: jwtSecret}).unless({path: ['/login']}));

// note: express error handling (4 parameters)
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(403).send({error: err.message });
  } else if (err.name == 'JWTExpressError') {
    return res.status(404).send({error: err.message });
  } else {
    next(err);
  }
});

app.get('/random-user',function(req, res){
  var user = faker.helpers.userCard();
  user.avatar = faker.image.avatar();
  res.json(user);
})

/**
 * exp (expiration) token -> number of seconds from 1970-01-01T00:00:00Z UTC
 */
app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 /** 60*/), /* Signing a token with 1 hour of expiration */
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
    return res.status(400).send({error : 'devi inserire una username o password'});
  }
  if (body.username !== user.username || body.password !== user.password) {
    return res.status(401).send({error : 'username o password errati'});
  }
  next();
}


