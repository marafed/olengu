const express = require('express');
const bodyParser = require('body-parser');

app = express();

var port = normalizePort(process.env.PORT || '3000');
app.listen(port);
console.log('server started on port ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);