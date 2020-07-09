'use strict';
var sql = require('./db');
const { v4: uuidv4 } = require('uuid');

var Dbms = function(dbms){
    this.status = task.status;
    this.created_at = new Date();
};

Dbms.loginX = function (loginjson, apires) {
    var statement = "SELECT * FROM user WHERE email = ? AND pswd = ?";
    var values = [loginjson.email, loginjson.password];

    sql.query(statement, values, function(err, res) {
        if(err) {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
        else if (res.length) {
            if (res[0].id_usr) {
                console.log("res[0].id_usr: "+res[0].id_usr);
                let token = uuidv4();
                return sql.query("insert into session(ref_id_usr, token) values(?, ?);", [res[0].id_usr, token], (err, res) => {
                    if (err) {
                        console.log("unable to generate token for uid: ", id);
                        console.log(err);
                        apires.send(JSON.stringify({"status":false,"token":""}));
                    }
                    else {
                        apires.send(JSON.stringify({"status": true, "token": token}));
                    }
                });
            }
        }
        else {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
    });
};

//query provvisoria per user_id
Dbms.login_provv= function (loginjson, result) {

    var statement = "SELECT * FROM user WHERE email = ? AND pswd = ?";
    var values = [loginjson.email, loginjson.password];


    sql.query(statement, values, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
        result(null, res[0]);
    }
});
};

Dbms.get_prenotazioni_by_host_id = function (hostid,result) {


    
    let statement = 'SELECT * FROM prenotazioni WHERE host = ?';
  
    sql.query(statement,hostid, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
        result(null, res);
    }
});
};



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


Dbms.get_annunci_by_user_id = function (host, result) {

    let statement = "SELECT * FROM annunci WHERE host = ? "

    sql.query(statement, host, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
          else{
        result(null, res);
    }
});
};


Dbms.get_annunci_by_id = function (id, result) {

    let statement = "SELECT * FROM annunci WHERE id_ann = ? "

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

Dbms.insert_annuncio = function (json, result) {  

        let statement = `INSERT INTO annunci(host,nome_annuncio,luogo,indirizzo,descrizione,attrazioni,is_bnb,n_ospiti,prezzo_notte,n_letti_singoli,n_letti_matr,n_divano_letto,n_camere,n_bagni,colazione,AC,parcheggio,wifi,animali_domestici_ammessi,baby_friendly,tassa_soggiorno)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        let values = [json.host,json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.animali_domestici_ammessi,json.baby_friendly,json.tassa_soggiorno];

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

    let statement = 'UPDATE annunci SET nome_annuncio = ?,luogo = ?,indirizzo = ?,descrizione = ?,attrazioni = ?,is_bnb = ?,n_ospiti = ?,prezzo_notte = ?,n_letti_singoli = ?,n_letti_matr = ?,n_divano_letto = ?,n_camere = ?,n_bagni = ?,colazione = ?,AC = ?,parcheggio = ?,wifi = ?,animali_domestici_ammessi= ?,baby_friendly =? where id_ann = ?'
    let values = [json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.animali_domestici_ammessi,json.baby_friendly,json.id_ann];

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
    var insospeso = "sospeso";
    var statement = `INSERT INTO prenotazioni(host,ref_id_ann,checkin,checkout,stato,tot_pagato,guest)VALUES(?,?,?,?,?,?,?)`;
    var values = [json.host,json.ref_id_ann,json.checkin,json.checkout,insospeso,json.tot_pagato,json.guest];

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

Dbms.get_prenotazioni_by_token = function (token,result) {
    
    let statement = 'SELECT * FROM prenotazioni JOIN session WHERE session.token = ? and session.ref_id_usr = prenotazioni.ref_id_usr';
  
    sql.query(statement, token, function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
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

Dbms.update_user = function (id, result) {
    
    let statement = 'UPDATE user SET is_host = ? where id_usr = ?'
    let values = [1, id];

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


Dbms.update_prenotazione_attiva = function (id, result) {

    console.log(id)

    let stato ="attiva";
    let statement = 'UPDATE prenotazioni SET stato = ? WHERE id_prenotazione = ?';
    let values = [stato,id];

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

Dbms.update_prenotazione_in_corso  = function (id, result) {
    
    let stato ="incorso";
    let statement = 'UPDATE prenotazioni SET stato = ? where id_prenotazione = ?';
    let values = [stato,id];

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

Dbms.get_prenotazioni_attiva = function(id ,result) {
    let stato ="attiva";
    let statement = 'SELECT * FROM prenotazioni WHERE stato = ? and host = ?';
    let values = [stato,id];

    sql.query(statement, values, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
     }
});
}

Dbms.get_prenotazioni_in_corso = function(id ,result) {
    let stato ="incorso";
    let statement = 'SELECT * FROM prenotazioni WHERE stato = ? and host = ?';
    let values = [stato,id];

    sql.query(statement, values, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
     }
});
}
module.exports = Dbms;