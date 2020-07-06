'use strict';

module.exports = function(app) {
  var methods = require('./methods');

    app.route('/welcome/:id').get(methods.welcome); //test

    app.route('/getAnnunciByUserId/:id').get(methods.getAnnunciByUserId) // i miei annunci

    app.route('/insertAnnuncio/:annunciojson').get(methods.insertAnnuncio) // inserisci annuncio 

    app.route('/updateannuncio/:annunciojson').get(methods.updateAnnuncio) //modifica annuncio 

    app.route('/getannuncio/:annunciojson').get(methods.getAnnuncio) //visuallizzo quell'annuncio specifico

    app.route('/getAnnunciByLuogo/:nomeluogo').get(methods.getAnnunciByLuogo) //ricerca

    app.route('/insertPrenotazione/:prenotazionejson').get(methods.insertPrenotazione) // inserisci Prenotazione 

    app.route('/updatePrenotazione/:updatejson').get(methods.updatePrenotazione) // cambia status prenotazione
  
    app.route('/deletePrenotazione/:prenotazioneid').get(methods.deletePrenotazione) //cancella prenotazione (by Host)
  //app.route('/insertfiltri/:filtrijson').get(methods.insertFiltri)

  //app.route('/itemDetails/:detailjson').get(methods.getItemDetails)

  };

