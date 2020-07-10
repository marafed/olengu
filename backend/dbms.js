'use strict';
var sql = require('./db');
const { v4: uuidv4 } = require('uuid');

var Dbms = function(dbms){
    this.status = task.status;
    this.created_at = new Date();
};

Dbms.logout = function (token, apires) {
    sql.query("DELETE FROM session WHERE token = ? ", token, (err, res) => {
        apires.send("ok");
    });
};

Dbms.login = function (loginjson, apires) {
    var statement = "SELECT * FROM user WHERE email = ? AND pswd = ?";
    var values = [loginjson.email, loginjson.password];

    sql.query(statement, values, function(err, res) {
        if(err) {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
        else if (res.length) {
            if (res[0].id_usr) {
                var ishost = res[0].is_host;
                console.log("res[0].id_usr: "+res[0].id_usr);
                let token = uuidv4();
                return sql.query("insert into session(ref_id_usr, token) values(?, ?);", [res[0].id_usr, token], (err, res) => {
                    if (err) {
                        console.log("unable to generate token for uid: ", id);
                        console.log(err);
                        apires.send(JSON.stringify({"status":false,"token":""}));
                    }
                    else {
                        apires.send(JSON.stringify({"status": true, "token": token, "ishost": ishost}));
                    }
                });
            }
        }
        else {
            apires.send(JSON.stringify({"status":false,"token":""}));
        }
    });
};

Dbms.register_user = function (registrationjson, result) {   
    let statement = "INSERT INTO user (is_host, nome, cognome, data_nascita, email, pswd) VALUES(?,?,?,?,?,?)";
    let values = [0,registrationjson.firstname, registrationjson.surname, registrationjson.birthday, registrationjson.email, registrationjson.password];
    
    sql.query(statement, values, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazioni_by_token = function (token, result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE p.host = s.ref_id_usr AND s.token = ?';
  
    sql.query(statement, token, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


Dbms.get_annunci_by_token = function (token, result) {
    let statement = "SELECT * FROM annunci as a, session as s WHERE a.host = s.ref_id_usr AND s.token = ?"

    sql.query(statement, token, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


Dbms.get_annuncio = function (annuncio, result) {

    let statement = "SELECT * FROM annunci WHERE id_ann = ? "

    sql.query(statement, annuncio, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};

Dbms.insert_annuncio = function (json, result) { 
    sql.query("SELECT * FROM session WHERE token = ?", json.token, (err, res) => {
        console.log(res);
        if(err) {
            result(err, res);
        } else {
            if( res.length && res[0].ref_id_usr) {
                var id_usr = res[0].ref_id_usr
                let statement = `INSERT INTO annunci(host,nome_annuncio,luogo,indirizzo,descrizione,attrazioni,is_bnb,n_ospiti,prezzo_notte,n_letti_singoli,n_letti_matr,n_divano_letto,n_camere,n_bagni,colazione,AC,parcheggio,wifi,animali_domestici_ammessi,baby_friendly,tassa_soggiorno)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let values = [id_usr,json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.animali_domestici_ammessi,json.baby_friendly,json.tassa_soggiorno];
                sql.query(statement, values, function (err, res) {
                    if(err) {
                        result(err, res);
                    } else {
                        sql.query("UPDATE user SET is_host = 1 WHERE id_usr = ?", id_usr);
                        result(null, res);
                    }
                });
            } else {
                result(null, res);
            }
        }
    });
};



Dbms.update_annuncio = function (json, result) {
    sql.query("SELECT ref_id_usr AS id FROM session WHERE token = ?", json.token, (err, res) => {
        if(err) {
            result(err, res);
        } else {
            if (res.length) {
                if(res[0].id) {
                    var id_usr = res[0].id;
                    let statement = 'UPDATE annunci SET nome_annuncio = ?,luogo = ?,indirizzo = ?,descrizione = ?,attrazioni = ?,is_bnb = ?,n_ospiti = ?,prezzo_notte = ?,n_letti_singoli = ?,n_letti_matr = ?,n_divano_letto = ?,n_camere = ?,n_bagni = ?,colazione = ?,AC = ?,parcheggio = ?,wifi = ?,animali_domestici_ammessi = ?,baby_friendly = ? WHERE id_ann = ? AND host = ?'
                    let values = [json.nome_annuncio,json.luogo,json.indirizzo,json.descrizione,json.attrazioni,json.is_bnb,json.n_ospiti,json.prezzo_notte,json.n_letti_singoli,json.n_letti_matr,json.n_divano_letto,json.n_camere,json.n_bagni,json.colazione,json.AC,json.parcheggio,json.wifi,json.animali_domestici_ammessi,json.baby_friendly,json.id_ann, id_usr];

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
            }
        }
    });
};

Dbms.get_annunci_by_luogo = function (luogo, result) {
    let statement = "SELECT * FROM annunci WHERE luogo = ? "

    sql.query(statement, luogo, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.insert_prenotazione = function (json, result) {
    sql.query("SELECT ref_id_usr AS id FROM session WHERE token = ?", json.token, (err, res) => {
        if(err) {
            result(err, res);
        } else {
            if (res.length) {
                var id_usr = res[0].id;
                sql.query("SELECT host FROM annunci WHERE id_ann = ?", id_usr, (err,res) => {
                    if(err) {
                        result(err, null);
                    } else {
                        if (res.length) {
                            var host = res[0].host;
                            var statement = `INSERT INTO prenotazioni(ref_id_ann,checkin,checkout,stato,tot_pagato,guest,host)VALUES(?,?,?,?,?,?,?)`;
                            var values = [json.ref_id_ann,json.checkin,json.checkout,"sospeso",json.tot_pagato,id_usr,host];
                            sql.query(statement, values, function (err, res) {
                                if(err) {
                                    result(err, null);
                                } else {
                                    result(null, res);
                                }
                            });
                        }
                    }
                });
            }
        }
    });
};


Dbms.get_prenotazioni_by_host = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host';
    sql.query(statement, token, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazioni_by_guest = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.guest';
    sql.query(statement, token, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_by_host = function (id_prenotazione, token, result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? AND s.ref_id_usr = p.host AND p.id_prenotazione = ?';
    sql.query(statement, [token, id_prenotazione], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_attive = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host and p.stato = ? ';
    sql.query(statement, [token,"attiva"],function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_in_corso = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host and p.stato = ? ';
    sql.query(statement, [token,"incorso"],function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_concluse = function (token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host and p.stato = ? ';
    sql.query(statement, [token,"conclusa"],function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Dbms.get_prenotazione_by_guest = function (id_prenotazione, token,result) {
    let statement = 'SELECT * FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.guest AND p.id_prenotazione';
    sql.query(statement, [token, id_prenotazione], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};


Dbms.delete_prenotazione = function (id_prenotazione, token, result) {
    let statement = 'DELETE FROM prenotazioni AS p WHERE p.id_prenotazione = ? AND p.host = (SELECT ref_id_usr AS host FROM session WHERE token = ? )'

    sql.query(statement, [id_prenotazione, token], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};


Dbms.update_prenotazione_attiva = function (id_prenotazione, token, result) {
    let statement = 'UPDATE prenotazioni SET stato = ? WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';
    sql.query(statement, ["attiva", id_prenotazione, token], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
         }
  });
};

Dbms.update_prenotazione_in_corso  = function (id_prenotazione, token, result) {
    let statement = 'UPDATE prenotazioni SET stato = ? WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';

    sql.query(statement, ["incorso", id_prenotazione, token], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Dbms.update_prenotazione_conclusa  = function (id_prenotazione, token, checkout, result) {
    let statement = 'UPDATE prenotazioni SET stato = ? ,checkout = ? WHERE id_prenotazione = ? AND host = (SELECT ref_id_usr AS host FROM session WHERE token = ?)';

    sql.query(statement, ["conclusa", id_prenotazione, token,checkout], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Dbms.guadagno_host = function (token,result) {
    let statement = 'SELECT sum(tot_pagato) FROM prenotazioni as p, session as s WHERE s.token = ? and s.ref_id_usr = p.host';
    sql.query(statement,token,function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res[0]);
        }
    });
};



module.exports = Dbms;