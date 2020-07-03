var mysql = require('mysql');

db = new mysql.createConnection({
  host: "db",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});


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

module.exports = db;