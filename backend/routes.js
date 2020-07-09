
module.exports = function(app) {
  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getannuncibyid/:id').get(methods.getAnnunciByUserId); // i miei annunci si 

  app.route('/api/getannunciobyid/:id').get(methods.getAnnunciById); //annuncio click

  app.route('/api/updateannuncio').post(methods.updateAnnuncio); //modifica annuncio  si cazzo

  app.route('/api/insertprenotazione').post(methods.insertPrenotazione); // inserisci Prenotazione si

  app.route('/api/getPrenotazioniByToken/:token').get(methods.getPrenotazioniByToken); // le mie prenotazioni si 

  app.route('/api/updateprenotazioneattiva/:id_prenotazione').get(methods.updatePrenotazioneAttiva); // cambia status prenotazione attiva

  app.route('/api/updateprenotazioneincorso/:id_prenotazione').get(methods.updatePrenotazioneInCorso); //cambia status prenotazione in corso

  app.route('/deletePrenotazione/:prenotazioneid').get(methods.deletePrenotazione); //cancella prenotazione (by Host)
  // vediamo un po //
  app.route('/api/updateuser/:id_usr').get(methods.updateUser); //lo fai diventare host

  app.route('/api/getprenotazioniattiva/:id_usr').get(methods.getPrenotazioniAttive); // ti da le prenotazioni attive

  app.route('/api/getprenotazioniincorso/:id_usr').get(methods.getPrenotazioniInCorso); // ti da le prenotazioni attive

  // search
  app.route('/api/getannuncibyLuogo/:nomeluogo').get(methods.getAnnunciByLuogo); //ricerca si cazzo

  //auth
  app.route('/api/auth/login').post(methods.login);
  app.route('/api/auth/register').post(methods.register);

  //insert
  app.route('/api/insertAnnuncio').post(methods.insertAnnuncio); // inserisci annuncio si cazzo

};