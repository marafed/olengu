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
  Dbms.get_annuncio(req.params.id_annuncio, function(err, result) {
    if (err)
      res.send(err);
    res.json(result[0]);
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

exports.getPrenotazioniByToken= function(req, res) {
  Dbms.get_prenotazioni_by_token(req.params.token,function(err, result) {
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

exports.deletePrenotazione = function(req, res) {
  console.log(res.params)
  Dbms.delete_prenotazione(req.params.id_prenotazione, req.params.token,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.login = function(req, res) {
  Dbms.login(req.body, res);
};

exports.register = function(req, res) {
  console.log("siamo qui")
  Dbms.register_user(req.body, (err, res_db) => {
    if(err) 
      res.send(err);
    res.send(res_db);
   });
};
