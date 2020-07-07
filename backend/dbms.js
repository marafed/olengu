'use strict';
var sql = require('./db');
var uuid = require("uuid/v4");

var Dbms = function(dbms){
    this.status = task.status;
    this.created_at = new Date();
};

Dbms.loginX = function (loginjson, apires) {

    let statement = "SELECT * FROM user WHERE email = ? AND pswd = ?";
    let values = [loginjson.email, loginjson.password];

    var dbres = sql.query(statement, values, (err, res) => {
        if(err) {
            return [false, err];
        }
        if (res[0].id) {
            return [true, res[0].id];
        }
        return [false, null];
    });
    if (dbres[0] == false) {
        apires.send(JSON.stringify({"status":false,"token":""}));
    }
    if (dbres[0] == true) {
        var token = Dbms.newToken(dbres[1]);
        if (token[0] == false) {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
        if (token[0] == true) {
            apires.send(JSON.stringify({"status": true, "token": token[1]}));
        }
    }
};

Dbms.newToken = function (id) {
    let statement = "insert into session(ref_id_usr, token) values(?, ?);"
    let token = uuid() + uuid();
    return sql.query(statement, [id, token], (err, res) => {
        if (err) {
            console.log("unable to generate token for uid: ", id);
            console.log(err);
            return [false, null];
        }
        else {
            return [true, token];
        }
    });
}

Dbms.register_user = function (registrationjson, result) {
    console.log("siamo nel dbms")


   
    let statement = "INSERT INTO user (is_host, nome, cognome, data_nascita, email, pswd) VALUES(?,?,?,?,?,?)";
    let values = [0,registrationjson.firstname, registrationjson.surname, registrationjson.birthday, registrationjson.email, registrationjson.password];
    
 

      sql.query(statement, values, function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
    });
};


Dbms.get_annunci_by_user_id = function (user_id, result) {

    let statement = "SELECT * FROM annunci WHERE ref_id_usr = ? "

    sql.query(statement, user_id, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
        result(null, res);
    }
});
};

Dbms.insert_annuncio = function (json, result) {   
        let statement = `INSERT INTO annunci(ref_id_usr,nome_annuncio,luogo,indirizzo,descrizione,attrazioni,is_bnb,n_ospiti,prezzo_notte,n_letti_singoli,n_letti_matr,n_divano_letto,n_camere,n_bagni,colazione,AC,parcheggio,wifi,lavatrice,baby_friendly)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        let values = [json.ref_id_usr,json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.lavatrice,json.baby_friendly];

        sql.query(statement, values, function (err, res) {
                if(err) {
                    result(err, res)
                  }
                else{
                    result(null, res);
                }
            });
};



Dbms.update_annuncio = function (json, result) {

    console.log(json)

    let statement = 'UPDATE annunci SET nome_annuncio = ?,luogo = ?,indirizzo = ?,descrizione = ?,attrazioni = ?,is_bnb = ?,n_ospiti = ?,prezzo_notte = ?,n_letti_singoli = ?,n_letti_matr = ?,n_divano_letto = ?,n_camere = ?,n_bagni = ?,colazione = ?,AC = ?,parcheggio = ?,wifi = ?,lavatrice = ?,baby_friendly =? where id_ann = ?'
    let values = [json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.lavatrice,json.baby_friendly,json.id_ann];

    sql.query(statement, values, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
        }
    });
};

Dbms.get_annunci_by_luogo = function (luogo, result) {
 
    let statement = "SELECT * FROM annunci WHERE luogo = ? "

    sql.query(statement, luogo, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
                result(null, res);
    }
});
};

Dbms.insert_prenotazione = function (json, result) {

    var statement = `INSERT INTO prenotazioni(ref_id_usr,ref_id_ann,check_in_giorno,check_in_mese,check_in_anno,check_out_giorno,check_out_mese,check_out_anno,stato,tot_pagato)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    var values = [json.ref_id_usr,json.ref_id_ann,json.check_in_giorno,json.check_in_mese,json.check_in_anno,json.check_out_giorno,json.check_out_mese,json.check_out_anno,json.stato,json.tot_pagato];

    sql.query(statement, values, function (err, res) {
            if(err) {
                result(err, null);
              }
            else{
                result(null, res);
            }
        });
};

Dbms.get_annuncio = function (json,result) {
    var json = JSON.parse(JSON)
    let statement = 'SELECT * FROM annunci WHERE id_ann = ?';
    let values = [json.id_ann]
    sql.query(statement, luogo, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
        result(null, res[0]);
    }
});
};

Dbms.get_prenotazioni_by_user_id = function (id,result) {
    
    let statement = 'SELECT * FROM prenotazioni WHERE ref_id_usr = ?';
  
    sql.query(statement, id, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
        result(null, res);
    }
});
};


Dbms.update_prenotazione = function (json, result) {
    

    console.log(json);
    var obj = JSON.parse(json);
  

    let statement = 'UPDATE prenotazioni SET stato = ? where id_prenotazione = ?'
    let values = [obj.stato, obj.id_prenotazione];

    sql.query(statement, values, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};

Dbms.delete_prenotazione = function (id, result) {

    let statement = 'DELETE FROM prenotazioni where id_prenotazione = ?'

    sql.query(statement,id, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};



module.exports = Dbms;