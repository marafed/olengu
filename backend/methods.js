'use strict';
const bcrypt = require('bcrypt');

var Dbms = require('./dbms');

exports.welcome = function(req, res) {
    var par = req.params.id
    return res.send('welcome' + par.toString());
};

exports.insertAnnuncio = function(req, res) {
  console.log("SIAMO QUI")
  console.log(req.body)
  Dbms.insert_annuncio(req.body,function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.getAnnunciByUserId = function(req, res) {
  Dbms.get_annunci_by_user_id(req.params.id, function(err, result) {
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

exports.getPrenotazioniUserId= function(req, res) {
  Dbms.get_prenotazioni_by_user_id(req.params.id,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.updatePrenotazione = function(req, res) {
  Dbms.update_prenotazione(req.body,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.deletePrenotazione = function(req, res) {
  Dbms.delete_prenotazione(req.params.prenotazioneid,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.login = function(req, res) {
  Dbms.loginX(req.body, (err, res_db) => {
    if(err) 
      res.send(err);
    res.send(res_db);
   });
};

exports.register = function(req, res) {
  console.log("siamo qui")
  Dbms.register_user(req.body, (err, res_db) => {
    if(err) 
      res.send(err);
    res.send(res_db);
   });
};
