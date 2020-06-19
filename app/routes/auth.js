var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('auth');
});

router.post('/login', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('auth');
});

module.exports = router;
