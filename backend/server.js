const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var cors = require('cors');



app = express();

app.use(cors({
  origin: 'http://localhost:3000'
  }));

var port = process.env.PORT || 3500;
app.listen(port);
console.log('server started on port ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

