const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const session = require('express-session');
const express = require('express');
const router = express.Router();

const strategy = new Auth0Strategy({
  domain: process.env.domain,
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL
},
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user

    
    return done(null, profile);
  }
);

router.use(session({
  secret: process.env.password,
  cookie: {maxAge: 7200000},
  resave: true,
  saveUninitialized: true

}));

router.use(passport.initialize());
router.use(passport.session());

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(strategy);

module.exports = router;