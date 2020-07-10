module.exports = function(app) {

  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getannunci/:token').get(methods.getAnnunciByToken); // 

  app.route('/api/getannuncio/:id_ann').get(methods.getAnnuncio); //

  app.route('/api/insertannuncio').post(methods.insertAnnuncio) 

  app.route('/api/updateannuncio').post(methods.updateAnnuncio) 

  app.route('/api/getannuncibyLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) 

  app.route('/api/insertprenotazione').post(methods.insertPrenotazione) 

  app.route('/api/updateprenotazioneconclusa/:id_prenotazione/:token').get(methods.updatePrenotazioneConclusa);

  app.route('/api/updateprenotazioneincorso/:id_prenotazione/:token').get(methods.updatePrenotazioneInCorso);

  app.route('/api/updateprenotazioneattiva/:id_prenotazione/:token').get(methods.updatePrenotazioneAttiva);

  app.route('/api/deletePrenotazione/:id_prenotazione/:token').get(methods.deletePrenotazione) 

  app.route('/api/getprenotazionihost/:token').get(methods.getPrenotazioniByHost); //si

  app.route('/api/getprenotazionehost/:id_prenotazione/:token').get(methods.getPrenotazioneByHost);

  app.route('/api/getprenotazioniguest/:token').get(methods.getPrenotazioniByGuest); //si

  app.route('/api/getprenotazioneguest/:id_prenotazione/:token').get(methods.getPrenotazioneByGuest);

  app.route('/api/getprenotazioniattive/:token').get(methods.getPrenotazioniAttive); 

  app.route('/api/getprenotazioneincorso/:token').get(methods.getPrenotazioniInCorso); 

  app.route('/api/getprenotazioneconcluse/:token').get(methods.getPrenotazioniConcluse); 

  app.route('api/guadagnohost/:token').get(methods.guadagnoHost);  

  app.route('/api/getprenotazionehost/:token/:id_prenotazione').get(methods.getPrenotazioneByHost);

  app.route('/api/getprenotazioneguest/:token/:id_prenotazione').get(methods.getPrenotazioneByGuest);

  app.route('/api/auth/login').post(methods.login) //yes

  app.route('/api/auth/register').post(methods.register) //yes

  app.route('/api/auth/logout/:token').get(methods.logout)
};
