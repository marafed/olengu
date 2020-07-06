var mysql = require('mysql');

db = new mysql.createConnection({
  host: "db",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

module.exports = db.connect( function(err) {
    if (err) throw err;
    console.log("database connected")
    let init_user = "create table if not exists user ("
      +"id_usr int(32) not null auto_increment,"
      +"is_host bool,"
      +"nome varchar(16) not null,"
      +"cognome varchar(16) not null,"
      +"data_nascita date,"
      +"email varchar(30) not null,"
      +"pswd varchar(512) not null,"
      +"guadagno_host int(32),"
      +"primary key (id_usr)"
      +");";
    let init_filtro = "create table if not exists filtro ("
        +"id_filtri int(32) not null,"
        +"is_bnb bool not null,"
        +"n_ospiti int(32) not null,"
        +"prezzo_notte int(32) not null, "
        +"n_letti_singoli int(10),"
        +"n_letti_matr int(10),"
        +"n_divano_letto int(10), "
        +"n_camere int(20) not null,"
        +"n_bagni int(10) not null, "
        +"colazione bool,"
        +"AC bool,"
        +"parcheggio bool,"
        +"wifi bool,"
        +"lavatrice bool,"
        +"baby_friendly bool,"
        +"kit_cortesia bool,"
        +"tv bool,"
        +"asciugacapelli bool,"
        +"zona_lavoro bool,"
        +"animali_domestici_ammessi bool,"
        +"fumo bool,"
        +"piscina bool,"
        +"idromassaggio bool,"
        +"sauna bool,"
        +"spa bool,"
        +"palestra bool,"
        +"immerso_natura bool,"
        +"vista_mare bool,"
        +"primary key(id_filtri)"
    +");"
    let init_luogo = "create table if not exists luogo ("
      +"id_luogo int(32) not null,"
      +"nazione varchar(30) not null,"
      +"regione varchar(30) not null,"
      +"provincia varchar(30) not null,"
      +"paese varchar(30) not null,"
      +"via varchar(50) not null,"
      +"numero int(8),"
      +"info_aggiuntive varchar(300),"
      +"primary key (id_luogo)"
    +");";
    let init_annuncio = "create table if not exists annuncio ("
      +"id_ann int(32) not null,"
      +"ref_id_usr int(32) not null,"
      +"nome_annuncio varchar(150) not null,"
      +"ref_id_luogo int(32) not null,"
      +"ref_id_filtri int(32) not null,"
      +"descrizione varchar(300), "
      +"attrazioni varchar(300),"
      +"primary key (id_ann)"
    +");";
    let init_prenotazione = "create table if not exists prenotazione ("
      +"ref_id_usr int(32) not null,"
      +"ref_id_ann int(32) not null, "
      +"check_in date not null, "
      +"check_out date not null, "
      +"primary key(ref_id_usr, ref_id_ann, check_in)"
    +");"
    db.query(init_user);
    db.query(init_filtro);
    db.query(init_luogo);
    db.query(init_annuncio);
    db.query(init_prenotazione);
    

    console.log("database initialized");
});