var mysql = require('mysql');

var connection = new mysql.createConnection({
    host: "db",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });


connection.connect(function(err) {
    if (err) {
      console.log("failed to connect to db");
      throw err;
    };

    console.log("database connected");
    
    let init_user = "create table if not exists user ( id_usr int(32) auto_increment, is_host bool default null, nome varchar(16) default null, cognome varchar(16) default null, data_nascita date default null, email varchar(30) default null, pswd varchar(512) default null, guadagno_host int(32) default null, primary key (id_usr));";
    let init_annunci = "create table if not exists annunci ( id_ann int(32) auto_increment, ref_id_usr int(32) default null, nome_annuncio varchar(150) default null, luogo varchar(300) default null, descrizione varchar(300) default null, attrazioni varchar(300) default null, indirizzo varchar(300) default null, is_bnb bool default null, n_ospiti int(32) default null, prezzo_notte int(32) default null, n_letti_singoli int(10) default null, n_letti_matr int(10) default null, n_divano_letto int(10) default null, n_camere int(20) default null, n_bagni int(10) default null, colazione bool default null, AC bool default null, parcheggio bool default null, wifi bool default null, lavatrice bool default null, baby_friendly bool default null, primary key (id_ann));";
    let init_prenotazioni = "create table if not exists prenotazioni ( id_prenotazione int(32) auto_increment, ref_id_usr int(32) default null, ref_id_ann int(32) default null, check_in_giorno int(32) default null, check_in_mese int(32) default null, check_in_anno int(32) default null, check_out_giorno int(32) default null, check_out_mese int(32) default null, check_out_anno int(32) default null, stato varchar(255) default null, tot_pagato int(255) default null, primary key(id_prenotazione));";
    let init_login = "create table if not exists session (ref_id_usr int(32) ,token varchar(80) , primary key(ref_id_usr,token));";
    connection.query(init_user);
    connection.query(init_annunci);
    connection.query(init_prenotazioni);
    connection.query(init_login);

    console.log("database initialized");
});

module.exports = connection;