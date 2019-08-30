const express = require('express');
const db = require('../models');
const passport = require('../config/passportConfig');
const router = express.Router();

//* GET /auth/signup - sends the signup form
router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

//* GET /auth/signup - recieves the data from the form above
router.post('/signup', function(req, res) {
  db.user.findOrCreate({
    where: {email: req.body.email}, //? Need to look up the record first 
    defaults: { //? Tell it what data it needs to include if it can't find it...will add name and password and will also add email
      name: req.body.name,
      password: req.body.password,
      bio: req.body.bio
    }
  }).spread(function(user, created) { //? Returns two things not one (usually a promise returns one thing). Returns in an array and spread takes both elements of array and turns it into two elements
    //* Could also use .then(function([user, created])
    if (created) {
      console.log("user was created, not found");
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'Account created and logged in!'
      })(req, res); //! IMMEDIATELY INVOKED FUNCTION EXPRESSION "IIFE"
    } else {
      // console.log("email already exists");
      req.flash('error', 'Email already exists 👿'); // 'error' used to style the message
      res.redirect('/auth/signup');
    }
  }).catch(function(error) {
    // console.log("Error:", error.message);
    req.flash('error', error.message);
    res.redirect('/auth/signup')
  });
});

//* GET /auth/login - sends the login form
router.get('/login', function(req, res) {
  res.render('auth/login');
});

//* POST /auth/login - does the authentication... could be google or facebook if we use O-Auth but now we're using login
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  failureFlash: 'Invalid username and/or password! 👻'
}), function(req, res) {
  req.session.save(function(err) {
    console.log('we are logged in')
    req.flash('logged in');
    res.redirect('/chords');
  })
});

//* GET /auth/logout - deletes the session
router.get('/logout', function(req, res) { // When you logout, it deletes the session from memory
  req.logout();
  console.log('logged out');
  req.flash('success', 'You have successfully logged out');
  // console.log(req.flash());
  // console.log(res.locals.alerts);
  res.locals.alerts = req.flash();
  console.log(res.locals.alerts);
  req.session.destroy(function(err) {
    console.log('we are logged out.')
    res.redirect('/');
  })
});

module.exports = router;