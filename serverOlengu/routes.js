'use strict';

module.exports = function(app) {
  var methods = require('./methods');

    app.route('/welcome/:id').get(methods.welcome);

    app.route('/getAnnunciByUserId/:id').get(methods.getAnnunciByUserId)

    app.route('/insertAnnuncio/:annunciojson').get(methods.insertAnnuncio)

    app.route('/updateannuncio/:annunciojson').get(methods.updateAnnuncio)

    app.route('/getAnnunciByLuogo/:nomeluogo').get(methods.getAnnunciByLuogo)

    app.route('/insertPrenotazione/:prenotazionejson').get(methods.insertPrenotazione)
  

  };


