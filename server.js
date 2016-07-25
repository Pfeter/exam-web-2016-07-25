'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));

const decrypter = require('./decrypter');

app.post('/decode', function (req, res) {
  const encryptedText = {
    text: req.body.text,
    shift: req.body.shift,
  };
  if (req.body.shift < -25 || req.body.shift > 25) {
    res.status(400).json({
      status: 'error',
      error: 'Shift is out of bound',
    });
  } else if (!req.body.text) {
    res.status(400).json({
      status: 'error',
      error: 'Text input is empty',
    });
  } else {
    res.json({
      status: 'ok',
      text: decrypter.decodeText(encryptedText),
    });
  }
});

app.listen(3000);
console.log('Server running');
