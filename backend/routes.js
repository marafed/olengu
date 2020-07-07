
module.exports = function(app) {
  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getAnnunciByUserId/:id').get(methods.getAnnunciByUserId) // i miei annunci

  app.route('/api/insertAnnuncio').post(methods.insertAnnuncio) // inserisci annuncio 

  app.route('/api/updateannuncio').post(methods.updateAnnuncio) //modifica annuncio 

  app.route('/api/getAnnunciByLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) //ricerca

  app.route('/insertPrenotazione/:prenotazionejson').get(methods.insertPrenotazione) // inserisci Prenotazione 

  app.route('/updatePrenotazione/:updatejson').get(methods.updatePrenotazione) // cambia status prenotazione

  app.route('/deletePrenotazione/:prenotazioneid').get(methods.deletePrenotazione) //cancella prenotazione (by Host)

  app.route('/api/auth/login').post(methods.login)

  app.route('/api/auth/register').post(methods.register)

  };