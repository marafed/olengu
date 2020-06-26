var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var hash = crypto.createHash('sha512');

router.use(express.json())

/* GET users listing. */
router.post('/register', function(req, res, next) {
  res.send('auth');
});

router.post('/login', [
    check('email').isEmail().normalizeEmail().trim().escape().stripLow(),
    check('password').isLength({min: 5}).trim().escape().stripLow()
  ],
  function(req, res, next) {
    var email = res.body["email"];
    var pass = res.body["password"];

    var hashedpass = hash.update(pass, 'utf-8').digest('hex');

    queryres = db.query("select id from user where email = '" + email + "' and password = '" + hashedpass + "';");
    
    console.log(queryres);
    res.send(queryres);
  }
);

router.post('/insertitem', function(req, res, next) {
  console.log(req.body);
  res.send('done');
});

module.exports = router;
