module.exports = function(app) {

  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getannunci/:token').get(methods.getAnnunciByToken); // i miei annunci si FUNZIONA

  app.route('/api/getannuncio/:id_annuncio').get(methods.getAnnuncio); //annuncio click FUNZIONA 

  app.route('/api/insertannuncio').post(methods.insertAnnuncio) // inserisci annuncio si cazzo FUNZIONA yes

  app.route('/api/updateannuncio').post(methods.updateAnnuncio) //modifica annuncio  si cazzo FUNZIONA yes

  app.route('/api/getannuncibyLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) //ricerca si cazzo  FUNZIONA yes

  app.route('/api/insertprenotazione').post(methods.insertPrenotazione) // inserisci Prenotazione si FUNZIONA yes

  app.route('/api/updateprenotazioneconclusa/:id_prenotazione/:token').get(methods.updatePrenotazioneConclusa);

  app.route('/api/updateprenotazioneincorso/:id_prenotazione/:token').get(methods.updatePrenotazioneInCorso); //cambia status prenotazione in corso yes

  app.route('/api/updateprenotazioneattiva/:id_prenotazione/:token').get(methods.updatePrenotazioneAttiva) // cambia status prenotazione attiva FUNZIONA yes

  app.route('/api/deletePrenotazione/:id_prenotazione/:token').get(methods.deletePrenotazione) //cancella prenotazione (by Host)

  app.route('/api/getprenotazionihost/:token').get(methods.getPrenotazioniByHost);

  app.route('/api/getprenotazionehost/:token').get(methods.getPrenotazioneByHost);

  app.route('/api/getprenotazioniguest/:token').get(methods.getPrenotazioniByGuest);

  app.route('/api/getprenotazioneguest/:token').get(methods.getPrenotazioneByGuest);

  app.route('/api/auth/login').post(methods.login) //yes

  app.route('/api/auth/register').post(methods.register) //yes
};
