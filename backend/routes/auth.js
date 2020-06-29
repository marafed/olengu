var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var hash = crypto.createHash('sha512');
var db = require('../db');
const { check } = require('express-validator');


router.use(express.json());
router.use(express.urlencoded({extended: true}));

/* GET users listing. */
router.post('/register', function(req, res) {
  res.send(req.params);
});

router.get('/register', function(req, res) {
  res.send(req.params);
});

router.post('/login',
    function(req, res) {
      var email = ""+req.body.email;
      var pass = ""+req.body.password;
      console.log(""+email+" - "+pass);
      console.log(req.body);

      //var hashedpass = hash.update(pass, 'utf-8').digest('hex');

      db.query("select * from user;", (err, res) => {
        console.log(res);
      });
      res.send("oof");
    }
);

router.post('/insertitem', function(req, res, next) {
  console.log(req.body);
  res.send('done');
});

module.exports = router;
