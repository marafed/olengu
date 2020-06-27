var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");


db = new mysql.createConnection({
  host: "db",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

dbcon = db.connect( function(err) {
    if (err) throw err;
    console.log("database connected")
    let init_user = "create table if not exists "
                +"user (id int not null auto_increment, "
                +"nome varchar(20) not null, "
                +"cognome varchar(20) not null, "
                +"email varchar(30) not null, "
                +"birthday date not null, "
                +"password varchar(512) not null, "
                +"primary key (id)"
                +");";
    let init_vattelappesca = "create table if not exists "
                +"miatabella (id int not null auto_increment, "
                +"nome varchar(20) not null, "
                +");";
    db.query(init_user);
    //db.query(init_vattelappesca);
    console.log("database initialized");
});



var authRouter = require('./routes/auth');
var profileRouter = require('./routes/profile');
var searchRouter = require('./routes/search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/search', searchRouter);

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
