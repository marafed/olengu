var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
  res.send('auth');
});

router.post('/login', function(req, res, next) {
  res.send('auth');
});

router.post('/insertitem', function(req, res, next) {
  console.log(req.body);
  res.send('done');
});

module.exports = router;
