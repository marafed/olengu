var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var hash = crypto.createHash('sha512');
var db = require('../db');
const { check } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const { send } = require('process');
router.use(express.json());
router.use(express.urlencoded({extended: true}));
var app = express();


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.post('/login', function(request, response, next) {
  var email = request.body.email;
  var password = request.body.password;
  console.log("---"+email +"-------"+password);
  let hash = bcrypt.hashSync(password, 10);

  if(bcrypt.compareSync(password, hash)) {
		console.log("match" + password +"-----"+hash)
	} else {
		console.log("Doesn't match")
		}
  var sql = "SELECT * FROM user WHERE email = \""+email+"\" and password = \""+hash+"\" ;";
  
	db.query('SELECT * FROM user WHERE email= ? AND password = ?', [email,hash], function(error, results, fields){
		console.log(JSON.stringify(results));
		if(JSON.stringify(results).length>0) {
			console.log("presente")
			request.session.email= email;
			response.redirect('/');
			}
		else {
			response.send('Incorrect Us');
		}
	  });
	  
	});
	
router.post('/register',function(req,res,next){
	var nome =req.body.name;
	var cognome = req.body.surname;
	var bithday = req.body.birthday;
	var email = req.body.email;
	var password = req.body.password;

	console.log(nome +"-"+  cognome +"-"+  bithday +"-"+  email  +"-"+ password);
	//cripto la password //
	let hash = bcrypt.hashSync(password, 10);
	console.log("password cryptata _____" + hash);

	
	var sql = "INSERT INTO user (nome,cognome,email,birthday,password) VALUES (\""+nome+"\", \""+cognome+"\", \""+email+"\", \""+bithday+"\", \""+hash+"\" );" ;
	db.query(sql,function(err,results){
		if (err) throw err;
      console.log("Utente inserito");
	});
	//giusto per vedere quello che mi dava
	var sql = "SELECT * FROM user WHERE email = \""+email+"\" and password = \""+hash+"\" ;";

	db.query(sql, function(error, results, fields){
		if(error){
			throw error;
			}
		else {
			JSON.stringify(results);
			res.send(JSON.stringify(results)); 
		}
	  });


	
});


router.post('/insertitem', function(req, res, next) {
  console.log(req.body);
  res.send('done');
});

module.exports = router;
