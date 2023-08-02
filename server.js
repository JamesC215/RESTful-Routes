var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();

require('./config/database');

require('./config/passport');

const indexRouter = require('./routes/index');
const climbsRouter = require('./routes/climbs');
const reviewsRouter = require('./routes/reviews');
const equipmentsRouter = require('./routes/equipments');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: true
// }));
app.use(session({
  secret: 'secretidhere', 
  resave: false, 
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());


app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);
app.use('/climbs', climbsRouter);
app.use('/', reviewsRouter);
app.use('/', equipmentsRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
