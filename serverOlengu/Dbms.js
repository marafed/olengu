'use strict';
var sql = require('./db.js');

var Dbms = function(dbms){
    this.status = task.status;
    this.created_at = new Date();
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

        var obj = JSON.parse(json);
        let statement = `INSERT INTO annunci(ref_id_usr,nome_annuncio,luogo,indirizzo,ref_id_filtri,descrizione,attrazioni)VALUES(?,?,?,?,?,?,?)`;
        let values = [obj.ref_id_usr,obj.nome_annuncio,obj.luogo,obj.indirizzo,obj.ref_id_filtri,obj.descrizione,obj.attrazioni];

        sql.query(statement, values, function (err, res) {
                if(err) {
                    result(err, null);
                  }
                else{
                    result(null, res);
                }
            });
};



Dbms.update_annuncio = function (json, result) {

    console.log(json)

    var obj = JSON.parse(json);

    let statement = 'UPDATE annunci SET nome_annuncio=?, luogo=?, descrizione=?, attrazioni=?, indirizzo=? WHERE id_ann = ?'
    let values = [obj.nome_annuncio, obj.luogo, obj.descrizione, obj.attrazioni, obj.indirizzo, obj.id_ann];

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

    var obj = JSON.parse(json);
    let statement = `INSERT INTO prenotazioni(ref_id_usr,ref_id_ann,check_in_giorno,check_in_mese,check_in_anno,check_out_giorno,check_out_mese,check_out_anno)VALUES(?,?,?,?,?,?,?,?)`;
    let values = [obj.ref_id_usr,obj.ref_id_ann,obj.check_in_giorno,obj.check_in_mese,obj.check_in_anno,obj.check_out_giorno,obj.check_out_mese,obj.check_out_anno];

    sql.query(statement, values, function (err, res) {
            if(err) {
                result(err, null);
              }
            else{
                result(null, res);
            }
        });
};

//sovrascrive il dato, fare il get prima, e sommare
Dbms.updatePermanenza = function (json, result) {

        var obj = JSON.parse(json);

        let statement = 'UPDATE controlloCumulativo SET permanenza = ? WHERE id_utente= ? AND id_struttura = ?'
        let values = [obj.permanenza, obj.id_utente, obj.id_struttura];

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

Dbms.getControlloCumulativo = function (json, result) {

      var obj = JSON.parse(json);
      let statement = "SELECT * FROM controlloCumulativo WHERE id_utente = ? AND id_struttura = ?"
      let values = [obj.id_utente, obj.id_struttura];

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



Dbms.getPrenotazioniEffettuateJson = function (id, result) {
      sql.query("SELECT * FROM prenotazioni INNER JOIN strutture ON strutture.id_struttura = prenotazioni.id_struttura INNER JOIN users ON users.id_user = strutture.id_utente WHERE user_id = ?",id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
             }
      });
};

Dbms.updatePrenotazioneStatus = function (json_status, result) {

    var obj = JSON.parse(json_status);

    let statement = 'UPDATE prenotazioni SET status =? WHERE id_prenotazione = ?'
    let values = [obj.status, obj.id_prenotazione];

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

// users

Dbms.logout_model = function (result) {
      result(null, "logout");
};

Dbms.getAllUsers = function (result) {
      sql.query("SELECT * FROM Users", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
             }
      });
};

Dbms.insertAUser = function (userjson, result) {

        var obj = JSON.parse(userjson);

        let statement = `INSERT INTO Users(username,password,is_owner,email,telefono,nome,cognome)VALUES(?,?,?,?,?,?,?)`;
        let values = [obj.username, obj.password, obj.is_owner, obj.email, obj.telefono, obj.nome, obj.cognome];

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

//ritorna l'user id dati email e password necessario per tutte le operazioni
Dbms.login = function (loginjson, result) {

      var obj = JSON.parse(loginjson);

      let statement = "SELECT * FROM `Users` WHERE `email` = ? AND `password` = ?";
      let values = [obj.email, obj.password];

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


Dbms.updateUserData = function (userjson, result) {

        var obj = JSON.parse(userjson);

        let statement = 'UPDATE users SET username = ?, password = ?,nome = ? ,cognome = ?  WHERE id_user = ?'
        let values = [obj.username, obj.password, obj.nome, obj.cognome, obj.id_user];

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

Dbms.returnUserByUserId = function (user_id, result) {


        let statement = 'SELECT * from users WHERE id_user=?'
        sql.query(statement, user_id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res[0]);
             }
      });
};

Dbms.checkUserRegistration = function (email, result) {
    let statement = 'SELECT * from users WHERE email = ?'
    sql.query(statement, email, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res[0]);
         }
  });
};



// tabella dati fatt

Dbms.insertDatiFatturazione = function (fatturazioneDatijson, result) {

        var obj = JSON.parse(fatturazioneDatijson);

        let statement = "INSERT INTO DatiFatturazione(IBAN, piva, beneficiario, id_utente) VALUES (?,?,?,?)"
        let values = [obj.IBAN, obj.piva, obj.beneficiario, obj.id_utente];

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


Dbms.getAllDatiFatturazione = function (result) {
      sql.query("SELECT * FROM DatiFatturazione", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.updateDatiFatturazione = function (fatturazioneDatijson, result) {

        var obj = JSON.parse(fatturazioneDatijson);

        let statement = 'UPDATE DatiFatturazione SET IBAN = ?, piva = ?, beneficiario = ?  WHERE id_utente = ?'
        let values = [obj.IBAN, obj.piva, obj.beneficiario, obj.id_utente];

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

Dbms.deleteDatiFatturazioneRecordById = function (id, result) {

        let statement = 'DELETE FROM DatiFatturazione WHERE id_utente = ?'
        sql.query(statement, id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
             }
      });
};


// tabella strutture

Dbms.insertStruttura = function (obj, result) {

        let statement = "INSERT INTO Strutture(id_utente, tipologia_struttura, nome_struttura, via, nazione, citta, provincia, cap, descrizione, languages) VALUES (?,?,?,?,?,?,?,?,?,?)"
        let values = [obj.id_utente, obj.tipologia_struttura, obj.nome_struttura, obj.via, obj.nazione, obj.citta, obj.provincia, obj.cap, obj.descrizione, obj.languages];

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

Dbms.getStrutturaIdBySomeData = function (data_json, result) {

      var obj = JSON.parse(data_json);

      let statement = "SELECT id_struttura FROM strutture WHERE id_utente = ? AND via = ?"
      let values = [obj.id_utente, obj.via];


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



Dbms.getAllStrutture = function (result) {
      sql.query("SELECT * FROM Strutture", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.getStruttureByOwnerID = function (id, result) {
      sql.query("SELECT * FROM Strutture WHERE id_utente = ?",id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.getStruttureByCitta = function (citta_name, result) {
      sql.query("SELECT * FROM Strutture WHERE citta = ?", citta_name,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
                }
      });
};

Dbms.getStruttureByCittaid = function (citta_id, result) {
      sql.query("SELECT * FROM Strutture WHERE cittaid = ?",citta_id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};


Dbms.updateIndirizzoStrutturaByStrutturaId = function (indirizzoStrutturajson, result) {

        var obj = JSON.parse(indirizzoStrutturajson);

        let statement = 'UPDATE Strutture SET  nome_struttura=?, via =?, nazione=?, citta=?, cittaid=?,  provincia=?, cap=?, languages=?, descrizione=? WHERE id_struttura = ?'
        let values = [obj.nome_struttura, obj.via, obj.nazione, obj.citta, obj.cittaid, obj.provincia, obj.cap, obj.languages, obj.descrizione, obj.id_struttura];

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

Dbms.updateServiziStrutturaByStrutturaId = function (indirizzoStrutturajson, result) {

        var obj = JSON.parse(indirizzoStrutturajson);

        let statement = 'UPDATE Strutture SET   has_wifi=?, has_reception=?, has_parking=?, has_inroomservice=?, has_garden=?, has_terrace=?, has_animals=? WHERE id_struttura = ?'
        let values = [obj.has_wifi, obj.has_reception, obj.has_parking, obj.has_inroomservice, obj.has_garden, obj.has_terrace, obj.has_animals, obj.id_struttura];

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

Dbms.getStrutturaByStrutturaId = function (id, result) {
      sql.query("SELECT * FROM Strutture WHERE id_struttura = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res[0]);
                }
      });
};

Dbms.deleteStrutturaByStrutturaId = function (id, result) {
      sql.query("DELETE FROM Strutture WHERE id_struttura = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
                }
      });
};



// recensioni


Dbms.insertRecensione = function (recensionejson, result) {

        var obj = JSON.parse(recensionejson);

        let statement = "INSERT INTO Recensioni(id_struttura, id_utente, testo, voto) VALUES (?,?,?,?)"
        let values = [obj.id_struttura, obj.id_utente, obj.testo, obj.voto];

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

Dbms.getAllRecensioni = function (result) {
      sql.query("SELECT * FROM Recensioni", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};


Dbms.getRecensioniByStrutturaId = function (strutturaid, result) {
      sql.query("SELECT * FROM Recensioni WHERE id_struttura = ?",strutturaid,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.getRecensioniByUserId = function (id, result) {
      console.log(id)
      sql.query("SELECT * FROM Recensioni WHERE id_utente = ? ", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};


Dbms.deleteRecensioneByRecensioneId = function (id, result) {

        let statement = 'DELETE FROM Recensioni WHERE id_recensione = ?'
        sql.query(statement, id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
             }
      });
};

// prezzi

Dbms.insertPrezziStruttura = function (jsonprezzi, result) {

        var obj = JSON.parse(jsonprezzi);

        let statement = "INSERT INTO Prezzi(id_struttura, feriali_bs, weekend_bs, feriali_as, weekend_as) VALUES (?,?,?,?,?)"
        let values = [obj.id_struttura, obj.feriali_bs, obj.weekend_bs, obj.feriali_as, obj.weekend_as];

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

Dbms.getPrezzoByStrutturaId = function (id, result) {
      sql.query("SELECT * FROM Prezzi WHERE id_struttura = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res[0]);
                }
      });
};

Dbms.getAllPrezzi = function (result) {
      sql.query("SELECT * FROM Prezzi", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.updatePrezziForStruttura = function (prezzi_json, result) {

        var obj = JSON.parse(prezzi_json);

        let statement = 'UPDATE Prezzi SET feriali_bs =?, weekend_bs=?, feriali_as=?, weekend_as=? WHERE id_struttura = ?'
        let values = [obj.feriali_bs, obj.weekend_bs, obj.feriali_as, obj.weekend_as, obj.id_struttura];

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

Dbms.deletePrezziForStruttura = function (id, result) {

        let statement = 'DELETE FROM prezzi WHERE id_struttura = ?'
        sql.query(statement, id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
             }
      });
};


//prenotazioni

Dbms.insertPrenotazione = function (jsonprenotazione, result) {

        var obj = JSON.parse(jsonprenotazione);
        let statement = "INSERT INTO Prenotazioni(id_struttura, user_id, giorno_inizio, mese_inizio, anno_inizio, giorno_fine, mese_fine, anno_fine, nOspiti, totalepagato) VALUES (?,?,?,?,?,?,?,?,?,?)"
        let values = [obj.id_struttura, obj.user_id, obj.giorno_inizio, obj.mese_inizio, obj.anno_inizio, obj.giorno_fine, obj.mese_fine, obj.anno_fine, obj.nOspiti, obj.totalepagato];

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

Dbms.getPrenotazioneIdBySomeData = function (data_json, result) {

      var obj = JSON.parse(data_json);

      let statement = "SELECT id_prenotazione FROM prenotazioni WHERE nOspiti = ? AND totalepagato=?"
      let values = [obj.nOspiti, obj.totalepagato];

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


Dbms.deletePrenotazioneByIdPrenotazione = function (id, result) {

        let statement = 'DELETE FROM Prenotazioni WHERE id_prenotazione = ?'
        sql.query(statement, id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
             }
      });
};


Dbms.getPrenotazioneByStrutturaId = function (id, result) {
      sql.query("SELECT * FROM Prenotazioni WHERE id_struttura = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.getPrenotazioniByUserid = function (id, result) {
      sql.query("SELECT * FROM Prenotazioni WHERE user_id = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
                }
      });
};

//luoghi

Dbms.getLuogoRecordByLuogoName = function (name, result) {
      sql.query("SELECT * FROM Luoghi WHERE nome_luogo = ?", name,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res[0]);
                }
      });
};


//foto

Dbms.insertPicturePathInDb = function (jsonpicture, result) {

        var obj = JSON.parse(jsonpicture);
        var path_string = "/pictures/" + obj.percorso
        console.log(path_string)

        let statement = "INSERT INTO Foto(id_struttura, percorso) VALUES (?,?)"
        let values = [obj.id_struttura, obj.percorso];

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


Dbms.getAllPictures = function (result) {
      sql.query("SELECT * FROM Foto", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.deletePictureByPictureId = function (id, result) {

        let statement = 'DELETE FROM Foto WHERE id_foto = ?'
        sql.query(statement, id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
             }
      });
};


Dbms.getPicturesByStrutturaId = function (id, result) {
      sql.query("SELECT * FROM Foto WHERE id_struttura = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res[0]);
                }
      });
};

Dbms.getPicturessByStrutturaId = function (id, result) {
      sql.query("SELECT * FROM Foto WHERE id_struttura = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
                }
      });
};



//camera
Dbms.insertCameraInDb = function (jsoncamera, result) {

        var obj = JSON.parse(jsoncamera);

        let statement = "INSERT INTO Camere(id_struttura, nomeCamera, nOspiti) VALUES (?,?,?)"
        let values = [obj.id_struttura, obj.nomeCamera, obj.nOspiti];

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


Dbms.getAllCameras = function (result) {
      sql.query("SELECT * FROM Camere", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};


Dbms.deleteCameraById= function (id, result) {

        let statement = 'DELETE FROM Camere WHERE id_camera = ?'
        sql.query(statement, id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
             }
      });
};

Dbms.getCamerasByStrutturaId = function (id, result) {
      sql.query("SELECT * FROM Camere WHERE id_struttura = ?", id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

// alloggiatori

Dbms.insertAlloggiatore = function (jsoncamera, result) {

        var obj = JSON.parse(jsoncamera);

        let statement = "INSERT INTO Alloggiatori(id_prenotazione, nome_cognome, giorno_nascita, mese_nascita, anno_nascita, luogo_nascita, ncartaidentita) VALUES (?,?,?, ?, ?, ?,?)"
        let values = [obj.id_prenotazione, obj.nome_cognome, obj.giorno_nascita, obj.mese_nascita, obj.anno_nascita,  obj.luogo_nascita, obj.ncartaidentita];

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


Dbms.getAllAlloggiatore = function (result) {
      sql.query("SELECT * FROM Alloggiatori", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

Dbms.getAllAlloggiatoreByPrenotazioneId = function (id, result) {
      sql.query("SELECT * FROM Alloggiatori WHERE id_prenotazione = ?", id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  //console.log('users : ', res);
                  result(null, res);
                }
      });
};

//resoconto

Dbms.insertResoconto = function (resocontoData, result) {

        var obj = JSON.parse(resocontoData);

        let statement = "INSERT INTO resoconto(id_utente, giorno, mese, anno) VALUES (?,?,?,?)"
        let values = [obj.id_utente, obj.giorno, obj.mese, obj.anno];

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

Dbms.getResocontoByUserId = function (id, result) {
      sql.query("SELECT * FROM resoconto WHERE id_utente = ?", id,  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res[0]);
                }
      });
};

Dbms.getAllResoconti = function (result) {
      sql.query("SELECT * FROM resoconto",  function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  result(null, res);
            }
      });
};


Dbms.updateResocontoByUserId = function (jsonresoconto, result) {

        var obj = JSON.parse(jsonresoconto);

        let statement = 'UPDATE resoconto SET giorno =?, mese=?, anno=? WHERE id_utente = ?'
        let values = [obj.giorno, obj.mese, obj.anno, obj.id_utente];

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

module.exports = Dbms;
