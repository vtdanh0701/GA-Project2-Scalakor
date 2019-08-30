require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
// Module allows use of sessions
const session = require('express-session');
// Imports passport local strategy
const passport = require('./config/passportConfig');
// module for flash messages
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');  
const helmet = require('helmet');
const methodOverride =require('method-override');
// This is only used by the session store
const db = require('./models');

const app = express();

// This line makes the session use sequelize to write session data to a postgres table
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sessionStore = new SequelizeStore({
  db: db.sequelize,
  expiration: 1000 * 60 * 30
});

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts);
app.use(helmet());
app.use(methodOverride('_method'))

// Configures express-session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

// Use this line once to set up the store table
sessionStore.sync();

// Starts the flash middleware
app.use(flash());

// Link passport to the express session
// MUST BE BELOW SESSION
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});
app.get('/profile/collection', isLoggedIn, function(req,res){
  db.user.findOne({
    where:{
      id: req.user.id,
    },
    include: [db.chord]
  }).then(function(user){
    res.render('collection',{user})
  })
})
app.post("/chords/detail", function(req,res){
  db.user.findByPk(req.user.id)
  .then(function(user){
    db.chord.findByPk(req.body.chordId)
    .then(function(chord){
      user.addChord(chord).then(function(){
        res.redirect('/profile/collection')
      })
    })
  })
})
app.delete('/profile/collection/:id', function(req,res){
  db.user.findByPk(req.user.id)
  .then(function(user){
    db.chord.findByPk(req.params.id)
    .then(function(chord){
      user.removeChord(chord).then(function(){
        res.redirect('/profile/collection')
      })
    })
  })
})
app.put('/profile/:id',function(req, res){
  var id = parseInt(req.params.id);    
  db.user.update({
      bio: req.body.bio
  },{
      where:{
          id: id
      }
  }).then(function(){

    res.redirect('/profile')
  })
})



app.use('/auth', require('./controllers/auth'));
app.use('/chords',isLoggedIn, require('./controllers/chord'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
