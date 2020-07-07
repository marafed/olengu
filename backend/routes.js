
module.exports = function(app) {
  var methods = require('./methods');

  app.route('/welcome/:id').get(methods.welcome); //test

  app.route('/api/getAnnunciByUserId/:id').get(methods.getAnnunciByUserId) // i miei annunci si 

  app.route('/api/getannunciobyid/:id').get(methods.getAnnunciById) //annuncio click

  app.route('/api/insertannuncio').post(methods.insertAnnuncio) // inserisci annuncio si

  app.route('/api/updateannuncio').post(methods.updateAnnuncio) //modifica annuncio  si

  app.route('/api/getAnnunciByLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) //ricerca si

  app.route('/api/insertprenotazione').post(methods.insertPrenotazione) // inserisci Prenotazione si

  app.route('/api/getPrenotazioniByUserId/:id').get(methods.getPrenotazioniUserId) // le mie prenotazioni si 

  app.route('/api/updateprenotazione').post(methods.updatePrenotazione) // cambia status prenotazione

  app.route('/deletePrenotazione/:prenotazioneid').get(methods.deletePrenotazione) //cancella prenotazione (by Host)

  app.route('/api/auth/login').post(methods.login)

  app.route('/api/auth/register').post(methods.register)

  };