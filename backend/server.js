const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app = express();

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  

var port = normalizePort(process.env.PORT || '3000');
app.listen(port);
console.log('server started on port ' + port);

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