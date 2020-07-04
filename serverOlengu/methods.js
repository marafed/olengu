'use strict';

var Dbms = require('./Dbms');

exports.welcome = function(req, res) {
    var par = req.params.id
    return res.send('welcome' + par.toString());
};

exports.insertAnnuncio = function(req, res) {
  Dbms.insert_annuncio(req.params.annunciojson, function(err, result) {
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
  Dbms.update_annuncio(req.params.annunciojson,function(err, result) {
    if(err)
      res.send(err)
    res.json(result)
  });
};

exports.insertPrenotazione = function(req,res) {
  Dbms.insert_prenotazione(req.params.annunciojson,function(err, result){
    if(err)
      res.send(err)
    res.json(result)
  });
};
