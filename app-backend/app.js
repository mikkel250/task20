require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const app = express();
app.use(cors());

const mongoConnectString = process.env.MONGO_URI;
const test = require('./routes/test.js');

// add & configure middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const taskRoutes = express.Router();
app.use('/task', taskRoutes);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

app.use('/test', test); 

// add the routers for CRUD of tasks, users
require('./routes/task.routes.js')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//connect to DB
mongoose.connect(mongoConnectString, {
  useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to database.");

  }).catch(err => {
    console.log('Could not connect to database. Exiting now...', err);
    process.exit();
});


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
