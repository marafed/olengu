module.exports = function(app) {

  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getannuncibyid/:id').get(methods.getAnnunciByUserId) // i miei annunci si FUNZIONA

  app.route('/api/getannunciobyid/:id').get(methods.getAnnunciById) //annuncio click FUNZIONA

  app.route('/api/insertannuncio').post(methods.insertAnnuncio) // inserisci annuncio si cazzo FUNZIONA

  app.route('/api/updateannuncio').post(methods.updateAnnuncio) //modifica annuncio  si cazzo FUNZIONA

  app.route('/api/getannuncibyLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) //ricerca si cazzo  FUNZIONA

  app.route('/api/insertprenotazione').post(methods.insertPrenotazione) // inserisci Prenotazione si FUNZIONA


  app.route('/api/updateprenotazioneincorso/:id_prenotazione').get(methods.updatePrenotazioneInCorso); //cambia status prenotazione in corso

  app.route('/api/updateprenotazioneattiva/:id_pren').get(methods.updatePrenotazioneAttiva) // cambia status prenotazione attiva FUNZIONA

  app.route('/api/updateprenotazioneincorso/:id_prenotazione').get(methods.updatePrenotazioneInCorso) //cambia status prenotazione in corso

  app.route('/deletePrenotazione/:prenotazioneid').get(methods.deletePrenotazione) //cancella prenotazione (by Host)

  //todo: ricambiare in login
  app.route('/api/auth/login').post(methods.login_provvisorio)

  app.route('/api/getprenotazioniincorso/:id_usr').get(methods.getPrenotazioniInCorso); // ti da le prenotazioni attive

  // search
  app.route('/api/getannuncibyLuogo/:nomeluogo').get(methods.getAnnunciByLuogo); //ricerca si cazzo

 // app.route('/api/getprenotazioniattiva/:id_usr').get(methods.getPrenotazioneAttiva); // ti da le prenotazioni attive

 // app.route('/api/getprenotazioniincorso/:id_usr').get(methods.getPrenotazioneInCorso); // ti da le prenotazioni attive

 //s app.route('/api/')
  };
