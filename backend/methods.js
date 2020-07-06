'use strict';

var Dbms = require('./dbms');

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
  Dbms.insert_prenotazione(req.params.prenotazionejson,function(err, result){
    if(err)
      res.send(err)
    res.json(result)
  });
};
/*
exports.insertFiltri = function(req,res) {
  console.log("qui");
  Dbms.insert_filtri(req.params.filtrijson,function(err, result){
    if(err)
      res.send(err)
    res.json(result)
  });
};
*/
exports.getAnnuncio = function(req, res) {
  Dbms.get_annuncio(req.params.annunciojson, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.updatePrenotazione = function(req, res) {
  Dbms.update_prenotazione(req.params.updatejson,function(err, result) {
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