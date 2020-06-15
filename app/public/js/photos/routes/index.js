var express = require('express');
var fs = require("fs");
var path = require('path');
var router = express.Router();

/* GET index */
router.get('/', function(req, res, next) {
  let answer = fs.readFileSync('templates/header.html');
  answer += fs.readFileSync('pages/index.html');
  answer += fs.readFileSync('templates/footer.html');

  res.set('Content-Type', 'text/html');
  res.send(answer);
});

/* GET become_host */
router.get('/become_host', function(req, res, next) {
  let answer = fs.readFileSync('templates/header.html');
  answer += fs.readFileSync('pages/become-host.html');
  answer += fs.readFileSync('templates/footer.html');

  res.set('Content-Type', 'text/html');
  res.send(answer);
});

/* GET login */
router.get('/login', function(req, res, next) {
  let answer = fs.readFileSync('templates/header.html');
  answer += fs.readFileSync('pages/login.html');
  answer += fs.readFileSync('templates/footer.html');

  res.set('Content-Type', 'text/html');
  res.send(answer);
});

/* GET register */
router.get('/register', function(req, res, next) {
  let answer = fs.readFileSync('templates/header.html');
  answer += fs.readFileSync('pages/register.html');
  answer += fs.readFileSync('templates/footer.html');

  res.set('Content-Type', 'text/html');
  res.send(answer);
});

module.exports = router;
