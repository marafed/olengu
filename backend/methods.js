'use strict';
const bcrypt = require('bcrypt');

var Dbms = require('./dbms');

exports.welcome = function(req, res) {
    var par = req.params.id
    return res.send('welcome' + par.toString());
};

exports.insertAnnuncio = function(req, res) {
  console.log(req.body);
  Dbms.insert_annuncio(req.body,function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updateUser = function(req, res) {
  Dbms.update_user(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getAnnunciByToken = function(req, res) {
  Dbms.get_annunci_by_token(req.params.token, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getAnnuncio = function(req, res) {

  Dbms.get_annuncio(req.params.id_ann, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getAnnunciByLuogo = function(req, res) {
  Dbms.get_annunci_by_luogo(req.params.nomeluogo, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updateAnnuncio = function(req, res) {
  Dbms.update_annuncio(req.body,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};


exports.insertPrenotazione = function(req,res) {
  Dbms.insert_prenotazione(req.body,function(err, result){
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniByHost= function(req, res) {
  Dbms.get_prenotazioni_by_host(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniByGuest= function(req, res) {
  Dbms.get_prenotazioni_by_guest(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioneByHost= function(req, res) {
  Dbms.get_prenotazione_by_host(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioneByGuest= function(req, res) {
  Dbms.get_prenotazione_by_guest(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniAttive= function(req, res) {
  Dbms.get_prenotazione_attive(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};


exports.getPrenotazioniInCorso= function(req, res) {
  Dbms.get_prenotazione_in_corso(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.getPrenotazioniConcluse= function(req, res) {
  Dbms.get_prenotazione_concluse(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};




exports.updatePrenotazioneInCorso = function(req, res) {
  Dbms.update_prenotazione_in_corso (req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.updatePrenotazioneAttiva = function(req, res) {
  Dbms.update_prenotazione_attiva(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.updatePrenotazioneConclusa = function(req, res) {
  Dbms.update_prenotazione_conclusa(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.deletePrenotazione = function(req, res) {
  Dbms.delete_prenotazione(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.login = function(req, res) {
  Dbms.login(req.body, res);
};

exports.logout = function(req, res) {
  Dbms.logout(req.params.token, res);
};

exports.register = function(req, res) {
  console.log("siamo qui")
  Dbms.register_user(req.body, (err, res_db) => {
    if(err) 
      res.send(err);
    res.send(res_db);
   });
};

exports.guadagnoHost = function(req, res) {
  Dbms.guadagno_host(req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};