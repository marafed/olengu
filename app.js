var express = require("express")
var mysql = require('mysql')
var fs = require("fs")

db = new mysql.createConnection({
    host: "db",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

initdb = function (db)
dbcon = db.connect(function(err) {
    if (err) throw err
    console.log("database connected")
    let initdb = "create table if not exists "
                +"user (id int not null auto_increment, "
                +"nome varchar(20) not null, "
                +"cognome varchar(20) not null, "
                +"email varchar(30) not null, "
                +"birthday date not null, "
                +"password varchar(512) not null, "
                +"primary key (id)"
                +");"
    db.query(initdb)
    console.log("database initialized")
})

var app = express()

register = function (req, res) {
    let name = req.param("nome")
    let surname = req.param("cognome")
    let birthday = req.param("birthday")
    let email = req.param("email")
    let pass = req.param("pswd")

    db.query(aggiungi l'utente)

}


app.get("/", function (req, res) {
    res.redirect("/register")
})
app.get("/register", register)


app.listen(8080)