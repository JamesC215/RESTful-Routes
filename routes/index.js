var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/climbs');
});


router.get('/auth/google', passport.authenticate(
  'google',
  {

    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/climbs',
    failureRedirect: '/climbs'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/climbs');
  });
});

module.exports = router;
