var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var test = require('./routes/test.js');

const bodyParser = require('body-parser');
// add & configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // use body-parser middleware to parse JSON

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

app.use('/test', test); 

// add the routers for CRUD of tasks, users
require('./routes/task.routes.js')(app);

//app.use('./')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// INFO ON ROUTERS -- COULD JUST USE THE STANDARD METHOD AS WELL
// https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
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
