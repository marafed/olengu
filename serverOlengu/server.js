// server
var cors = require('cors');
const fileUpload = require('express-fileupload');
const express = require('express'),

app = express();

//
app.use(fileUpload());
app.use('/pictures',express.static('pictures'));

//
app.use(cors({
origin: 'http://localhost:3000'
}));

bodyParser = require('body-parser');

const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'olengu'
});

mc.connect();
app.listen(8080);
console.log('server started on: 8080 ');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/pictures/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/pictures/${file.name}` });
  });
});
